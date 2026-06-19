import React from 'react';

function Work() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h1 className="hero-title mb-8" style={{ fontSize: '4rem' }}>Our Work.</h1>
        <p className="hero-subtitle mb-16 max-w-3xl">
          A selection of our recent projects across brand strategy, product design, and web engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#121212] rounded-2xl mb-6 overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Image placeholder */}
              </div>
              <h3 className="text-2xl font-saans font-semibold text-white mb-2">Project Alpha {item}</h3>
              <p className="text-[#E31837] font-medium text-sm">Brand Identity, Web Design</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Work;
