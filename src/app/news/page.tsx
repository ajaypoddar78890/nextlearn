import Link from "next/link";
import React from "react";
("use clint");

import dummydata from "@/dummyData.json";

const Page = () => {
  return (
    <div>
      <h1>This is the main news page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {dummydata.map((news) => (
          <Link href={`/news/${news.id}`} key={news.id}>
            <div className="border rounded-lg p-4 shadow-lg cursor-pointer">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
              <p>{news.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
