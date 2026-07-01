import connectDB from "@/lib/db";
import { Blog } from "@/models/Blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogInteractions from "@/components/portfolio/BlogInteractions";
import { headers } from "next/headers";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  await connectDB();
  let blog;
  
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    return notFound();
  }

  if (!blog) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white">
      {/* Header Section */}
      <div className="relative pt-24 pb-16 px-6 lg:px-24 bg-[#0b0c10] border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <Link href="/#blog" className="inline-flex items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            BACK TO BLOGS
          </Link>
          
          <div className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-blue-400 mb-4">
            ARTICLE
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] leading-[1.1] mb-8 max-w-4xl">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.1em] text-white/60">
            <span>Aditya Dhar Dwivedi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span>{new Date(blog.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          
          {/* Left Column - Article */}
          <article className="bg-[#11141b] rounded-[2rem] border border-white/10 p-6 sm:p-10 shadow-2xl">
            {blog.imageUrl && (
              <div className="relative aspect-[16/9] w-full rounded-[1rem] overflow-hidden mb-10 bg-black">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="flex gap-2 flex-wrap mb-10">
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-[#15202B] text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/80">TECH</span>
              <span className="px-4 py-1.5 rounded-full border border-white/10 bg-[#15202B] text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/80">DEVELOPMENT</span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-[-0.03em] prose-p:text-white/80 prose-p:leading-relaxed prose-a:text-blue-400">
              {/* Note: since blog content is plain text from admin, we just render it with line breaks. 
                  In a real app, this might be markdown or HTML. */}
              {blog.content.split('\n').map((paragraph: string, idx: number) => (
                <p key={idx} className="mb-6">{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Right Column - Sidebar */}
          <BlogInteractions 
            blogId={blog._id.toString()} 
            initialLikes={blog.likes || 0} 
            initialComments={JSON.parse(JSON.stringify(blog.comments || []))}
            blogUrl={typeof window !== 'undefined' ? window.location.href : `https://adityadhar.dev/blogs/${blog._id}`}
          />
        </div>
      </div>
    </div>
  );
}
