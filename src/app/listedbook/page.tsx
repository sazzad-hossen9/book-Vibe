"use client";
import { BooksContext } from "@/context/booksContext";
import React, { useContext, useState } from "react";
import { TBook } from "../type/books.type";
import ListedCart from "../components/shared/listaidCart";

export default function ListedBooks() {
  const { readBook, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");
  console.log(sortBy, "sort by ");
  const sortBooks = (books: TBook[]) => {
    const sortedBooks = [...books];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortReadBooks = sortBooks(readBook);
  const sortWishList = sortBooks(wishlist);
  return (
    <div className=" container mx-auto">
      <div className="container mx-auto py-15">
        <h2 className="bg-amber-100 font bold py-5 my-7 text-center text-4xl rounded-3xl">
          listed books
        </h2>
      </div>
      <div className=" text-center ">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Pick a Framework"
          className="select  mx-auto select-info"
        >
          <option disabled={true}>sort by</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Number of pages</option>
          <option value={"year"}>Publish your</option>
        </select>
      </div>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`Read book ( ${readBook.length} )`}
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className="">
              {sortReadBooks.length > 0 ? (
                sortReadBooks.map((book: TBook) => (
                  // <BookCart key={book.bookId} book={book} />
                  <ListedCart key={book.bookId} book={book} />
                ))
              ) : (
                <div className="text-lg font-bold text-center"> not found</div>
              )}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label={`Wishlist book ( ${wishlist.length} )`}
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 ">
            <div className="">
              {sortWishList.length > 0 ? (
                sortWishList.map((book: TBook) => (
                  <ListedCart key={book.bookId} book={book} />
                ))
              ) : (
                <div className="text-lg font-bold text-center"> not found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
