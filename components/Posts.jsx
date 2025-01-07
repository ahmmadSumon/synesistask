"use client";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 
  const [hasMore, setHasMore] = useState(true);load

 
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

  
  useEffect(() => {
    fetchBlogs();
  }, [page]);


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

     
      <InfiniteScroll
        dataLength={filteredBlogs.length} 
        next={() => setPage((prevPage) => prevPage + 1)}scrolls down
        hasMore={hasMore}
        loader={<div className="text-center col-span-full">Loading...</div>}
        endMessage={<div className="text-center col-span-full">No more blogs to load.</div>}
      >
        <div className="blog-list grid grid-cols-1 gap-6 2xl:grid-cols-2 md:gap-12 mt-8 md:mt-20">
          {filteredBlogs.map((blog, index) => (
            <BlogCard
              key={`${blog.id}-${index}`} 
              blog={blog}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
