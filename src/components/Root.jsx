import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import { getStoredReadBooks } from "../utility/localStorage2";
import toast, { Toaster } from "react-hot-toast";

const Root = () => {
  const [dataList, setDataList] = useState([]);
  const localStorageDataRead = getStoredReadBooks();

  const addToDataList = (data) => {
    const isExist = dataList.find(
      (data2) => data2 == localStorageDataRead.includes(data)
    );

    if (!isExist) {
      setDataList([...dataList, data]);
    } else toast.error("already added");
  };
  console.log(dataList);
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <Navbar></Navbar>
      <Outlet context={addToDataList}></Outlet>
    </div>
  );
};

export default Root;
