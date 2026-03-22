"use client";

import { useState, useEffect } from "react";
import { modules } from "@/data/modules";
import Link from "next/link";

export default function Home() {
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem("rewaken-progress") || "[]");
      setCompleted(saved);
    } catch {}
  }, []);

  const progress = modules.length > 0 ? Math.round((completed.length / modules.length) * 100) : 0;

  return (
    <div className="min-h-screen" style={{ background: "var(--rewaken-cream)" }}>
      {/* Hero */}
      <header className="relative overflow-hidden" style={{ background: "var(--rewaken-teal)" }}>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grain" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.5" fill="white" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grain)" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
          <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase">Course</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-2">
              <span className="italic font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>re</span>
              <span className="font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>waken</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mt-4 max-w-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              GLP-1 Knowledge &amp; Side Effects
            </p>
            <p className="text-white/60 text-base mt-4 max-w-lg">
              Your comprehensive guide to understanding GLP-1 therapy, managing side effects, and building lasting wellness habits.
            </p>
          </div>

          {/* Progress bar */}
          {completed.length > 0 && (
            <div className="mt-10 animate-fade-in-up opacity-0 delay-2" style={{ animationFillMode: "forwards" }}>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${progress}%`, background: "var(--rewaken-sage)" }}
                  />
                </div>
                <span className="text-white/80 text-sm font-medium">{progress}% complete</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Module Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, i) => {
            const isComplete = completed.includes(mod.id);
            return (
              <Link
                href={`/module/${mod.id}`}
                key={mod.id}
                className="group animate-fade-in-up opacity-0"
                style={{ animationFillMode: "forwards", animationDelay: `${i * 0.08}s` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-black/[0.04] hover:-translate-y-1">
                  <div className="flex items-stretch">
                    {/* Color bar */}
                    <div
                      className="w-1.5 shrink-0 transition-all duration-500 group-hover:w-2"
                      style={{ background: mod.color }}
                    />
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">{mod.icon}</span>
                            <span
                              className="text-xs font-semibold tracking-[0.15em] uppercase"
                              style={{ color: mod.color }}
                            >
                              Module {mod.id}
                            </span>
                            {isComplete && (
                              <span className="ml-auto text-xs font-medium px-2.5 py-0.5 rounded-full" style={{ background: "rgba(107,175,141,0.12)", color: "var(--rewaken-sage)" }}>
                                ✓ Complete
                              </span>
                            )}
                          </div>
                          <h2
                            className="text-xl md:text-2xl font-medium mb-2 group-hover:opacity-80 transition-opacity"
                            style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--rewaken-text)" }}
                          >
                            {mod.title}
                          </h2>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {mod.subtitle}
                          </p>
                        </div>
                        <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-black/[0.03] group-hover:bg-black/[0.06] transition-colors">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400 group-hover:text-gray-600 transition-colors group-hover:translate-x-0.5 transition-transform">
                            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      {/* Section count */}
                      <div className="mt-4 pt-4 border-t border-black/[0.04] flex items-center gap-4 text-xs text-gray-400">
                        <span>{mod.sections.length} sections</span>
                        {mod.sections.some(s => s.type === "video") && (
                          <>
                            <span>•</span>
                            <span>📹 Video</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] py-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-sm text-gray-400">
            <span className="italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>re</span>
            <span className="font-medium">waken</span>
            <span className="ml-2">life</span>
          </div>
          <div className="text-xs text-gray-400">
            For educational purposes only — always follow your provider&apos;s instructions
          </div>
        </div>
      </footer>
    </div>
  );
}
