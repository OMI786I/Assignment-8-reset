import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredListedBooks } from "../utility/localStorage";

const ListedBooks = () => {
  const data = useLoaderData();

  useEffect(() => {
    const storedId = getStoredListedBooks();
    if (data.length > 0) {
      const listedData = data.filter((data2) =>
        storedId.includes(data2.bookId)
      );
      console.log(listedData);
    }
  }, []);

  return <div>This is listed books section</div>;
};

export default ListedBooks;
