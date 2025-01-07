import NewsletterSubscription from "@/components/NewsletterSubscription";
import ReviewSection from "@/components/Review";
import Image from "next/image";
import { notFound } from "next/navigation";

const truncateText = (text, maxWords) => {
    if (!text) return ""; 
    return text.split(" ").slice(0, maxWords).join(" ") + (text.split(" ").length > maxWords ? "" : "");
  };

  export default async function BlogDetailPage({ params }) {
    const { id } = params;
  
    try {
     
      const response = await fetch(`https://jsonplaceholder.org/posts/${id}`, {
        next: { revalidate: 60 }, 
      });
  
    
  
      if (!response.ok) {
        throw new Error('Failed to fetch the blog post');
      }
  
      const blog = await response.json();
  
      console.log('Parsed Blog Data:', blog);
  
      return (
        <>
          <div className="flex flex-col md:flex-row justify-around w-full  md:max-w-[1800px] md:ml-[69px]  md:mr-[45px] md:mt-36 mx-auto">
            <div className="h-[400px] md:h-[720px] max-w-full md:max-w-[1038px] rounded-[10px] overflow-hidden">
              <Image
                alt="Blog Thumbnail"
                className="w-full h-full object-cover"
                height={720}
                width={1038}
                src={blog.image}
              />
            </div>
            <div className="max-w-full md:w-[720px] px-2 md:px-[70px] mx-2">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-[36px] font-bold mb-6">
                  {truncateText(blog.title || "", 3)}
                </h1>
                <p className="bg-[#C9C5C580] w-[137px] h-[46px] flex justify-center items-center mb-2  rounded-[10px] text-[24px] px-[11px] py-[10px] ">
                  {blog.category}
                </p>
              </div>
              <p className="text-[#000000] text-[24px] mb-4">{blog.publishedAt}</p>
              <p className="text-[#000000] text-[24px] mb-4">{blog.content}</p>
            </div>
          </div>
          <div>
            <ReviewSection />
            <NewsletterSubscription />
          </div>
        </>
      );
    } catch (error) {
      console.error('Error fetching the blog data:', error);
      return notFound(); 
    }
  }