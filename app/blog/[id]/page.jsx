"use client";
import React from "react";
import { FaCalendarAlt, FaUser, FaArrowLeft, FaClock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const MOCK_BLOG_DATA = {
  id: "1",
  title: "Help your child reach for the stars: A Guide to Early Therapy",
  description:
    "Every child’s journey is unique. Discover how specialized therapy sessions provide the tools and emotional support your little one needs to overcome hurdles and shine bright.",
  date: "May 15, 2026",
  author: "Dr. Elena Kalniņa",
  readTime: "5 min read",
  image: "/images/licenseImg.jpeg", // Replace with your actual image path
  content: [
    {
      type: "paragraph",
      text: "Understanding your child's unique development path can be challenging yet deeply rewarding. Many parents wonder when is the right time to seek specialized guidance, or how early intervention can change the course of a child's emotional and physical milestones.",
    },
    {
      type: "heading",
      text: "The Power of Early Intervention",
    },
    {
      type: "paragraph",
      text: "Research consistently shows that the earliest years of a child's life are crucial for brain development. Specialized therapy sessions during these developmental windows don't just solve immediate hurdles; they lay down the neuro-pathways that children rely on for the rest of their lives.",
    },
    {
      type: "paragraph",
      text: "By focusing on emotional safety alongside cognitive goals, tailored programs give children the resilience they need to approach difficult tasks with confidence rather than frustration.",
    },
    {
      type: "heading",
      text: "Practical Steps You Can Take at Home",
    },
    {
      type: "paragraph",
      text: "While clinical sessions form the bedrock of progress, reinforcement at home accelerates success. Simple routines, intentional playtime, and emotion-labeling exercises are incredible tools that parents can weave seamlessly into everyday life.",
    },
  ],
  tags: ["Child Therapy", "Parenting Tips", "Early Development"],
};

export default function page() {
  const blog = MOCK_BLOG_DATA;
  return (
    <div>
      <article className="min-h-screen  py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-medium mb-6 transition-colors group"
          >
            <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Articles</span>
          </Link>

          {/* Blog Header / Meta Details */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {blog.date}
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="flex items-center gap-1">
                <FaUser /> {blog.author}
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="flex items-center gap-1">
                <FaClock /> {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              {blog.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {blog.description}
            </p>
          </header>

          {/* Main Hero Image */}
          <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-12">
            {/* Using standard img for placeholder/flexibility, swap with Next.js <Image> if preferred */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Layout: Content on Left, Sidebar on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Space */}
            <div className="lg:col-span-2 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
                {blog.content.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold text-gray-900 pt-4 mt-6 first:mt-0"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-gray-700 text-lg">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {/* Tags Bottom Row */}
              <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Sidebar Section */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Call to Action Box */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-6 rounded-2xl shadow-md shadow-green-600/10">
                <h3 className="text-xl font-bold mb-3">
                  Ready to help your child?
                </h3>
                <p className="text-green-50 text-sm mb-6 leading-relaxed">
                  Book a personalized diagnostic session with our experts today
                  and start building a tailored pathway for growth.
                </p>
                <Link
                  href="/booking"
                  className="block text-center w-full bg-white text-green-700 font-semibold py-3 px-4 rounded-xl hover:bg-green-50 transition-colors shadow-sm"
                >
                  Schedule Consultation
                </Link>
              </div>

              {/* Newsletter Sign up */}
              <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Weekly Guidance
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Get child development insights and updates written by
                  certified specialists delivered directly to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-sm border border-gray-200 rounded-xl px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                />
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-3 px-4 rounded-xl transition-colors">
                  Subscribe Now
                </button>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
