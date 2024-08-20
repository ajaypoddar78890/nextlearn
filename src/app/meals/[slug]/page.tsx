import React from "react";
import dummmydata from "@/dummyData.json";

const page = ({ params }) => {
  const newId = params.id;
  const newsItem = dummmydata.find((newsItem) => newsItem.id === newId);
  return (
    <header>
      <img src={newsItem?.image} alt="" />
      <h1>{newsItem?.title}</h1>
      <p>{newsItem?.description}</p>
    </header>
  );
};

export default page;
