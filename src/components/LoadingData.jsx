import { useEffect, useState } from "react";
import LoadedData from "./LoadedData";

const LoadingData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="mt-10">
        <h1 className=" text-center text-4xl">Books</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {data.map((data2) => (
            <LoadedData key={data2.bookId} data2={data2}></LoadedData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingData;
