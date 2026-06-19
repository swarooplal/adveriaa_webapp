import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "What is your typical project timeline?", a: "Our comprehensive digital projects typically range from 8 to 16 weeks, depending on the scope of UX strategy and development required." },
    { q: "Do you work with early-stage startups?", a: "Yes. We partner with VC-backed startups to define their initial brand identity and scalable product design." },
    { q: "What is your pricing structure?", a: "We offer value-based pricing tailored to the specific business outcomes we drive. Let's chat to get a custom proposal." },
    { q: "Do you handle both design and development?", a: "Absolutely. We are an end-to-end digital partner. We design the experience and our engineering team brings it to life." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 pt-32 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-black/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] md:w-[60vw] max-w-[800px] pointer-events-none">
            <motion.img 
              src="/adveria-logo-hero.png"
              alt="Adveria Animated Logo"
              className="w-full h-full opacity-10 mix-blend-multiply object-contain"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </div>
        </div>
        
        <div className="max-w-[1550px] mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex-1 w-full"
          >
            <motion.h1 variants={itemVariants} className="text-[2.5rem] md:text-[4rem] font-saans font-light leading-[1.1] tracking-tight text-black max-w-[800px]">
              A Global Branding, UX <br className="hidden md:block" />& Digital Growth Partner.
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-6 text-[1.15rem] text-black/60 font-light leading-relaxed max-w-xl">
              We build <span className="font-semibold text-black">Radical Digital Experiences™</span> for VC-backed startups, public and Fortune 500 companies across every medium — making your brand presence compound revenue.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4">
              <button onClick={() => navigate('/connect')} className="group relative overflow-hidden bg-[#E31837] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C8102E] transition-all duration-300">
                <span className="relative z-10">See Our Work</span>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full blur-md"></div>
              </button>
            </motion.div>
          </motion.div>

          <div className="hidden md:flex flex-col gap-10 pl-12 border-l border-black/10">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="group">
              <div className="text-[2.5rem] font-semibold text-black group-hover:text-[#E31837] transition-colors">$10B+</div>
              <div className="text-[#E31837] text-[0.65rem] font-bold uppercase tracking-[0.15em]">Market Growth</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="group">
              <div className="text-[2.5rem] font-semibold text-black group-hover:text-[#E31837] transition-colors">4</div>
              <div className="text-[#E31837] text-[0.65rem] font-bold uppercase tracking-[0.15em]">Unicorns Built</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="group">
              <div className="text-[2.5rem] font-semibold text-black group-hover:text-[#E31837] transition-colors">6</div>
              <div className="text-[#E31837] text-[0.65rem] font-bold uppercase tracking-[0.15em]">Clients Acquired</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-16 bg-[#0a0a0a]" id="services">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-[1550px] mx-auto"
        >
          <motion.h2 variants={itemVariants} className="font-saans font-light text-[3rem] text-[#575B5F] uppercase tracking-tight text-center mb-16">
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Brand Strategy & Identity", icon: "path1", link: "/services" },
              { title: "Digital Product & UX/UI", icon: "path2", link: "/services" },
              { title: "Web & Technical Engineering", icon: "path3", link: "/services" },
              { title: "Growth & Performance", icon: "path4", link: "/services" }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="group bg-[#121212] rounded-2xl p-8 border border-white/5 hover:border-[#E31837]/30 hover:bg-[#1a1a1a] transition-all duration-500 cursor-pointer flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-full bg-[#E31837]/10 flex items-center justify-center mb-6 text-[#E31837] group-hover:scale-110 transition-transform">
                   <div className="w-6 h-6 border-2 border-current rounded-sm"></div>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">{service.title}</h3>
                <div className="mt-auto">
                  <span className="text-[#E31837] text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore <span className="text-xl">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Client Marquee */}
      <section className="py-24 bg-[#121212] overflow-hidden border-t border-b border-white/5">
        <div className="text-center mb-12">
          <span className="text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Trusted by Industry Leaders</span>
        </div>
        <div className="flex w-max items-center animate-[scroll_40s_linear_infinite] gap-16 md:gap-32 px-16 hover:animate-[scroll_40s_linear_infinite_paused]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="text-white/30 text-3xl font-bold uppercase tracking-widest hover:text-[#E31837] transition-colors cursor-pointer">
              Partner {i}
            </div>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={`dup-${i}`} className="text-white/30 text-3xl font-bold uppercase tracking-widest hover:text-[#E31837] transition-colors cursor-pointer">
              Partner {i}
            </div>
          ))}
        </div>
      </section>

      {/* Our Thesis */}
      <section className="py-32 px-6 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-saans font-light text-[3rem] text-white mb-8"
          >
            Our Thesis
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-white/70 font-light leading-relaxed"
          >
            In a sea of digital noise, <span className="text-[#E31837] font-semibold">good design isn't enough</span>. To dominate your market, you need a radical experience that fundamentally alters how your customers perceive value. We exist to build that unfair advantage.
          </motion.p>
        </div>
      </section>

      {/* The Proof */}
      <section className="py-32 px-6 md:px-16 bg-[#121212] border-t border-b border-white/5">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#E31837] uppercase tracking-widest text-sm font-bold mb-4 block">The Proof</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Results that compound.</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-lg">
              We don't just deliver beautiful interfaces. We engineer growth mechanisms that have directly contributed to our partners reaching billion-dollar valuations and successful acquisitions.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-semibold text-white mb-2">300%</div>
                <div className="text-sm text-white/50">Average Conversion Lift</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-white mb-2">$2B+</div>
                <div className="text-sm text-white/50">Capital Raised by Partners</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:aspect-[4/3] bg-[#1a1a1a] rounded-3xl relative overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-2xl font-semibold">Proof Visual</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-32 px-6 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-[1550px] mx-auto">
          <h2 className="text-[3rem] font-light text-white text-center mb-24">The Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#E31837]/30 to-transparent"></div>
            {[
              { num: "01", title: "Discover & Define", desc: "We immerse ourselves in your market, audience, and mechanics to uncover the core strategic narrative." },
              { num: "02", title: "Design & Prototype", desc: "We translate strategy into radical visual systems and intuitive user experiences that command attention." },
              { num: "03", title: "Develop & Scale", desc: "We build robust, scalable digital architectures engineered for high performance and continuous growth." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-[#121212] p-10 rounded-3xl border border-white/5 hover:border-[#E31837]/50 transition-colors duration-300"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0a0a0a] border border-[#E31837] text-[#E31837] rounded-full flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
                <h3 className="text-2xl text-white font-semibold mb-4 text-center mt-4">{step.title}</h3>
                <p className="text-white/60 text-center leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-32 px-6 md:px-16 bg-[#121212]">
        <div className="max-w-[1550px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-[3rem] font-light text-white">Our Work</h2>
            <button onClick={() => navigate('/work')} className="text-[#E31837] hover:text-white transition-colors flex items-center gap-2 mb-4 font-semibold">
              View All Projects <span>→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[4/3] bg-[#1a1a1a] rounded-2xl overflow-hidden relative border border-white/5 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E31837]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                </div>
                <h3 className="text-3xl text-white font-semibold mb-2 group-hover:text-[#E31837] transition-colors">Project Alpha {i}</h3>
                <p className="text-white/50 text-lg">Digital Product / Brand Identity</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-16 bg-[#0a0a0a]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[3rem] font-light text-white text-center mb-16">Questions?</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="bg-[#121212] border border-white/5 rounded-2xl p-6 cursor-pointer hover:border-[#E31837]/30 transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-white font-medium">{faq.q}</h3>
                  <span className={`text-[#E31837] text-2xl transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`}>+</span>
                </div>
                <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-6 text-white/60 leading-relaxed">{faq.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Chat */}
      <section className="py-40 px-6 md:px-16 bg-[#E31837] relative overflow-hidden text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-[4rem] md:text-[6rem] font-saans font-bold text-white leading-none tracking-tight mb-8">
            Let's build <br/> something radical.
          </h2>
          <button onClick={() => navigate('/connect')} className="bg-white text-[#E31837] px-10 py-5 rounded-full text-xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Start a Project
          </button>
        </motion.div>
      </section>

    </div>
  );
}

export default Home;
