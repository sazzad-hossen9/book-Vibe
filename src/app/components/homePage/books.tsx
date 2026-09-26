import { TBook } from "@/app/type/books.type";
import BookCart from "../shared/bookCart";

const getData = async (): Promise<TBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

export default async function Books() {
  const books = await getData();

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center my-5">
        <h2 className="font-bold text-4xl ">aur collection</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book: TBook) => (
          <BookCart key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
}
