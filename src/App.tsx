import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Mail, Phone, MapPin, Star, Sparkles, Heart, Camera, ChevronDown, Quote } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    { id: 'bridal', name: 'Bridal Makeup', color: '#e0bfb8', desc: 'Flawless, long-lasting beauty for your special day.' },
    { id: 'party', name: 'Party Glam', color: '#b76e79', desc: 'Stand out with a stunning, customized party look.' },
    { id: 'editorial', name: 'Editorial', color: '#806262', desc: 'High-fashion, creative makeup for photoshoots.' },
    { id: 'hair', name: 'Hair Styling', color: '#4f3a3a', desc: 'Elegant updos and flowing styles to match your look.' },
  ];

  const portfolio = [
    { id: 1, category: 'bridal', url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'party', url: 'https://images.unsplash.com/photo-1516975080661-46b048595f5b?auto=format&fit=crop&w=800&q=80' },
    { id: 3, category: 'editorial', url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'bridal', url: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'party', url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'editorial', url: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredPortfolio = activeTab === 'all' ? portfolio : portfolio.filter(item => item.category === activeTab);

  const masterpieces = [
    { 
      id: 1, 
      category: 'Bridal',
      title: 'The Royal Indian Bride', 
      desc: 'A timeless look featuring traditional reds, flawless base, and intricate eye makeup that honors cultural heritage while highlighting natural beauty.', 
      img: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1200&q=80', 
      bg: '#f5f0f0' 
    },
    { 
      id: 2, 
      category: 'Editorial',
      title: 'Glass Skin Glamour', 
      desc: 'Ultra-dewy, luminous skin paired with soft, monochromatic tones. Perfect for high-fashion shoots and modern minimalist brides.', 
      img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80', 
      bg: '#e8dfdf' 
    },
    { 
      id: 3, 
      category: 'Party',
      title: 'Midnight Sparkle', 
      desc: 'Bold smokey eyes with a touch of glitter, paired with a nude lip. Designed to make you the center of attention at any evening event.', 
      img: 'https://images.unsplash.com/photo-1516975080661-46b048595f5b?auto=format&fit=crop&w=1200&q=80', 
      bg: '#d5c5c5' 
    },
  ];

  const testimonials = [
    { id: 1, name: 'Priya Sharma', role: 'Bride', text: 'Kavita made me look like an absolute queen on my wedding day. The makeup stayed flawless for 14 hours!' },
    { id: 2, name: 'Riya Kapoor', role: 'Fashion Model', text: 'Her understanding of lighting and editorial looks is unmatched. Always a pleasure working with her.' },
    { id: 3, name: 'Anjali Desai', role: 'Party Client', text: 'I received so many compliments! She perfectly understood the subtle glam look I was going for.' },
  ];

  return (
    <div className="min-h-screen selection:bg-rose-200 selection:text-rose-900">
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl glass rounded-full px-6 py-3 flex justify-between items-center">
        <div className="font-serif text-xl font-bold tracking-widest text-skin-900">KAVITA</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-skin-800">
          <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
          <a href="#services" className="hover:text-rose-600 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-rose-600 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
        </div>
        <button className="neu-convex px-5 py-2 rounded-full text-sm font-semibold text-skin-900 hover:neu-pressed transition-all">
          Book Now
        </button>
      </nav>

      {/* Hero Section - Editorial & Glassmorphism */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Beautiful makeup" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skin-900/30 via-transparent to-skin-900/60 mix-blend-multiply"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl p-10 md:p-16 rounded-[2.5rem] max-w-3xl text-center mx-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-skin-900/30 mb-8">
            <Sparkles className="w-4 h-4 text-skin-900" />
            <span className="text-xs font-bold tracking-widest uppercase text-skin-900">Master Makeup Artist</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-skin-900 mb-2 tracking-tighter leading-none" style={{ textShadow: '0 4px 20px rgba(255,255,255,0.6)' }}>
            Kavita
          </h1>
          <h2 className="text-4xl md:text-6xl font-serif italic text-skin-800 mb-6 tracking-tight">
            Makeovers
          </h2>
          <p className="text-lg md:text-xl text-skin-900 mb-10 font-medium max-w-lg mx-auto leading-relaxed">
            Revealing your <span className="italic font-serif">most beautiful</span> self with 15+ years of artistry and elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-skin-900 text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              View Portfolio
            </button>
            <button className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-full font-medium text-skin-900 hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Book Consultation
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white"
        >
          <ChevronDown className="w-8 h-8 opacity-80" />
        </motion.div>
      </section>

      {/* Infinite Marquee Section */}
      <div className="w-full bg-skin-900 text-skin-200 py-4 overflow-hidden flex whitespace-nowrap border-y border-skin-700">
        <div className="flex animate-marquee items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center text-sm md:text-base font-medium tracking-widest uppercase">
              <span className="mx-8">Bridal Makeup</span>
              <Star className="w-3 h-3 text-rose-gold" />
              <span className="mx-8">Editorial & Fashion</span>
              <Star className="w-3 h-3 text-rose-gold" />
              <span className="mx-8">Party Glam</span>
              <Star className="w-3 h-3 text-rose-gold" />
              <span className="mx-8">Airbrush Flawless</span>
              <Star className="w-3 h-3 text-rose-gold" />
            </div>
          ))}
        </div>
      </div>

      {/* About Section - Neumorphism */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-skin-900 mb-4">The Artist Behind the Brush</h2>
          <div className="w-24 h-1 bg-skin-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="neu-flat p-4 rounded-3xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1512496015851-a1c8216d1202?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Makeup Brushes" 
              className="w-full h-[400px] object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="neu-convex p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Star className="text-yellow-500 fill-yellow-500" /> 15+ Years Experience
              </h3>
              <p className="text-skin-800 leading-relaxed">
                With over a decade and a half in the beauty industry, Kavita has perfected the art of enhancing natural beauty. Her signature style blends modern trends with timeless elegance, ensuring every client feels confident and radiant.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="neu-concave p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-skin-900 mb-2">500+</div>
                <div className="text-sm text-skin-700 uppercase tracking-wider">Happy Brides</div>
              </div>
              <div className="neu-concave p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-skin-900 mb-2">100%</div>
                <div className="text-sm text-skin-700 uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Skeuomorphism (Makeup Palette) */}
      <section id="services" className="py-24 bg-[#1a1a1a] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Signature Services</h2>
            <p className="text-gray-400">Choose your perfect shade of glamour</p>
          </div>

          {/* The Makeup Palette */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="skeuo-leather p-8 md:p-12 rounded-[2rem] max-w-4xl mx-auto"
          >
            {/* Palette Mirror (Glassmorphism inside Skeuomorphism) */}
            <div className="w-full h-32 md:h-48 mb-10 rounded-xl glass-dark relative overflow-hidden flex items-center justify-center border-t border-white/20 border-b border-black/50">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
              <div className="text-white/30 font-serif text-2xl tracking-[0.3em] uppercase">Kavita Pro Palette</div>
            </div>

            {/* Palette Pans */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {services.map((service, index) => (
                <div key={service.id} className="flex flex-col items-center group">
                  {/* The Pan */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full skeuo-pan bg-[#222] flex items-center justify-center p-2 mb-6 transition-transform group-hover:scale-105">
                    {/* The Powder */}
                    <div 
                      className="w-full h-full rounded-full skeuo-powder relative overflow-hidden"
                      style={{ backgroundColor: service.color }}
                    >
                      {/* Powder Texture */}
                      <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
                      {/* Highlight */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full"></div>
                    </div>
                  </div>
                  {/* Label */}
                  <h4 className="text-white font-medium text-lg mb-2 skeuo-gold px-4 py-1 rounded-full text-sm">{service.name}</h4>
                  <p className="text-gray-400 text-sm text-center px-2">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Looks - Horizontal Scroll */}
      <section id="featured" className="py-32 px-0 max-w-[100vw] overflow-hidden relative">
        <div className="text-center mb-16 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-skin-900 mb-4">Signature Looks</h2>
          <div className="w-24 h-1 bg-skin-400 mx-auto rounded-full mb-6"></div>
          <p className="text-skin-800">Swipe to explore the masterpieces</p>
        </div>

        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-12 pb-12 px-6 md:px-[10vw] hide-scrollbar" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {masterpieces.map((item, index) => (
            <div
              key={item.id}
              className="flex-none w-[90vw] md:w-[800px] lg:w-[1000px] snap-center rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row border border-white/60"
              style={{
                backgroundColor: item.bg,
              }}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
                <div className="bg-white/40 backdrop-blur-md inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 w-max text-skin-900 border border-white/50">
                  {item.category}
                </div>
                <h3 className="text-3xl md:text-5xl font-serif font-bold text-skin-900 mb-4 md:mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-skin-800 mb-6 md:mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <button className="neu-convex w-max px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-skin-900 hover:neu-pressed transition-all">
                  Explore Look
                </button>
              </div>
              
              {/* Image */}
              <div className="w-full md:w-1/2 h-[350px] md:h-auto relative">
                <div 
                  className="absolute inset-0 z-10 hidden md:block"
                  style={{ background: `linear-gradient(to right, ${item.bg} 0%, transparent 20%)` }}
                ></div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section - Glassmorphism & Neumorphism Hybrid */}
      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-skin-900 mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-skin-400 mx-auto rounded-full mb-8"></div>
          
          {/* Neumorphic Tabs */}
          <div className="inline-flex neu-pressed p-2 rounded-full gap-2">
            {['all', 'bridal', 'party', 'editorial'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  activeTab === tab 
                    ? 'neu-convex text-skin-900' 
                    : 'text-skin-600 hover:text-skin-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredPortfolio.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className={`group relative rounded-[2rem] overflow-hidden neu-flat p-3 ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src={item.url} 
                  alt={`${item.category} makeup`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Glassmorphic overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="glass px-6 py-3 rounded-full text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Heart className="w-4 h-4" /> View Look
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-skin-900 mb-4">Client Love</h2>
          <div className="w-24 h-1 bg-skin-400 mx-auto rounded-full mb-6"></div>
          <p className="text-skin-800">What they say about the experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="neu-convex p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-skin-400 opacity-50" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-skin-800 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-skin-900">{testimonial.name}</h4>
                <p className="text-sm text-skin-600 uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Neumorphism */}
      <section id="contact" className="py-24 px-6 bg-skin-300/30">
        <div className="max-w-5xl mx-auto">
          <div className="neu-flat rounded-[3rem] p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-serif font-bold text-skin-900 mb-6">Let's Create Magic</h2>
                <p className="text-skin-800 mb-10 leading-relaxed">
                  Ready to look your absolute best? Book an appointment or reach out for inquiries. I'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 neu-convex rounded-full flex items-center justify-center text-rose-700">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-skin-600">Call/WhatsApp</div>
                      <div className="font-medium text-skin-900">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 neu-convex rounded-full flex items-center justify-center text-rose-700">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-skin-600">Email</div>
                      <div className="font-medium text-skin-900">hello@kavitamakeovers.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 neu-convex rounded-full flex items-center justify-center text-rose-700">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-skin-600">Studio</div>
                      <div className="font-medium text-skin-900">New Delhi, India</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-10">
                  <button className="w-12 h-12 neu-convex rounded-full flex items-center justify-center text-skin-800 hover:text-rose-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 neu-convex rounded-full flex items-center justify-center text-skin-800 hover:text-rose-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Neumorphic Form */}
              <div className="neu-pressed rounded-3xl p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-skin-800 mb-2 ml-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full neu-flat bg-transparent border-none rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-400/50 text-skin-900"
                      placeholder="Your beautiful name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-skin-800 mb-2 ml-2">Service Required</label>
                    <select className="w-full neu-flat bg-transparent border-none rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-400/50 text-skin-900 appearance-none">
                      <option>Bridal Makeup</option>
                      <option>Party Makeup</option>
                      <option>Editorial/Photoshoot</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-skin-800 mb-2 ml-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full neu-flat bg-transparent border-none rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-400/50 text-skin-900 resize-none"
                      placeholder="Tell me about your event..."
                    ></textarea>
                  </div>
                  <button className="w-full neu-convex py-4 rounded-2xl font-bold text-skin-900 hover:neu-pressed transition-all flex items-center justify-center gap-2">
                    Send Message <Sparkles className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-skin-600 text-sm">
        <p>© {new Date().getFullYear()} Kavita Makeovers. All rights reserved.</p>
      </footer>
    </div>
  );
}
