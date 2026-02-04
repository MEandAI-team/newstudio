import { motion } from 'motion/react';
import { Award, Calendar, MapPin } from 'lucide-react';

const awards = [
  {
    year: '2025',
    title: 'International Photography Awards',
    category: 'Gold - Editorial Photography',
    organization: 'IPA',
  },
  {
    year: '2024',
    title: 'Sony World Photography Awards',
    category: 'Finalist - Professional Competition',
    organization: 'World Photography Organisation',
  },
  {
    year: '2024',
    title: 'PDN Photo Annual',
    category: 'Winner - Fashion & Beauty',
    organization: 'Photo District News',
  },
  {
    year: '2023',
    title: 'Lucie Awards',
    category: 'Honorable Mention - Documentary',
    organization: 'Lucie Foundation',
  },
];

const exhibitions = [
  {
    title: 'Shadows & Light: Urban Narratives',
    venue: 'Museum of Contemporary Photography',
    location: 'New York, NY',
    dates: 'March 15 - May 20, 2026',
    type: 'Solo Exhibition',
  },
  {
    title: 'The New Portraiture',
    venue: 'Saatchi Gallery',
    location: 'London, UK',
    dates: 'January 8 - February 14, 2026',
    type: 'Group Exhibition',
  },
  {
    title: 'Film Renaissance',
    venue: 'Tokyo Metropolitan Museum',
    location: 'Tokyo, Japan',
    dates: 'November 2025',
    type: 'Group Exhibition',
  },
];

export function ExhibitionAwards() {
  return (
    <section className="bg-black py-32 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-[#D4AF37] rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-[#D4AF37]" />
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Recognition Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-4">
            Recognition
          </p>
          <h2
            className="text-6xl md:text-8xl text-white"
            style={{ fontFamily: 'serif' }}
          >
            Awards & Exhibitions
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Awards Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Award className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3
                className="text-4xl text-white mb-4"
                style={{ fontFamily: 'serif' }}
              >
                Honors
              </h3>
              <p className="text-white/60 text-lg">
                International recognition for excellence in photography
              </p>
            </motion.div>

            <div className="space-y-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-[#D4AF37]/30 pl-8 hover:border-[#D4AF37] transition-colors duration-300"
                  data-cursor-hover
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[#D4AF37] text-2xl font-light">
                      {award.year}
                    </span>
                  </div>
                  <h4 className="text-white text-xl mb-2">{award.title}</h4>
                  <p className="text-white/70 mb-1">{award.category}</p>
                  <p className="text-white/50 text-sm">{award.organization}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Exhibitions Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Calendar className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3
                className="text-4xl text-white mb-4"
                style={{ fontFamily: 'serif' }}
              >
                Exhibitions
              </h3>
              <p className="text-white/60 text-lg">
                Current and upcoming gallery showings worldwide
              </p>
            </motion.div>

            <div className="space-y-10">
              {exhibitions.map((exhibition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                  data-cursor-hover
                >
                  <div className="bg-[#0A0A0A] p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs tracking-wider">
                        {exhibition.type}
                      </span>
                    </div>
                    
                    <h4 className="text-white text-2xl mb-4 group-hover:text-[#D4AF37] transition-colors">
                      {exhibition.title}
                    </h4>
                    
                    <div className="space-y-2 text-white/70">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                        <span>{exhibition.venue}</span>
                      </div>
                      <p className="pl-6 text-sm text-white/50">
                        {exhibition.location}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-sm">{exhibition.dates}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Press Mention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {['Vogue', 'National Geographic', 'The New York Times', 'Aperture', 'British Journal of Photography'].map((publication) => (
              <span
                key={publication}
                className="text-white/30 text-2xl tracking-wider hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: 'serif' }}
                data-cursor-hover
              >
                {publication}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
