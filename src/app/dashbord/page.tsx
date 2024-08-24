"use client";

import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  console.log("dashbord from server");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <h1>name: {name}</h1>
    </div>
  );
};

export default page;
