"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; // Ensure Link is imported if you want to use it for routing

const Page = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);

  // Fetch news items when the component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/news"); // Adjust the URL based on your setup
        setNewsItems(response.data);
      } catch (error) {
        setError("Error fetching news items");
      }
    };

    fetchNews();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>This is the main news page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {newsItems.map((news) => (
          <Link href={`/news/${news._id}`} key={news._id} passHref>
            <div className="border rounded-lg p-4 shadow-lg cursor-pointer">
              {/* <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover mb-4"
              /> */}
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
