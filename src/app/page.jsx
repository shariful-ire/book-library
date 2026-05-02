import Link from "next/link";
import Marquee from "react-fast-marquee";
import books from "@/data/books.json";

export default function Home() {
  return (
    <div className="space-y-10">

      {/* Banner */}
      <div className="hero min-h-[70vh] bg-base-200 rounded-xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Find Your Next Read 📚
            </h1>
            <p className="py-6">
              Explore thousands of books from different categories.
            </p>
            <Link href="/books" className="btn btn-primary">
              Browse Now
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-base-200 py-3 rounded-lg">
        <Marquee pauseOnHover speed={50}>
          📚 New Arrivals Available Now! &nbsp;&nbsp;&nbsp;
          🔥 20% Discount on Tech Books! &nbsp;&nbsp;&nbsp;
          ⭐ Top Rated Books Weekly! &nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>

      {/* Featured Books */}
      <div>
        <h2 className="text-3xl font-bold mb-5">
          Featured Books
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {books.slice(0, 4).map((book) => (
            <div key={book.id} className="card bg-base-100 shadow-xl">

              <figure>
                <img
                  src={book.image_url}
                  alt={book.title}
                  className="h-40 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-lg">
                  {book.title}
                </h2>

                <p className="text-sm text-gray-500">
                  {book.author}
                </p>

                <div className="card-actions justify-end">
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