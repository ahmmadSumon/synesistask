import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useNotification } from "../app/context/NotificationContext";
const truncateText = (text, maxWords) => {
  if (!text) return ""; 
  return text.split(" ").slice(0, maxWords).join(" ") + (text.split(" ").length > maxWords ? "..." : "");
};

const BlogCard = ({ blog }) => {
  const { incrementNotification } = useNotification();

  const handleReadMoreClick = () => {
    incrementNotification(blog.title || "Untitled"); 
  };
  const randomNumber = Math.floor(Math.random() * 50) + 1;

  return (
    <div className="w-full px-2 md:px-0 md:w-[834px] h-full md:h-[747px] rounded-[10px] bg-white overflow-hidden">
      
      <div className="w-full h-[443px] relative">
        <Image 
          src={blog.image || "/path/to/default-image.jpg"}
          alt="Blog Thumbnail"
          className="w-full h-full object-cover"
          height={1000}
          width={1000}
        />
        <div className="absolute top-2 right-3 flex gap-4 px-3 py-2 bg-[#FFFFFF] rounded-[10px]">
          <Image src="/images/eye.png" height={10} width={20} alt="view"/>  
          <span className="text-black font-bold">{randomNumber}</span>
        </div>
      </div>

    
      <div className="px-[37px] py-[27px]">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-[#000000] text-[24px] mb-[29px]">
              {blog.publishedAt || "Unknown Date"} 
            </h5>
          </div>
          <div>
            <h5 className="text-[#000000] text-[24px] mb-[29px]">
              {blog.category || "Uncategorized"}
            </h5>
          </div>
        </div>
       
        <h2 className="text-[36px] font-semibold leading-tight text-[#000000] mb-4">
          {truncateText(blog.title || "Untitled", 5)} 
        </h2>
       
        <p className="text-[#000000] text-[24px] mt-[10px] leading-tight">
          {truncateText(blog.content || "No content available", 22)} 
          <Link href={`/blog/${blog.id}`} passHref>
            <button    onClick={handleReadMoreClick} className="px-4 py-2 text-blue-600 rounded transition">
              Read More
            </button>
          </Link>
        </p>
        
      </div>
    </div>
  );
};

export default BlogCard;
