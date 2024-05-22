import { useEffect, useState } from "react";

import { getStoredListedBooks } from "../utility/localStorage";

const ListedBooks = () => {
  const [listData, setListData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  useEffect(() => {
    const storedId = getStoredListedBooks();
    if (data.length > 0) {
      const listedData = data.filter((data2) =>
        storedId.includes(data2.bookId)
      );
      setListData(listedData);
    }
  });

  return (
    <div>
      {listData.map((data) => (
        <div key={data.bookId}>{data.bookName}</div>
      ))}
    </div>
  );
};

export default ListedBooks;
