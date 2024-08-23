// "use client";

import { error } from "console";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link"; // Ensure Link is imported if you want to use it for routing

// const Page = () => {
//   const [newsItems, setNewsItems] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch news items when the component mounts
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/news"); // Adjust the URL based on your setup
//         setNewsItems(response.data);
//       } catch (error) {
//         setError("Error fetching news items");
//       }
//     };

//     fetchNews();
//   }, []);

//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>This is the main news page</h1>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {newsItems.map((news) => (
//           <Link href={`/news/${news._id}`} key={news._id} passHref>
//             <div className="border rounded-lg p-4 shadow-lg cursor-pointer">
//               {/* Z */}
//               <h2 className="text-xl font-bold mb-2">{news.title}</h2>
//               <p>{news.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;
import Link from "next/link";

// Define the structure of a news item
interface NewsItem {
  _id: string;
  title: string;
  description: string;
  image?: string; // If you have an image property, it's optional
}

export default async function Page() {
  try {
    const response = await fetch("http://localhost:8080/api/news");
    console.log(response);

    // Check if the response is not OK, then throw an error
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    // Parse the JSON data from the response and assert the type
    const news: NewsItem[] = await response.json();

    return (
      <div>
        <h1>This is the main news page</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {news.map((newsItem: NewsItem) => (
            <Link href={`/news/${newsItem._id}`} key={newsItem._id} passHref>
              <div className="border rounded-lg p-4 shadow-lg cursor-pointer">
                <h2 className="text-xl font-bold mb-2">{newsItem.title}</h2>
                <p>{newsItem.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div>
        <h1>Error fetching news</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
