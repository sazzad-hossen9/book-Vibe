const DataFetch = async () => {
  try {
    // const res = await fetch(`${process.env.SERVER_BASE_URL}/booksData.json`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URl}/booksData.json`);
    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  } catch (error) {
    console.log("error fetching book data", error);
    throw new Error("Failed to fetch book data");
  }
  return <div></div>;
};

export default DataFetch;
// import { TBook } from "@/app/type/books.type";

// export const DataFetch = async (): Promise<TBook[]> => {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

//     console.log("BASE URL:", baseUrl);

//     const res = await fetch(`${baseUrl}/booksData.json`);

//     if (!res.ok) {
//       throw new Error(`HTTP Error: ${res.status}`);
//     }

//     return await res.json();
//   } catch (error) {
//     console.log("error fetching book data", error);
//     throw new Error("Failed to fetch book data");
//   }
// };
