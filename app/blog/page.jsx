import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How AI is Revolutionizing Speech Therapy",
    description:
      "Discover how SpeakEasy AI uses machine learning to adapt to your child's unique voice.",
    image: "/images/calendar.png",
    category: "Technology",
  },
  {
    id: 2,
    title: "5 Signs Your Child May Need Speech Support",
    description:
      "Early intervention is key. Learn the subtle cues that indicate it might be time for therapy.",
    image: "/images/calendar.png",
    category: "Parenting",
  },
  // Add more blogs here...
];

export default function page() {
  return (
    <div>
      <main className="min-h-screen pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The SpeakEasy <span className="text-green-600">Journal</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Insights, guides, and stories about child development and the
              future of speech therapy.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="h-52 w-full relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.description}
                  </p>

                  <Link
                    href={`/blog/${blog.id}`}
                    className="mt-auto text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
