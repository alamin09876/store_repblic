import Image from "next/image";
import image from "../../../../public/assest/blogImage/image.png";
import imageTwo from "../../../../public/assest/blogImage/placeholder (1).png";
import imageOne from "../../../../public/assest/blogImage/placeholder.png";

const blogPosts = [
  {
    id: 1,
    title:
      "Beyond the Stage: How Conferences Inspire Innovation & Collaboration",
    category: "Event Trends",
    date: "12 Feb 2025",
    image: image,
  },
  {
    id: 2,
    title:
      "Beyond the Stage: How Conferences Inspire Innovation & Collaboration",
    category: "EventTrends",
    date: "03 Feb 2025",
    image: imageOne,
  },
  {
    id: 3,
    title: "The Ultimate Guide to Engaging & Immersive Event Experiences",
    category: "TechSummit",
    date: "03 Feb 2025",
    image: imageTwo,
  },
];

export default function RecentBlog() {
  return (
    <section className="bg-black text-white px-4 py-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6 px-10">RECENT BLOG</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="space-y-3">
            <div className="aspect-[4/4] relative overflow-hidden rounded-md ">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className=" hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-sm font-semibold leading-snug hover:underline cursor-pointer">
              {post.title}
            </h3>
            <div className="text-xs text-gray-400 flex justify-between items-center">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                {post.category}
              </span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
