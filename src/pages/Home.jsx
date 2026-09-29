import React from "react";
import { useLoaderData } from "react-router";
import User from "./User";
import FlowerCard from "../Components/FlowerCard";

const Home = () => {
  const data = useLoaderData();
  console.log("🚀 ~ Home ~ data:", data);
  // console.log(data);
//   const 
  return (
    <div>
      <div>
        <h1>Hello World</h1>
        <p>Practice project of Assignment Eight wave 2</p>
      </div>
      {data.map(flower => {
        //   console.log("🚀 ~ Home ~ flower.id:", flower.id)
          return <FlowerCard key={flower.id} flower={flower}></FlowerCard>;
      })}
    </div>
  );
};

export default Home;
