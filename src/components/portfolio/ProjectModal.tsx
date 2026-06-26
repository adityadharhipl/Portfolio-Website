import Image from "next/image";
import { useEffect } from "react";
import { Project } from "./shared";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[#11141b] border border-white/10 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition hover:bg-black/60"
          aria-label="Close"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-video w-full shrink-0 bg-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,20,27,0.1),rgba(17,20,27,1))]" />
          
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
            <span className="mb-3 inline-block rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">
              {project.category}
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight sm:text-4xl">{project.title}</h2>
          </div>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8 pt-0">
          {project.description && (
            <div className="mb-8">
              <h3 className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/40">
                About the Project
              </h3>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                {project.description}
              </p>
            </div>
          )}

          {project.techStack && (
            <div className="mb-8">
              <h3 className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/40">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-semibold text-white/70">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto pt-4 flex gap-3 sm:gap-4 flex-col sm:flex-row">
            {project.url && (
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-orange-400 hover:scale-[1.02] active:scale-95"
              >
                Visit Live Site
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <button 
              onClick={onClose}
              className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-2xl border border-white/10 bg-transparent px-8 py-4 text-xs font-black uppercase tracking-widest text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
