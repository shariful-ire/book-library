import booksData from "@/data/books.json";

export default function BookDetails({ params }) {
  const { id } = params;

  // Find book by id
  const book = booksData.find((b) => b.id === parseInt(id));

  // If not found
  if (!book) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Book Not Found 😢</h1>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ================= IMAGE ================= */}
        <div>
          <img
            src={book.image_url}
            alt={book.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* ================= DETAILS ================= */}
        <div className="space-y-4">

          <h1 className="text-4xl font-bold">
            {book.title}
          </h1>

          <p className="text-lg text-gray-600">
            Author: {book.author}
          </p>

          <p className="text-sm text-gray-500">
            Category: {book.category}
          </p>

          <p className="text-base leading-relaxed">
            {book.description}
          </p>

          <p className="font-semibold">
            Available Quantity: {book.available_quantity}
          </p>

          {/* Borrow Button (UI only for now) */}
          <button className="btn btn-primary mt-4">
            Borrow Book
          </button>

        </div>

      </div>

    </div>
  );
}