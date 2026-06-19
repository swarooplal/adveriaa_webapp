import React from 'react';

function About() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h1 className="hero-title mb-8" style={{ fontSize: '4rem' }}>About Us.</h1>
        <p className="hero-subtitle mb-16 max-w-3xl">
          We are a global digital innovation partner. We build brands and digital experiences that drive revenue for growth-stage and enterprise technology companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-saans font-semibold text-white mb-6">Built for the modern web.</h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Founded on the belief that design should not just look good, but perform exceptionally well. We've brought together top talent from around the world to build a new kind of agency.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Our team consists of senior strategists, award-winning designers, and elite engineers who have worked with some of the fastest-growing companies in the world.
            </p>
          </div>
          <div className="w-full aspect-square bg-[#121212] rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E31837]/30 to-transparent"></div>
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 font-saans font-bold text-2xl">Team Photo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
