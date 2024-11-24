import React, { useState } from "react";
import Header from "./header/Header";
import ExploreMenu from "./explore menu/ExploreMenu";
import FoodDisplay from "./FoodDisplay/FoodDisplay";
import AppDownload from "./AppDownload";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div className="">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
