"use client";
import React from "react";
import Image from "next/image";

const ReviewSection = () => {
  // Sample review data
  const reviews = [
    {
         stars: 5,
      title: "Amazing Blog Post!",
      name: "John Doe",
      date: "January 5, 2025",
      profilePic: "/images/Shape.png", // Replace with actual profile image paths
      commentText:
        "This blog post was insightful and very well-written. I learned so much from it!",
    },
    {
         stars: 5,
      title: "Great Insights",
      name: "Jane Smith",
      date: "January 3, 2025",
      profilePic: "/images/Shape.png",
      commentText:
        "I loved the depth of analysis in this blog post. Keep up the great work!",
    },
    {
         stars: 5,
      title: "Inspiring Read",
      name: "Alice Johnson",
      date: "December 29, 2024",
      profilePic: "/images/Shape.png",
      commentText:
        "This post was exactly what I needed. It really resonated with me. Thanks for sharing!",
    },
  ];
  
  const renderStars = (stars) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < stars ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-full md:max-w-[1800px] mx-auto mt-16">
      <h1 className="text-2xl font-bold  mb-6">Latest Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div key={index} className="w-full md:w-[580px] h-auto border-[1px] border-[#D9D9D9] p-6">
           
            <div className=" mb-4">
              <div className="flex">{renderStars(review.stars)}</div>
              <h4 className="text-lg font-semibold">{review.title}</h4>
              <p className="text-sm text-gray-700">{review.commentText}</p>
            </div>

            
            <div className="flex items-center mb-4 ">
              <Image
                src={review.profilePic || "/default-profile.png"} 
                alt={`${review.name}'s profile`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="ml-4">
                <h5 className="text-sm font-medium">{review.name}</h5>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>

           
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
