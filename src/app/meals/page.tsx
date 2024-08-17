import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div>
      <h1>hey this is the meals page right here</h1>
      <p className="w-24 h-25 rounded-xl bg-red-700 p-5">
        {" "}
        <Link href="/meals/newmeal">new meals</Link>
      </p>
    </div>
  );
};

export default page;
