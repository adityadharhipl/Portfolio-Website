"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function BlogSection() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

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
          <div className="section-card overflow-hidden rounded-[2rem] bg-[var(--surface)] p-10 flex justify-center items-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--night)] border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <section id="blog" className="scroll-mt-24 py-10 lg:py-16">
      <div className="section-shell">
        <div className="section-card overflow-hidden rounded-[2rem] bg-[var(--surface)]">
          <div className="relative min-h-[18rem] overflow-hidden bg-[linear-gradient(180deg,#11151c_0%,#171b22_50%,#232a32_100%)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,20,0.12),rgba(13,15,20,0.58))]" />
            <div className="relative flex h-full flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/58">
                  Thoughts & Articles
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Blog
                </h2>
              </div>
              <div className="section-box section-box-dark">READ MORE</div>
            </div>
          </div>

          <div className="px-6 pb-10 pt-8 sm:px-10 lg:px-14 lg:pb-14">
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog, index) => (
                <article
                  key={blog._id}
                  onClick={() => setSelectedBlog(blog)}
                  className={`group lift-card cursor-pointer overflow-hidden rounded-[1.5rem] border border-[rgba(18,18,18,0.08)] bg-white shadow-[0_18px_45px_rgba(16,18,22,0.08)] ${
                    index % 2 === 1 ? "md:translate-y-4 xl:translate-y-0" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--night)] flex items-center justify-center">
                    {blog.imageUrl ? (
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="text-white/20 uppercase font-black text-2xl tracking-widest">BLOG</div>
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,15,20,0.1),rgba(13,15,20,0.55))]" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-black/18 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.4em] text-white/78 backdrop-blur-sm">
                      ARTICLE
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[rgba(18,18,18,0.46)]">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.04em] line-clamp-1">{blog.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal for Blog */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div 
            className="absolute inset-0 bg-[#07090e]/80 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedBlog(null)} 
          />
          
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#11141b] shadow-2xl text-white">
            <button 
              onClick={() => setSelectedBlog(null)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-white/10"
            >
              ✕
            </button>
            
            {selectedBlog.imageUrl && (
              <div className="relative h-64 w-full sm:h-80 lg:h-96 bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedBlog.imageUrl} 
                  alt={selectedBlog.title} 
                  className="absolute inset-0 h-full w-full object-cover opacity-40 blur-sm"
                />
                <img 
                  src={selectedBlog.imageUrl} 
                  alt={selectedBlog.title} 
                  className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl"
                />
              </div>
            )}
            
            <div className="px-8 pb-10 pt-8 sm:px-12 lg:px-16">
              <div className="mb-4 inline-block rounded-full border border-white/18 bg-white/5 px-4 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.4em] text-white/80">
                Article
              </div>
              <h3 className="mb-8 text-3xl font-black tracking-tight sm:text-4xl">{selectedBlog.title}</h3>
              
              <div className="mb-10 text-sm leading-relaxed text-white/70 sm:text-base whitespace-pre-wrap">
                {selectedBlog.content}
              </div>
              
              <div className="flex justify-between items-center border-t border-white/10 pt-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                  {new Date(selectedBlog.createdAt).toLocaleDateString()}
                </div>
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-xs font-black uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
