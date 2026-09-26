"use client";

import { TBook } from "@/app/type/books.type";
import { Children, createContext, SetStateAction, useState } from "react";

interface IBookContext {
  readBook: TBook[];
  setRedBook: React.Dispatch<SetStateAction<TBook[]>>;
  wishlist: TBook[];
  setWishlist: React.Dispatch<SetStateAction<TBook[]>>;
}
import React from "react";
export const BooksContext = createContext<IBookContext >({
   readBook:[],
    setRedBook:()=>{},
    wishlist:[],
    setWishlist:()=>{}
});
export default function BooksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [readBook, setRedBook] = useState<TBook[]>([]);
  const [wishlist, setWishlist] = useState<TBook[]>([]);
  const allContextValue = {
    readBook,
    setRedBook,
    wishlist,
    setWishlist,
  };
  return (
    <div>
      <BooksContext.Provider value={allContextValue}>
        {children}
      </BooksContext.Provider>
    </div>
  );
}
