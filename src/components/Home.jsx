import { Link, useLoaderData } from "react-router-dom";
import LoadedData from "./LoadedData";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-[#f2f2f2] md:px-16 rounded-xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="pngwing-1.png"
              className=" max-w-xs md:max-w-sm rounded-lg "
            />
            <div>
              <h1 className="text-5xl font-bold">
                Books to freshen up your bookshelf
              </h1>
              <Link to="listedBooks">
                <button className="btn btn-success text-white mt-16">
                  View The List
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h1 className=" text-center text-4xl">Books</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {data.map((data2) => (
              <LoadedData key={data2.bookId} data2={data2}></LoadedData>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
