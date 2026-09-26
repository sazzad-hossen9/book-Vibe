"use client";
import { TBook } from "@/app/type/books.type";
import { BooksContext } from "@/context/booksContext";
import { use, useContext } from "react";
import { toast } from "react-toastify";

export default function WishlistButton({ books }: { books: TBook }) {
  const { wishlist, setWishlist } = useContext(BooksContext);

  const handleWishlistBtn = () => {
    setWishlist([...wishlist, books]);
    // console.log("helo", wishlist);
    toast.success(`you hab wishlist ${books.bookName}`);
  };

  return (
    <div>
      <button
        onClick={() => handleWishlistBtn()}
        className="btn btn-outline rounded-full px-7"
      >
        Add to Wishlist ♡
      </button>
    </div>
  );
}
