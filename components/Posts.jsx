"use client";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";
import Link from "next/link";

const Posts = () => {
  const [blogs, setBlogs] = useState([]); // All blogs fetched
  const [filteredBlogs, setFilteredBlogs] = useState([]); // Blogs after filtering
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Track search term
  const [initialFetch, setInitialFetch] = useState(false); // Prevent re-fetching when going back

  // Function to fetch blogs with pagination
  const fetchBlogs = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.org/posts?_page=${page}&_limit=10`);
      const data = await response.json();
      if (data.length > 0) {
        setBlogs((prevBlogs) => [...prevBlogs, ...data]);
        setFilteredBlogs((prevBlogs) => [...prevBlogs, ...data]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  // Fetch blogs on page load and when page number changes
  useEffect(() => {
    if (!initialFetch) {
      fetchBlogs();
      setInitialFetch(true); // Prevent further re-fetching on subsequent renders
    }
  }, [page]);

  // Handle search functionality
  const handleSearch = (searchTerm) => {
   
    const filtered = blogs.filter((blog) => {
      const title = blog.title || ""; 
      const content = blog.content || "";   
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredBlogs(filtered); 
    setSearchTerm(searchTerm); 
  };

  // Handle the "Go back" link
  const handleGoBack = () => {
    setSearchTerm(""); // Reset search term
    setFilteredBlogs(blogs); // Reset filtered blogs to show all
  };

  return (
    <div className="max-w-full md:max-w-[1884px] sm:px-16 mx-auto mt-44 md:mt-36">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-[28px] md:text-[64px] font-bold text-center sm:text-left">
            Placeholder Posts
          </h2>
        </div>
        <div className="w-full sm:w-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {/* Infinite Scroll component */}
      <InfiniteScroll
        dataLength={filteredBlogs.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<div className="text-center col-span-full">Loading...</div>}
        endMessage={<div className="text-center col-span-full">No more blogs to load.</div>}
      >
        <div className="blog-list grid grid-cols-1 gap-6 2xl:grid-cols-2 md:gap-12 mt-8 md:mt-20">
          {filteredBlogs.length === 0 && !loading ? (
            <>
              <div className="text-center text-2xl">No search results found.</div>
              <Link href="/">
                <div onClick={handleGoBack} className="text-center cursor-pointer text-blue-500 text-2xl">
                  Go back
                </div>
              </Link>
            </>
          ) : (
            filteredBlogs.map((blog, index) => (
              <BlogCard key={`${blog.id}-${index}`} blog={blog} />
            ))
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
