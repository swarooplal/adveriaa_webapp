import React from 'react';

function Blog() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h1 className="hero-title mb-8" style={{ fontSize: '4rem' }}>Insights.</h1>
        <p className="hero-subtitle mb-16 max-w-3xl">
          Thoughts, perspectives, and strategies on brand, design, and technology from our team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group cursor-pointer flex flex-col h-full bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-[#E31837]/50 transition-colors duration-300">
              <div className="w-full aspect-video bg-[#1a1a1a] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[#E31837] font-medium text-xs uppercase tracking-wider mb-3">Design Strategy</span>
                <h3 className="text-xl font-saans font-semibold text-white mb-4 line-clamp-2">How to Build a Design System that Scales with Your Enterprise</h3>
                <p className="text-white/60 text-sm mb-6 line-clamp-3 flex-grow">
                  Learn the foundational principles of creating a robust design system that empowers your engineering and design teams to move faster without sacrificing quality.
                </p>
                <span className="text-white/40 text-xs font-medium">Oct 24, 2026 • 5 min read</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blog;
