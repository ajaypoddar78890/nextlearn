"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/user");
        setUsers(response.data);
        console.log(response.data); // Log the data received
      } catch (error) {
        console.error(`Error getting user: ${error}`);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.length === 0 ? (
        <p>No users found</p> // Handle case where there are no users
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <p className="text-gray-700">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-gray-700">
              <strong>Company:</strong> {user.company}
            </p>
            <p className="text-gray-700">
              <strong>Post:</strong> {user.post}
            </p>
            <p className="text-gray-700">
              <strong>Country:</strong> {user.country}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
