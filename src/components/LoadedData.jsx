import { FaRegStar } from "react-icons/fa";

const LoadedData = ({ data2 }) => {
  const { bookName, author, category, rating, tags, image } = data2;
  return (
    <div>
      <div className="card max-w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl max-w-80 max-h-80"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <div className=" border p-1 rounded-full px-3 bg-green-100 text-green-600">
                {tag}
              </div>
            ))}
          </div>

          <h2 className="card-title w-full">{bookName}</h2>
          <p className="text-gray-700 w-full text-left">By: {author}</p>
          <hr></hr>
          <div className="flex text-gray-700 justify-between w-full border-t-2 border-dotted py-2">
            <div>{category}</div>
            <div className="flex items-center gap-1">
              {rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadedData;
