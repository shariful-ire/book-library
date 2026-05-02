import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">

      {/* Banner Section */}
      <div className="hero min-h-[80vh] bg-base-200 rounded-xl">
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

    </div>
  );
}