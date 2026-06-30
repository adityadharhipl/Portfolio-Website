"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function BlogSection() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-10 lg:py-16">
        <div className="section-shell">
          <div className="section-card overflow-hidden rounded-[2rem] bg-[#11141b] p-10 flex justify-center items-center border border-white/10">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <section id="blog" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card overflow-hidden rounded-[2rem] bg-[#0c1015] border border-white/10 shadow-2xl">
          <div className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(180deg,#15202B_0%,#11141b_100%)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.58))]" />
            <div className="relative flex h-full flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/58">
                  Thoughts & Articles
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Blog
                </h2>
              </div>
              <div className="section-box section-box-dark text-white border-white/20 bg-transparent">READ MORE</div>
            </div>
          </div>

          <div className="px-6 pb-10 pt-8 sm:px-10 lg:px-14 lg:pb-14">
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog, index) => (
                <Link
                  href={`/blogs/${blog._id}`}
                  key={blog._id}
                  className={`group lift-card cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#15202B] shadow-2xl block ${
                    index % 2 === 1 ? "md:translate-y-4 xl:translate-y-0" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black flex items-center justify-center">
                    {blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                      />
                    ) : (
                      <div className="text-white/20 uppercase font-black text-2xl tracking-widest">ARTICLE</div>
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.8))]" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.4em] text-white backdrop-blur-sm">
                      ARTICLE
                    </div>
                  </div>
                  <div className="flex flex-col justify-between px-6 py-6 h-[160px]">
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/50 mb-3">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                      <h3 className="text-xl font-black tracking-[-0.04em] text-white line-clamp-2">{blog.title}</h3>
                    </div>
                    
                    <div className="text-xs font-black tracking-[0.3em] text-blue-400 mt-4 uppercase flex items-center gap-2 group-hover:text-blue-300 transition">
                      Read More
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
