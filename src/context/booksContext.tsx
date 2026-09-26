"use client";

import { Children, createContext, useState } from "react";

// import { createContext } from "vm";
import React from "react";
export const BooksContext = createContext({});
export default function BooksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [readBook, setRedBook] = useState([]);
  const [wishlist, setWishlist] = useState([]);
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
