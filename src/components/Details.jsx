import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import { listedBooks } from "../utility/localStorage";
import { ReadBooks } from "../utility/localStorage2";
import { Toaster } from "react-hot-toast";

const Details = () => {
  const addToDataList = useOutletContext();

  const data = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const data2 = data.find((data) => data.bookId == id);

  return (
    <div className="flex justify-around md:flex-row flex-col gap-11 mt-10">
      <Toaster></Toaster>
      <div>
        <img
          src={data2.image}
          className=" w-full  md:min-w-80 rounded-xl"
        ></img>
      </div>
      <div>
        <h1 className="md:text-3xl text-2xl">{data2.bookName}</h1>
        <p className="text-gray-700 mt-3">By: {data2.author}</p>
        <div className=" border-t-2 border-b-2 p-1 mt-3 ">{data2.category}</div>
        <p className="mt-3">
          <span className="font-bold ">Review: </span> {data2.review}
        </p>

        <div className="flex gap-2 mt-3">
          <span className="font-bold">Tag:</span>
          {data2.tags.map((tag) => (
            <div className=" border p-1 rounded-full px-3 bg-green-100 text-green-600">
              #{tag}
            </div>
          ))}
        </div>
        <div className="border-t-2 mt-4 pt-6 ">
          <div className="flex gap-16 ">
            <span className="text-gray-700:">Number of Pages:</span>{" "}
            <span className="font-bold">{data2.totalPages}</span>
          </div>
          <div className="flex gap-16 ">
            <span className="text-gray-700:">Publisher:</span>{" "}
            <span className="font-bold">{data2.publisher}</span>
          </div>
          <div className="flex gap-16">
            <span className="text-gray-700:">Year of Publishing:</span>{" "}
            <span className="font-bold">{data2.yearOfPublishing}</span>
          </div>
          <div className="flex gap-40 ">
            <span className="text-gray-700:">Rating:</span>{" "}
            <span className="font-bold">{data2.rating}</span>
          </div>
        </div>
        <div className="flex gap-6 mt-7">
          <button onClick={() => ReadBooks(idInt)} className="btn">
            Read
          </button>
          <button
            onClick={() => listedBooks(idInt)}
            className="btn btn-info text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
