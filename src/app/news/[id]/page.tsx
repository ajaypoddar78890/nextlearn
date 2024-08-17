import React from "react";

const Page = ({ params }) => {
  const newsid = params.id;
  return (
    <div>
      <h1>This is news content page</h1>
      <p>NEWS: id = {newsid}</p>
    </div>
  );
};

export default Page;
