import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../utility/localStorage2";
import { Link } from "react-router-dom";

import { GiPositionMarker } from "react-icons/gi";

import { IoMdContacts } from "react-icons/io";

import { MdOutlineContactPage } from "react-icons/md";

const ReadBooks = () => {
  const [ReadData, setReadData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const storedId = getStoredReadBooks();
    if (data.length > 0) {
      const listedData = data.filter((data2) =>
        storedId.includes(data2.bookId)
      );
      setReadData(listedData);
    }
  }, [data]);

  return (
    <div>
      {ReadData.map((data) => (
        <div key={data.bookId}>
          <div className="card md:card-side bg-base-100 md:h-72 shadow-xl">
            <figure>
              <img src={data.image} alt="Movie" className="p-8  w-56 lg:w-64" />
            </figure>
            <div className="card-body">
              <h2 className="card-title md:text-3xl">{data.bookName}</h2>
              <p className="text-gray-700">By: {data.author}</p>
              <div className="md:flex gap-2 mt-3">
                <span className="font-bold">Tag:</span>
                {data.tags.map((tag) => (
                  <div className=" border p-1 rounded-full px-3 bg-green-100 text-green-600">
                    #{tag}
                  </div>
                ))}
                <div className="flex items-center">
                  <GiPositionMarker />
                  <p className="text-gray-700">
                    Year of publishing: {data.yearOfPublishing}
                  </p>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  {" "}
                  <IoMdContacts /> Publisher: {data.publisher}
                </div>
                <div className="flex items-center">
                  <MdOutlineContactPage /> Page: {data.totalPages}
                </div>
              </div>
              <div className="border-t-2 w-full"></div>
              <div className="flex items-center gap-6">
                <div className=" border p-1 rounded-full px-3 bg-blue-100 text-blue-600">
                  Category: {data.category}
                </div>
                <div className=" border p-1 rounded-full px-3 bg-red-100 text-red-600">
                  Rating: {data.rating}
                </div>
                <Link to={`/data/${data.bookId}`}>
                  <button className="btn btn-success text-white">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
