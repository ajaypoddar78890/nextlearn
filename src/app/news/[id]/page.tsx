import React from "react";
import dummydata from "@/dummyData.json";

const Page = ({ params }) => {
  // Ensure params.id is a string and matches the id format in your JSON data
  const newsId = params.id;
  console.log("params.id:", newsId); // Debugging
  console.log("dummydata:", dummydata); // Debugging

  // Find the news item based on the id
  const newsItem = dummydata.find((newsItem) => newsItem.id === newsId);

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
    <header>
      <div className="border rounded-lg p-4 shadow-lg cursor-pointer w-[300px]">
        <img src={newsItem.image} className="w-full h-48 object-cover mb-4 " />
        <h2 className="text-xl font-bold mb-2 black">{newsItem.title}</h2>
        <p className="text-md  ">{newsItem.description}</p>
      </div>
    </header>
  );
};

export default Page;
