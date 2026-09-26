import ReadButton from "@/app/components/bookDetails/readbtn";
import ReadBtn from "@/app/components/bookDetails/readbtn";
import WishlistButton from "@/app/components/bookDetails/wishlistbtn";
import { TBook } from "@/app/type/books.type";
import Image from "next/image";

const getData = async (): Promise<TBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

export default async function BookIdPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const book = await getData();
  const { bookId } = await params;
  const books = book.find((book) => book.bookId === Number(bookId));

  if (!books) {
    return (
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
            <h1 className="text-3xl font-bold text-gray-900">Book not found</h1>
            <p className="mt-2 text-gray-600">
              The requested book could not be found.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div>
      {" "}
      <main className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="grid items-center gap-10 p-6 md:grid-cols-2 md:p-10 lg:p-14">
              {/* Book Image */}
              <div className="flex justify-center">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                  <Image
                    src={books?.image ?? "/placeholder.png"}
                    alt={books?.bookName ?? "Book cover"}
                    width={320}
                    height={450}
                    className="h-[450px] w-[320px] object-cover transition duration-500 hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow">
                    {books?.category}
                  </span>
                </div>
              </div>

              {/* Book Information */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-600">
                    ⭐ {books?.rating}
                  </span>

                  <span className="text-sm text-gray-400">
                    {books?.totalPages} Pages
                  </span>
                </div>

                <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                  {books?.bookName}
                </h1>

                <p className="mt-3 text-lg text-gray-500">
                  by{" "}
                  <span className="font-semibold text-gray-800">
                    {books?.author}
                  </span>
                </p>

                {/* Review */}
                <p className="mt-6 leading-7 text-gray-600">{books?.review}</p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {books?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Book Info */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-y border-gray-100 py-6 sm:grid-cols-3">
                  <div>
                    <p className="text-sm text-gray-400">Publisher</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {books?.publisher}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Published</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {books?.yearOfPublishing}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Pages</p>
                    <p className="mt-1 font-semibold text-gray-800">
                      {books?.totalPages}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <ReadButton books={books} />

                  <WishlistButton books={books} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
