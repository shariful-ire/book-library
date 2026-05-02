"use client";

import { useState } from "react";
import booksData from "@/data/books.json";

export default function BooksPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(booksData.map((b) => b.category))];

  // Filter logic
  const filteredBooks = booksData.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || book.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">

      {/* ================= HEADER ================= */}
      <h1 className="text-3xl font-bold">
        All Books 📚
      </h1>

      {/* ================= SEARCH + FILTER ================= */}
      <div className="flex flex-col md:flex-row gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by title..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="select select-bordered w-full md:w-1/3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

      </div>

      {/* ================= BOOKS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-xl">

              {/* IMAGE */}
              <figure>
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="h-44 w-full object-cover"
                />
              </figure>

              {/* CONTENT */}
              <div className="card-body">

                <h2 className="card-title text-lg">
                  {book.title}
                </h2>

                <p className="text-sm text-gray-500">
                  {book.author}
                </p>

                <p className="text-xs text-gray-400">
                  {book.category}
                </p>

                <div className="card-actions justify-end mt-2">

                  <a
                    href={`/books/${book.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Details
                  </a>

                </div>

              </div>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No books found 😢
          </p>
        )}

      </div>

    </div>
  );
}