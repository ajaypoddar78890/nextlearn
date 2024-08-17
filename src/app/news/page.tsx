import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>This is the main news page</h1>

      <ul className="space-y-4 pt-5">
        <li>
          <Link href="/news/firstnews">
            <p className="w-28 h-10 text-center pt-2 bg-white text-black rounded-lg">
              First news
            </p>
          </Link>
        </li>
        <li>
          <Link href="/news/secondnews">
            <p className="w-28 h-10 text-center pt-2 bg-white text-black rounded-lg">
              Second news
            </p>
          </Link>
        </li>
        <li>
          <Link href="/news/thirdnews">
            <p className="w-28 h-10 text-center pt-2 bg-white text-black rounded-lg">
              Third news
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
