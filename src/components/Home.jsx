import { Link } from "react-router-dom";
import LoadingData from "./LoadingData";

const Home = () => {
  return (
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
            <Link to="DataShow">
              <button className="btn btn-success text-white mt-16">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <LoadingData></LoadingData>
      </div>
    </div>
  );
};

export default Home;
