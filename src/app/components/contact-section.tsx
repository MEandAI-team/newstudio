import { motion } from 'motion/react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: '@studio.lens', href: '#' },
  { icon: Twitter, label: '@studiolens', href: '#' },
  { icon: Linkedin, label: 'Studio Lens', href: '#' },
];

export function ContactSection() {
  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
      
      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent origin-center"
      />

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-6">
              Let's Create
            </p>
            <h2
              className="text-6xl md:text-8xl text-white mb-8"
              style={{ fontFamily: 'serif' }}
            >
              Get in Touch
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Available for editorial commissions, commercial projects, and gallery collaborations worldwide
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden border border-white/10 p-12 hover:border-[#D4AF37]/50 transition-all duration-500"
              data-cursor-hover
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <Mail className="w-12 h-12 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white text-2xl mb-3">Email</h3>
                <p className="text-white/60 mb-6">For all inquiries and bookings</p>
                <a
                  href="mailto:hello@studiolens.com"
                  className="text-[#D4AF37] text-lg hover:text-[#FFD700] transition-colors"
                >
                  hello@studiolens.com
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden border border-white/10 p-12 hover:border-[#D4AF37]/50 transition-all duration-500"
              data-cursor-hover
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-[#D4AF37] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#D4AF37] text-xl">◎</span>
                </div>
                <h3 className="text-white text-2xl mb-3">Studio</h3>
                <p className="text-white/60 mb-6">Available Mon-Fri, 9AM-6PM EST</p>
                <a
                  href="tel:+12125551234"
                  className="text-[#D4AF37] text-lg hover:text-[#FFD700] transition-colors"
                >
                  +1 (212) 555-1234
                </a>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-8">
              Connect
            </p>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center gap-3"
                  data-cursor-hover
                >
                  <div className="w-16 h-16 flex items-center justify-center border border-white/20 group-hover:border-[#D4AF37] transition-all duration-300">
                    <social.icon className="w-6 h-6 text-white/60 group-hover:text-[#D4AF37] transition-colors duration-300" />
                  </div>
                  <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm">
                Typical response time: 24-48 hours
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 pt-12 border-t border-white/10"
      >
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
            <p>© 2026 Studio Lens. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#D4AF37] transition-colors" data-cursor-hover>
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors" data-cursor-hover>
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
