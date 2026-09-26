import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TBook } from "@/app/type/books.type";

export default function ListedCart({ book }: { book: TBook }) {
  return (
    <div
      key={book.bookId}
      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row"
    >
      {/* Image */}
      <div className="relative h-80 w-full shrink-0 overflow-hidden bg-gray-100 md:h-[320px] md:w-64">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={800}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-emerald-600 shadow backdrop-blur">
          {book.category}
        </span>

        {/* Rating */}
        <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{book.bookName}</h2>

          <p className="mt-1 text-sm text-gray-500">
            by{" "}
            <span className="font-semibold text-gray-700">{book.author}</span>
          </p>

          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-500">
            {book.review}
          </p>

          {/* Info */}
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>📖 {book.totalPages} pages</span>
            <span>📅 {book.yearOfPublishing}</span>
            <span>🏢 {book.publisher}</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="btn btn-success mt-6 w-full rounded-full text-white md:w-fit md:px-8"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
