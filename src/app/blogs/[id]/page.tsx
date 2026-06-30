import connectDB from "@/lib/db";
import { Blog } from "@/models/Blog";
import Link from "next/link";
import { notFound } from "next/navigation";

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
          <aside className="space-y-6">
            
            {/* Actions Widget */}
            <div className="bg-[#11141b] rounded-[1.5rem] border border-white/10 p-6 shadow-2xl">
              <h3 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/50 mb-6">ACTIONS</h3>
              <div className="space-y-3">
                <button className="w-full bg-white text-black font-black uppercase tracking-[0.2em] text-[0.7rem] py-3.5 rounded-full hover:bg-white/90 transition flex items-center justify-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                  LIKE (0)
                </button>
                <button className="w-full bg-[#15202B] text-white border border-white/10 font-black uppercase tracking-[0.2em] text-[0.7rem] py-3.5 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  SHARE
                </button>
              </div>
            </div>

            {/* Comment Form Widget */}
            <div className="bg-[#11141b] rounded-[1.5rem] border border-white/10 p-6 shadow-2xl">
              <h3 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/50 mb-6">COMMENT</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-[#0c1015] border border-white/10 rounded-[1rem] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30"
                />
                <textarea 
                  placeholder="Write your comment..." 
                  rows={4}
                  className="w-full bg-[#0c1015] border border-white/10 rounded-[1rem] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 resize-none"
                ></textarea>
                <button type="button" className="w-full bg-white text-black font-black uppercase tracking-[0.2em] text-[0.7rem] py-3.5 rounded-full hover:bg-white/90 transition">
                  POST COMMENT
                </button>
              </form>
            </div>

            {/* Comments List Widget */}
            <div className="bg-[#11141b] rounded-[1.5rem] border border-white/10 p-6 shadow-2xl">
              <h3 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/50 mb-6">COMMENTS</h3>
              <div className="text-sm text-white/50 text-center py-4">
                No comments yet. Be the first to share your thoughts.
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
