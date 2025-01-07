"use client";
import React from "react";
import { useNotification } from "../context/NotificationContext";
import Link from "next/link"; 

const ReadPost = () => {
  const { clickedPosts, removePost } = useNotification(); 

  return (
    <div className="p-8 mt-52">
      <h1 className="text-2xl font-bold mb-4">Clicked Posts</h1>
      {clickedPosts.length > 0 ? (
        <ul className="space-y-4">
          {clickedPosts.map((post, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 border rounded-md shadow-sm"
            >
              <Link href={`/blog/${post.id}`} passHref>
               
                <span className="cursor-pointer">{post}</span> 
              </Link>
              <button
                className="px-3 py-1 bg-black text-white rounded text-sm"
                onClick={() => removePost(post)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No posts clicked yet.</p>
      )}
    </div>
  );
};

export default ReadPost;
