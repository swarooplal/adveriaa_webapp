import React from 'react';

function Connect() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-8 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h1 className="hero-title mb-6" style={{ fontSize: '3.5rem' }}>Let's build something radical.</h1>
          <p className="text-white/70 text-lg mb-12 max-w-lg leading-relaxed">
            Ready to accelerate your growth? Fill out the form below and our team will be in touch within 24 hours to schedule your strategy session.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a href="mailto:hello@adveria.com" className="text-[#E31837] hover:text-white transition-colors">hello@adveria.com</a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Global Headquarters</h3>
              <p className="text-white/60">San Francisco, CA<br/>Remote Globally</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">First Name</label>
                  <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E31837] transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E31837] transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">Work Email</label>
                <input type="email" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E31837] transition-colors" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">Company</label>
                <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E31837] transition-colors" placeholder="Company Name" />
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium">Project Details</label>
                <textarea className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E31837] transition-colors h-32 resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>

              <button type="button" className="w-full bg-[#E31837] text-white font-semibold py-4 rounded-xl hover:bg-[#C8102E] transition-colors mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Connect;
