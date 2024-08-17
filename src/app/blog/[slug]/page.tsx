import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>blog post </h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default page;
