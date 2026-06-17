import React from 'react';

function Services() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <h1 className="hero-title mb-8" style={{ fontSize: '4rem' }}>Our Services.</h1>
        <p className="hero-subtitle mb-16 max-w-3xl">
          We combine strategic thinking with premium design execution to deliver digital products, websites, and brand identities that stand out.
        </p>
        
        {/* We can re-use the services-grid from Home, or create a specific Services list here */}
        <div className="space-y-24">
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-[#E31837] font-saans font-semibold uppercase tracking-wider text-sm mb-4">01</h2>
              <h3 className="hero-title" style={{ fontSize: '2.5rem' }}>Brand Strategy</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Your brand is the foundation of your business. We build comprehensive brand architectures that resonate with your target audience and differentiate you in the market.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#121212] border border-white/5 rounded-xl">
                  <h4 className="text-white font-medium mb-2">Visual Identity</h4>
                  <p className="text-white/50 text-sm">Logos, color systems, typography</p>
                </div>
                <div className="p-6 bg-[#121212] border border-white/5 rounded-xl">
                  <h4 className="text-white font-medium mb-2">Verbal Identity</h4>
                  <p className="text-white/50 text-sm">Voice, tone, messaging frameworks</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-[#E31837] font-saans font-semibold uppercase tracking-wider text-sm mb-4">02</h2>
              <h3 className="hero-title" style={{ fontSize: '2.5rem' }}>Digital Product</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We design intuitive, high-performance digital products and applications that delight users and drive engagement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#121212] border border-white/5 rounded-xl">
                  <h4 className="text-white font-medium mb-2">UX/UI Design</h4>
                  <p className="text-white/50 text-sm">Wireframes, prototypes, interfaces</p>
                </div>
                <div className="p-6 bg-[#121212] border border-white/5 rounded-xl">
                  <h4 className="text-white font-medium mb-2">Design Systems</h4>
                  <p className="text-white/50 text-sm">Component libraries, guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
