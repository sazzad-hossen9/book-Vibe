const DataFetch = async () => {
  try {
    // const res = await fetch(`${process.env.SERVER_BASE_URL}/booksData.json`);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  } catch (error) {
    console.log("error fetching book data", error);
    return [];
  }
  return <div></div>;
};

export default DataFetch;
