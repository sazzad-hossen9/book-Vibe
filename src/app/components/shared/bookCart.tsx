import { TBook } from "@/app/type/books.type";
import Image from "next/image";
import Link from "next/link";
export default function BookCart({ book }: { book: TBook }) {
  return (
    <div>
      <div
        key={book.bookId}
        className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden bg-gray-100">
          <Image
            src={book.image}
            alt={book.bookName}
            width={500}
            height={800}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-emerald-600 shadow backdrop-blur">
            {book.category}
          </span>

          <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
            ⭐ {book.rating}
          </span>
        </div>

        <div className="p-5">
          <h2 className="truncate text-xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            by <span className="font-medium">{book.author}</span>
          </p>

          <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
            <span>📖 {book.totalPages} pages</span>
            <span>{book.yearOfPublishing}</span>
          </div>

          <div className="mt-4 flex gap-2">
            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link href={`/books/${book.bookId}`}>
            <button className="btn btn-success mt-5 w-full rounded-full text-white">
              View Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
