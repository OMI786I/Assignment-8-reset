import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

const Root = () => {
  const [recipeList, setRecipeList] = useState([]);

  const addToRecipeList = (recipe) => {
    const newRecipeList = [...recipeList, recipe];
    setRecipeList(newRecipeList);
  };
  console.log(recipeList);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet context={addToRecipeList}></Outlet>
    </div>
  );
};

export default Root;
