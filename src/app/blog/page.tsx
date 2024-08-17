import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>this is the blog page </h1>
      <Link href="/blog/blog-1" className="bg-blue-400 p-5">
        blog1
      </Link>
      <Link href="/blog/blog-2" className="bg-yellow-400 p-5">
        blog 2
      </Link>
    </div>
  );
};

export default page;
