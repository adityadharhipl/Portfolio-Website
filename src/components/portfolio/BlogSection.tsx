"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DUMMY_BLOGS = [
  {
    _id: "dummy-1",
    title: "Building Scalable REST APIs with Node.js and Express",
    content: "A deep dive into designing production-ready REST APIs using Node.js, Express, and MongoDB. Covers authentication, rate limiting, and deployment best practices.",
    imageUrl: "",
    createdAt: new Date("2024-03-15").toISOString(),
    isDummy: true,
  },
  {
    _id: "dummy-2",
    title: "Real-Time Applications with WebSockets and Redis",
    content: "Learn how to build real-time features like notifications and live updates using WebSockets with Node.js and Redis for pub/sub messaging at scale.",
    imageUrl: "",
    createdAt: new Date("2024-02-20").toISOString(),
    isDummy: true,
  },
  {
    _id: "dummy-3",
    title: "Next.js Headless Commerce — Ergonomic Furniture Store",
    content: "A full walkthrough of building a headless e-commerce platform using Next.js, Node.js backend, headless WordPress as CMS, and ngenius payment gateway integration.",
    imageUrl: "",
    createdAt: new Date("2024-01-10").toISOString(),
    isDummy: true,
  },
];

const GRADIENTS = [
  "linear-gradient(135deg,#1d4ed8 0%,#0b0c10 100%)",
  "linear-gradient(135deg,#7e22ce 0%,#0b0c10 100%)",
  "linear-gradient(135deg,#047857 0%,#0b0c10 100%)",
];

export function BlogSection() {
  const [blogs, setBlogs] = useState<any[]>(DUMMY_BLOGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          setBlogs(data.data);
        }
        // else keep dummy blogs showing
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const displayBlogs = loading ? DUMMY_BLOGS : blogs;

  return (
    <section id="blog" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div
          className="overflow-hidden rounded-[2rem] shadow-2xl"
          style={{ background: "#0c1015", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Header */}
          <div
            className="relative px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14"
            style={{ background: "linear-gradient(180deg,#15202B 0%,#11141b 100%)" }}
          >
            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.5em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Thoughts &amp; Articles
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Blog
                </h2>
              </div>
              <div
                className="inline-flex items-center justify-center min-w-[8rem] px-6 py-3 text-[0.7rem] font-black uppercase tracking-[0.34em] text-white"
                style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem" }}
              >
                READ MORE
              </div>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="px-6 pb-10 pt-8 sm:px-10 lg:px-14 lg:pb-14">
            <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {displayBlogs.map((blog, index) => (
                <Link
                  href={blog.isDummy ? "#blog" : `/blogs/${blog._id}`}
                  key={blog._id}
                  onClick={blog.isDummy ? (e) => e.preventDefault() : undefined}
                  className="group cursor-pointer overflow-hidden block"
                  style={{
                    borderRadius: "1.5rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#15202B",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* Card image / gradient area */}
                  <div
                    className="relative flex items-center justify-center overflow-hidden"
                    style={{ aspectRatio: "4/3", background: "#0b0c10" }}
                  >
                    {blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{ background: GRADIENTS[index % GRADIENTS.length], opacity: 0.7 }}
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.85) 100%)" }}
                    />

                    {/* Badge top-left */}
                    <div
                      className="absolute left-4 top-4 text-[0.6rem] font-black uppercase tracking-[0.35em] text-white"
                      style={{
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "999px",
                        padding: "4px 12px",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {blog.isDummy ? "ARTICLE" : "ARTICLE"}
                    </div>

                    {/* Title overlay at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                      <h3
                        className="text-lg font-black leading-snug tracking-[-0.03em] text-white line-clamp-2"
                        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
                      >
                        {blog.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <p
                      className="text-[0.62rem] font-bold uppercase tracking-[0.3em]"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>

                    <span
                      className="flex items-center gap-1.5 text-[0.62rem] font-black uppercase tracking-[0.3em]"
                      style={{ color: blog.isDummy ? "rgba(255,255,255,0.3)" : "#60a5fa" }}
                    >
                      {blog.isDummy ? "COMING SOON" : "READ MORE"}
                      {!blog.isDummy && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {loading && (
              <p className="mt-6 text-center text-[0.65rem] font-black uppercase tracking-[0.4em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Loading articles...
              </p>
            )}

            {/* View All Blogs Button */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-3 rounded-full text-[0.7rem] font-black uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-black"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "0.85rem 2.5rem",
                }}
              >
                VIEW ALL BLOGS
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
