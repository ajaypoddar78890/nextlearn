// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";  

const page = () => {
  'use server'
       async function creatPost (formData){

        const title =  formData.get('title');
        const description =  formData.get('description');
        console.log(title, description)


        
       }
     


  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const router = useRouter(); // Initialize useRouter

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const blog = { title, description };

  //   // Send data to the API
  //   await fetch("/api/blog", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(blog),
  //   });

  //   console.log(blog);

  //   alert("Blog created successfully!");

  //   // Redirect the user to the blog list page (or another page)
  //   router.push("/blog");

  //   // Clear the form fields
  //   setTitle("");
  //   setDescription("");
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col container">
      <h1>Create the blog by filling in the required fields</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          required
          name="titile"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2"
          required
          name="description"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
