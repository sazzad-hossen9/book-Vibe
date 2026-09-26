"use client";
import { TBook } from "@/app/type/books.type";
import { BooksContext } from "@/context/booksContext";
import { use, useContext } from "react";
import { toast } from "react-toastify";

export default function ReadButton({ books }: { books: TBook }) {
  const { readBook, setRedBook } = useContext(BooksContext);

  const handleReadBtn = () => {
    setRedBook([...readBook, books]);
    // console.log("helo",readBook)
     toast.success(`you hab read ${books.bookName}`);
  };
   
  return (
    <div>
      <button
        onClick={() => handleReadBtn()}
        className="btn btn-success rounded-full px-7 text-white"
      >
        Read Book
      </button>
    </div>
  );
}
