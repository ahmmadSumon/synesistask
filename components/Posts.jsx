"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // Track the current page for pagination
  const [hasMore, setHasMore] = useState(true); // To know if there are more blogs to load

  // Function to fetch blogs with pagination
  const fetchBlogs = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.org/posts?_page=${page}&_limit=10`);
      const data = await response.json();
      if (data.length > 0) {
        setBlogs((prevBlogs) => [...prevBlogs, ...data]); // Append new blogs to the list
        setFilteredBlogs((prevBlogs) => [...prevBlogs, ...data]); // Same for filtered blogs
      } else {
        setHasMore(false); // No more blogs to load
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  // Call fetchBlogs on page load and when the page number changes
  useEffect(() => {
    fetchBlogs();
  }, [page]);

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    const filtered = blogs.filter((blog) => {
      const title = blog.title || ""; // Fallback to empty string if undefined
      const body = blog.body || "";   // Fallback to empty string if undefined

      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredBlogs(filtered); // Update filtered blogs
  };

  // Handle scroll event to load more blogs when the user scrolls to the bottom
  const handleScroll = () => {
    // Check if the user has scrolled to the bottom of the page
    const bottom = document.documentElement.scrollHeight === document.documentElement.scrollTop + window.innerHeight;
    if (bottom && hasMore && !loading) {
      setPage((prevPage) => prevPage + 1); // Increment the page number to load more
      setLoading(true); // Set loading to true while fetching new posts
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, [hasMore, loading]);

  return (
    <div className="max-w-full md:max-w-[1884px] sm:px-16 mx-auto mt-44 md:mt-36">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-[28px] md:text-[64px] font-bold text-center sm:text-left">
            Placeholder Posts
          </h2>
        </div>
        <div className="w-full sm:w-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Blog List */}
      <div className="blog-list grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 mt-8 md:mt-20">
        {loading && page === 1 ? (
          <div className="text-center col-span-full">Loading...</div>
        ) : (
          filteredBlogs.map((blog, index) => (
            <BlogCard
              key={`${blog.id}-${index}`} // Unique key combining id and index
              blog={blog}
            />
          ))
        )}
      </div>

      {/* Loader when fetching new posts */}
      {loading && page > 1 && (
        <div className="text-center col-span-full mt-4">Loading more...</div>
      )}
    </div>
  );
};

export default Posts;
