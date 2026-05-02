import Link from "next/link";
import Marquee from "react-fast-marquee";
import books from "@/data/books.json";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 space-y-10">

      {/* ================= HERO SECTION ================= */}
      <div className="hero min-h-[70vh] bg-base-200 rounded-xl">
        <div className="hero-content text-center">
          <div className="max-w-md">

            <h1 className="text-5xl font-bold">
              Find Your Next Read 📚
            </h1>

            <p className="py-6">
              Explore thousands of books and build your knowledge step by step.
            </p>

            <Link href="/books" className="btn btn-primary">
              Browse Books
            </Link>

          </div>
        </div>
      </div>

      {/* ================= MARQUEE ================= */}
      <div className="bg-base-200 py-3 rounded-lg">
        <Marquee pauseOnHover speed={50}>
          📚 New Arrivals Available Now! &nbsp;&nbsp;&nbsp;
          🔥 20% Discount on Tech Books! &nbsp;&nbsp;&nbsp;
          ⭐ Top Rated Books Updated Weekly! &nbsp;&nbsp;&nbsp;
          🚀 Learn. Read. Grow! &nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>

      {/* ================= FEATURED BOOKS ================= */}
      <div>

        <h2 className="text-3xl font-bold mb-5">
          Featured Books
        </h2>

        {/* GRID: 3 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {books.map((book) => (
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

                  <Link
                    href={`/books/${book.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Details
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}