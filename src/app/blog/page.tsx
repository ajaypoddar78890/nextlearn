"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blog");
      const data = await response.json();
      setBlogs(data);
      console.log(data);
    };

    fetchBlogs();
  }, []);
  return (
    <div className="mx-auto container px-10 py-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Blogs</h1>
        <Link
          href="/blog/createblog"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Create Blog
        </Link>
      </div>

      {/* Blogs Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Here are the blogs available in the local DB:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
