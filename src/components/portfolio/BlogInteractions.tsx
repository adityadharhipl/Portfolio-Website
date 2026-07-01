"use client";

import { useState, useEffect } from "react";

interface Comment {
  _id?: string;
  name: string;
  text: string;
  createdAt: string | Date;
}

interface BlogInteractionsProps {
  blogId: string;
  initialLikes: number;
  initialComments: Comment[];
  blogUrl: string;
}

export default function BlogInteractions({ blogId, initialLikes, initialComments, blogUrl }: BlogInteractionsProps) {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Check if this user has already liked this blog
    if (localStorage.getItem(`liked_${blogId}`)) {
      setHasLiked(true);
    }
  }, [blogId]);

  const [comments, setComments] = useState<Comment[]>(initialComments || []);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = async () => {
    if (isLiking || hasLiked) return;
    setIsLiking(true);
    setHasLiked(true);
    localStorage.setItem(`liked_${blogId}`, "true");
    setLikes(prev => prev + 1); // Optimistic UI update

    try {
      await fetch(`/api/blogs/${blogId}/like`, { method: "POST" });
    } catch (e) {
      setLikes(prev => prev - 1); // Revert on failure
      setHasLiked(false);
      localStorage.removeItem(`liked_${blogId}`);
    } finally {
      setIsLiking(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this article!',
        url: blogUrl
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(blogUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || isCommenting) return;

    setIsCommenting(true);

    // Optimistic UI update
    const optimisticComment: Comment = {
      _id: Date.now().toString(),
      name,
      text,
      createdAt: new Date().toISOString()
    };

    setComments(prev => [...prev, optimisticComment]);
    setName("");
    setText("");

    try {
      const res = await fetch(`/api/blogs/${blogId}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: optimisticComment.name, text: optimisticComment.text })
      });
      const data = await res.json();

      if (data.success && data.data) {
        // Replace optimistic comment with actual database comment
        setComments(prev => prev.map(c => c._id === optimisticComment._id ? data.data : c));
      } else {
        // Remove optimistic comment on failure
        setComments(prev => prev.filter(c => c._id !== optimisticComment._id));
      }
    } catch (e) {
      // Remove optimistic comment on failure
      setComments(prev => prev.filter(c => c._id !== optimisticComment._id));
    } finally {
      setIsCommenting(false);
    }
  };

  return (
    <aside className="space-y-6">
      {/* Actions Widget */}
      <div className="bg-[#11141b] rounded-[1.5rem] border border-white/10 p-6 shadow-2xl">
        <h3 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/50 mb-6">ACTIONS</h3>
        <div className="space-y-3">
          <button
            onClick={handleLike}
            disabled={isLiking || hasLiked}
            className={`w-full font-black uppercase tracking-[0.2em] text-[0.7rem] py-3.5 rounded-full transition flex items-center justify-center gap-2 cursor-pointer ${hasLiked ? "bg-white/20 text-white/50 cursor-default" : "bg-white text-black hover:bg-white/90"
              }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={hasLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
            {hasLiked ? `LIKED (${likes})` : `LIKE (${likes})`}
          </button>
          <button
            onClick={handleShare}
            className="w-full bg-[#15202B] text-white border border-white/10 font-black uppercase tracking-[0.2em] text-[0.7rem] py-3.5 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
            {copied ? "COPIED!" : "SHARE"}
          </button>
        </div>
      </div>

      {/* Comment Form Widget */}
      <div className="bg-[#11141b] rounded-[1.5rem] border border-white/10 p-6 shadow-2xl">
        <h3 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/50 mb-6">COMMENT</h3>
        <form onSubmit={handlePostComment} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full bg-[#0c1015] border border-white/10 rounded-[1rem] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30"
          />
          <textarea
            placeholder="Write your comment..."
            rows={4}
            value={text}
            onChange={e => setText(e.target.value)}
            required
            className="w-full bg-[#0c1015] border border-white/10 rounded-[1rem] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={isCommenting || !name.trim() || !text.trim()}
            className="w-full bg-white text-black font-black uppercase tracking-[0.2em] text-[0.7rem] py-3.5 rounded-full hover:bg-white/90 transition disabled:opacity-50"
          >
            POST COMMENT
          </button>
        </form>
      </div>

      {/* Comments List Widget */}
      <div className="bg-[#11141b] rounded-[1.5rem] border border-white/10 p-6 shadow-2xl">
        <h3 className="text-[0.65rem] font-black uppercase tracking-[0.4em] text-white/50 mb-6">COMMENTS ({comments.length})</h3>

        {comments.length === 0 ? (
          <div className="text-sm text-white/50 text-center py-4">
            No comments yet. Be the first to share your thoughts.
          </div>
        ) : (
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {comments.map((comment, idx) => (
              <div key={comment._id || idx} className="space-y-1 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{comment.name}</span>
                  <span className="text-[0.65rem] text-white/40 uppercase">
                    {new Date(comment.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </span>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
