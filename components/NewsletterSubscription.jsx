"use client";
import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className=" mt-10 py-12 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4">Follow the latest trends</h2>
        <p className="text-gray-600 mb-8"> With our daily newslette
        </p>
        
        {/* Subscription Form */}
        <div className="flex  sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="max-w-[249px] sm:w-auto flex-1 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button
            type="button"
            className="px-6 py-3 bg-black text-white font-semibold rounded-md shadow hover:bg-black/20 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
