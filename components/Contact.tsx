import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Have a project in mind? Looking for a collaborative partner? I'm just a message away.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">

          <RevealOnScroll delay={100}>
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
                    <p className="text-slate-400 mb-2 text-sm">For projects and inquiries</p>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium text-white hover:text-blue-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-violet-500/10 text-violet-500 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Me</h3>
                    <p className="text-slate-400 mb-2 text-sm">Mon-Fri from 9am to 6pm</p>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-medium text-white hover:text-violet-400 transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-slate-400 mb-2 text-sm">Currently based in</p>
                    <p className="text-lg font-medium text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="glass p-8 md:p-10 rounded-3xl shadow-2xl relative border border-white/5">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <MessageSquare size={120} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 flex justify-center items-center gap-2">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Contact;