import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";

const Award = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/awarded.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.map((data) => (
        <div key={data.bookId}>
          <h1 className="text-2xl text-center font-bold my-12">
            {" "}
            The awarded Book of the month{" "}
          </h1>

          <div className="card max-w-80 bg-base-100 shadow-xl cursor-pointer mx-auto">
            <figure className="px-10 pt-10">
              <img
                src={data.image}
                alt="Shoes"
                className="rounded-xl max-w-80 max-h-80"
              />
            </figure>
            <div className="card-body items-center text-center">
              <div className="flex gap-2">
                {data.tags.map((tag) => (
                  <div className=" border p-1 rounded-full px-3 bg-green-100 text-green-600">
                    {tag}
                  </div>
                ))}
              </div>

              <h2 className="card-title w-full">{data.bookName}</h2>
              <p className="text-gray-700 w-full text-left">
                By: {data.author}
              </p>
              <hr></hr>
              <div className="flex text-gray-700 justify-between w-full border-t-2 border-dotted py-2">
                <div>{data.category}</div>
                <div className="flex items-center gap-1">
                  {data.rating} <FaRegStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Award;
