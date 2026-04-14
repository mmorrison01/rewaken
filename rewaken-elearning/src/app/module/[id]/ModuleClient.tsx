"use client";

import { useState, useEffect } from "react";
import { modules } from "@/data/modules";
import Link from "next/link";
import Image from "next/image";

function VideoPlaceholder({ title, moduleColor }: { title: string; moduleColor: string }) {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden shadow-lg"
      style={{ aspectRatio: "16/9", background: `linear-gradient(135deg, ${moduleColor}, ${moduleColor}dd, ${moduleColor}99)` }}
    >
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vidgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vidgrid)" />
        </svg>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div className="text-center px-8">
          <p className="text-white/90 text-sm font-medium tracking-wide">{title}</p>
          <p className="text-white/50 text-xs mt-1">Video coming soon</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10" />
    </div>
  );
}

function YouTubeEmbed({ url }: { url: string }) {
  const videoId = url.includes("youtu.be/")
    ? url.split("youtu.be/")[1].split(/[?&#]/)[0]
    : url.includes("v=")
    ? url.split("v=")[1].split(/[?&#]/)[0]
    : "";
  if (!videoId) return null;
  return (
    <div className="mb-8 rounded-xl overflow-hidden shadow-lg" style={{ aspectRatio: "16/9" }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

function SectionSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mb-8 rounded-xl overflow-hidden shadow-lg bg-white">
      <div className="relative" style={{ aspectRatio: "16/9" }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>
    </div>
  );
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const lines = block.split("\n");
    return (
      <div key={i} className="mb-4">
        {lines.map((line, j) => {
          if (line.startsWith("**") && line.includes("**")) {
            const parts = line.split(/\*\*/);
            return (
              <p key={j} className="mb-2 leading-relaxed">
                {parts.map((part, k) =>
                  k % 2 === 1 ? (
                    <strong key={k} style={{ color: "var(--rewaken-teal-dark)" }}>{part}</strong>
                  ) : (
                    <span key={k}>{part}</span>
                  )
                )}
              </p>
            );
          }
          if (line.startsWith("\u25a1") || line.startsWith("\u2610")) {
            return (
              <label key={j} className="flex items-start gap-3 py-1.5 cursor-pointer group">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#457B8D]" />
                <span className="text-sm leading-relaxed group-hover:text-gray-700">{line.replace(/^[\u25a1\u2610]\s*/, "")}</span>
              </label>
            );
          }
          if (line.startsWith("\u2022 ") || line.startsWith("- ")) {
            return (
              <div key={j} className="flex items-start gap-2 py-0.5 ml-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--rewaken-teal)" }} />
                <span className="text-sm leading-relaxed">{line.replace(/^[\u2022\-]\s*/, "")}</span>
              </div>
            );
          }
          if (/^[\u2757\u2714\u2705\u{1F489}\u{1F4A7}\u{1F6B6}\u{1F957}\u{1F912}\u{1F4AC}\u{1F4A1}\u2B50\u{1F9E0}]/u.test(line)) {
            return <p key={j} className="text-sm leading-relaxed py-0.5">{line}</p>;
          }
          if (line.trim()) {
            return <p key={j} className="text-sm leading-relaxed mb-1">{line}</p>;
          }
          return null;
        })}
      </div>
    );
  });
}

export default function ModuleClient({ moduleId }: { moduleId: number }) {
  const mod = modules.find((m) => m.id === moduleId);
  const [activeSection, setActiveSection] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [sectionsVisited, setSectionsVisited] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem("rewaken-progress") || "[]");
      setCompleted(saved);
    } catch {}
  }, []);

  useEffect(() => {
    setSectionsVisited((prev) => new Set([...prev, activeSection]));
  }, [activeSection]);

  // Reset section when navigating between modules
  useEffect(() => {
    setActiveSection(0);
    setSectionsVisited(new Set([0]));
  }, [moduleId]);

  const markComplete = () => {
    if (!mod) return;
    const updated = [...new Set([...completed, mod.id])];
    setCompleted(updated);
    try { sessionStorage.setItem("rewaken-progress", JSON.stringify(updated)); } catch {}
  };

  if (!mod) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--rewaken-cream)" }}>
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Module not found</h1>
          <Link href="/" className="text-sm underline" style={{ color: "var(--rewaken-teal)" }}>Back to course</Link>
        </div>
      </div>
    );
  }

  const isComplete = completed.includes(mod.id);
  const allVisited = mod.sections.every((_, i) => sectionsVisited.has(i));
  const nextMod = modules.find((m) => m.id === moduleId + 1);
  const prevMod = modules.find((m) => m.id === moduleId - 1);
  const section = mod.sections[activeSection];

  return (
    <div className="min-h-screen" style={{ background: "var(--rewaken-cream)" }}>
      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity" style={{ color: "var(--rewaken-text)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All Modules
          </Link>
          <div className="text-xs text-gray-400 hidden md:block">
            <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>re</span>
            <span className="font-medium">waken</span>
            <span className="ml-1">&mdash; GLP-1 Knowledge &amp; Side Effects</span>
          </div>
          <div className="flex items-center gap-2">
            {prevMod && (
              <Link href={`/module/${prevMod.id}`} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/[0.04] transition-colors" title={`Module ${prevMod.id}`}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            )}
            {nextMod && (
              <Link href={`/module/${nextMod.id}`} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/[0.04] transition-colors" title={`Module ${nextMod.id}`}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative overflow-hidden" style={{ background: mod.color }}>
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%"><defs><pattern id="hg" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#hg)"/></svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 relative">
          <span className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase">Module {mod.id} of {modules.length}</span>
          <h1 className="text-white text-3xl md:text-5xl font-light mt-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {mod.icon} {mod.title}
          </h1>
          <p className="text-white/70 text-base mt-3 max-w-lg">{mod.subtitle}</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-black/[0.04]">
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: mod.color }}>Sections</h3>
              <div className="space-y-1">
                {mod.sections.map((s, i) => {
                  const visited = sectionsVisited.has(i);
                  const active = i === activeSection;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveSection(i)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-start gap-2.5 ${active ? "shadow-sm" : "hover:bg-black/[0.02]"}`}
                      style={{ background: active ? `${mod.color}10` : undefined, color: active ? mod.color : "var(--rewaken-text)" }}
                    >
                      <span className="shrink-0 mt-0.5">
                        {visited ? (
                          <svg width="14" height="14" viewBox="0 0 16 16" fill={active ? mod.color : "#6BAF8D"}><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.3l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L7 9.3l3.6-3.6a.5.5 0 11.7.7z"/></svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#ccc" strokeWidth="1"><circle cx="8" cy="8" r="6.5"/></svg>
                        )}
                      </span>
                      <span className="leading-snug">{s.title}</span>
                      {s.videoUrl && <span className="ml-auto text-xs opacity-50">{"\u{1F4F9}"}</span>}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-black/[0.06]">
                {isComplete ? (
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--rewaken-sage)" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.3 5.3l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L7 9.3l3.6-3.6a.5.5 0 11.7.7z"/></svg>
                    Module complete
                  </div>
                ) : (
                  <button
                    onClick={markComplete}
                    disabled={!allVisited}
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${allVisited ? "text-white shadow-sm hover:shadow-md" : "text-gray-400 bg-gray-100 cursor-not-allowed"}`}
                    style={allVisited ? { background: mod.color } : undefined}
                  >
                    {allVisited ? "Mark Complete \u2713" : `Visit all sections (${sectionsVisited.size}/${mod.sections.length})`}
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="min-w-0">
            <div key={activeSection}>
              {/* Section slide — auto-synced to the active section */}
              <SectionSlide src={section.slide} alt={section.title} />

              {/* Section header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 rounded-full" style={{ background: mod.color }} />
                <h2 className="text-2xl md:text-3xl font-medium" style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--rewaken-text)" }}>
                  {section.title}
                </h2>
              </div>

              {/* Video embed or placeholder */}
              {section.videoUrl ? (
                <YouTubeEmbed url={section.videoUrl} />
              ) : section.type === "video" && section.videoPlaceholder ? (
                <div className="mb-8">
                  <VideoPlaceholder title={section.videoPlaceholder} moduleColor={mod.color} />
                </div>
              ) : null}

              {/* Content card */}
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-black/[0.04] prose-rewaken">
                {renderContent(section.content)}
              </div>

              {/* Section nav */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/[0.06]">
                <button
                  onClick={() => { setActiveSection((p) => Math.max(0, p - 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  disabled={activeSection === 0}
                  className="flex items-center gap-2 text-sm font-medium disabled:opacity-30 hover:opacity-70 transition-opacity"
                  style={{ color: mod.color }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Previous
                </button>
                <span className="text-xs text-gray-400">{activeSection + 1} / {mod.sections.length}</span>
                {activeSection < mod.sections.length - 1 ? (
                  <button
                    onClick={() => { setActiveSection((p) => Math.min(mod.sections.length - 1, p + 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ color: mod.color }}
                  >
                    Next
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                ) : nextMod ? (
                  <Link href={`/module/${nextMod.id}`} className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: mod.color }}>
                    Module {nextMod.id}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                ) : (
                  <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--rewaken-sage)" }}>
                    Back to Course
                  </Link>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="border-t border-black/[0.06] py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm text-gray-400">
            <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>re</span>
            <span className="font-medium">waken</span>
            <span className="ml-1">life</span>
          </div>
          <div className="text-xs text-gray-400 text-center">For educational purposes only &mdash; always follow your provider&apos;s instructions</div>
        </div>
      </footer>
    </div>
  );
}
