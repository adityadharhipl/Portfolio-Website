"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Backend", "Frontend", "DevOps", "Database", "E-Commerce"];

const DUMMY_BLOGS = [
  {
    _id: "dummy-1",
    title: "Building a Headless E-Commerce Experience for Ergonomic Furniture",
    content: "How a premium ergonomic store can combine Next.js, headless WordPress, secure payments, and fast product discovery into one smooth buying journey.",
    imageUrl: "",
    createdAt: new Date("2025-06-28").toISOString(),
    category: "E-Commerce",
    tags: ["Next.js", "WordPress", "E-Commerce"],
    readTime: "6 MIN READ",
    isDummy: true,
    gradient: "linear-gradient(135deg,#047857 0%,#065f46 100%)",
  },
  {
    _id: "dummy-2",
    title: "Building Scalable Node.js APIs for Fast-Growing Products",
    content: "A practical look at designing APIs, background jobs, caching, and observability for products that need to scale without slowing down.",
    imageUrl: "",
    createdAt: new Date("2025-06-28").toISOString(),
    category: "Backend",
    tags: ["Node.js", "Express", "APIs"],
    readTime: "6 MIN READ",
    isDummy: true,
    gradient: "linear-gradient(135deg,#1d4ed8 0%,#1e3a8a 100%)",
  },
  {
    _id: "dummy-3",
    title: "Database Design for Multi-Role Platforms",
    content: "Why MySQL, PostgreSQL, MongoDB, and AWS RDS each play different roles when a platform needs flexible yet dependable data storage.",
    imageUrl: "",
    createdAt: new Date("2025-06-26").toISOString(),
    category: "Database",
    tags: ["MySQL", "PostgreSQL", "MongoDB"],
    readTime: "6 MIN READ",
    isDummy: true,
    gradient: "linear-gradient(135deg,#7e22ce 0%,#4c1d95 100%)",
  },
  {
    _id: "dummy-4",
    title: "DevOps Habits That Keep Delivery Moving",
    content: "A compact guide to Docker, VPS environments, CI/CD, Cloudflare, and release discipline for smoother deployments.",
    imageUrl: "",
    createdAt: new Date("2025-06-26").toISOString(),
    category: "DevOps",
    tags: ["Docker", "CI/CD", "Cloudflare"],
    readTime: "4 MIN READ",
    isDummy: true,
    gradient: "linear-gradient(135deg,#ea580c 0%,#9a3412 100%)",
  },
];

function BlogCard({ blog, index }: { blog: any; index: number }) {
  return (
    <article
      className="group flex flex-col overflow-hidden"
      style={{
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#111318",
        transition: "border-color 200ms, transform 200ms",
      }}
    >
      {/* Image / gradient */}
      <div
        className="relative overflow-hidden"
        style={{ height: "180px", background: blog.gradient || "#15202B" }}
      >
        {blog.imageUrl && (
          <img src={blog.imageUrl} alt={blog.title} className="h-full w-full object-cover" />
        )}
        {/* Category badge */}
        <div
          className="absolute left-3 top-3 text-[0.6rem] font-black uppercase tracking-[0.2em] text-white"
          style={{
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px",
            padding: "3px 10px",
            backdropFilter: "blur(6px)",
          }}
        >
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          {new Date(blog.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase()} · {blog.readTime}
        </p>

        <h2 className="text-base font-black leading-snug tracking-[-0.02em] text-white mb-3 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "rgba(255,255,255,0.55)" }}>
          {blog.content}
        </p>

        {/* Tags */}
        {blog.tags && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {blog.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[0.6rem] font-bold uppercase tracking-[0.15em]"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  padding: "3px 10px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto">
          {blog.isDummy ? (
            <span
              className="text-[0.62rem] font-black uppercase tracking-[0.25em]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              COMING SOON →
            </span>
          ) : (
            <Link
              href={`/blogs/${blog._id}`}
              className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-white hover:text-blue-400 transition"
            >
              READ POST →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.data?.length > 0) {
          setBlogs(data.data);
        } else {
          setBlogs(DUMMY_BLOGS);
        }
        setLoading(false);
      })
      .catch(() => {
        setBlogs(DUMMY_BLOGS);
        setLoading(false);
      });
  }, []);

  const filtered = blogs.filter((b) => {
    if (category !== "All" && b.category !== category) return false;
    if (fromDate && new Date(b.createdAt) < new Date(fromDate)) return false;
    if (toDate && new Date(b.createdAt) > new Date(toDate)) return false;
    return true;
  });

  const reset = () => { setCategory("All"); setFromDate(""); setToDate(""); };

  return (
    <div className="min-h-screen" style={{ background: "#07090e", color: "#fff" }}>

      {/* Header */}
      <div style={{ background: "#0b0c10", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-[0.65rem] font-black uppercase tracking-[0.3em] transition hover:text-white"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Portfolio
          </Link>
          <p className="text-[0.65rem] font-black uppercase tracking-[0.4em] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            BLOG ARCHIVE
          </p>
          <h1 className="text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl lg:text-6xl mb-4">
            All Blogs, Sorted by<br />Newest First.
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Filter by category or date to quickly find the posts you want to read.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: "#0c0e13", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-6xl px-6 py-6 lg:px-12">
          <div className="flex flex-wrap items-end gap-4">

            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.58rem] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                CATEGORY
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-white"
                style={{
                  background: "#15202B",
                  border: "1px solid rgba(255,255,255,0.1)",
                  outline: "none",
                  minWidth: "140px",
                }}
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* From Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.58rem] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                FROM DATE
              </label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="rounded-md px-3 py-2 text-sm text-white"
                style={{
                  background: "#15202B",
                  border: "1px solid rgba(255,255,255,0.1)",
                  outline: "none",
                  colorScheme: "dark",
                }}
              />
            </div>

            {/* To Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.58rem] font-black uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                TO DATE
              </label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="rounded-md px-3 py-2 text-sm text-white"
                style={{
                  background: "#15202B",
                  border: "1px solid rgba(255,255,255,0.1)",
                  outline: "none",
                  colorScheme: "dark",
                }}
              />
            </div>

            {/* Reset */}
            <button
              onClick={reset}
              className="rounded-md px-5 py-2 text-[0.65rem] font-black uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-20 text-center" style={{ color: "rgba(255,255,255,0.4)" }}>
            <p className="text-sm font-semibold">No articles found for the selected filters.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((blog, i) => (
              <BlogCard key={blog._id} blog={blog} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
