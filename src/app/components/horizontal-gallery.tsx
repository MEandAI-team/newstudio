import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RemoveScroll } from 'react-remove-scroll';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Urban Shadows',
    category: 'Street Photography',
    image: 'https://images.unsplash.com/photo-1618851554592-32ff329dec8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwbmlnaHR8ZW58MXx8fHwxNzY5OTY3MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Exploring the contrast between light and darkness in metropolitan landscapes',
  },
  {
    id: 2,
    title: 'Editorial Elegance',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1660018322139-0e58555df00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY5OTI4MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'High fashion meets cinematic storytelling in this exclusive series',
  },
  {
    id: 3,
    title: 'Architectural Forms',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1620483474144-23931ab57ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGhvdG9ncmFwaHklMjBibGFjayUyMHdoaXRlfGVufDF8fHx8MTc2OTk2NzM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Geometry and space converge in monochromatic compositions',
  },
  {
    id: 4,
    title: 'Film Chronicles',
    category: 'Analog',
    image: 'https://images.unsplash.com/photo-1622841345591-07927ccaf6af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcGhvdG9ncmFwaHklMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY5OTY3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Timeless moments captured on 35mm film',
  },
  {
    id: 5,
    title: 'Human Stories',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1663043188237-01565028db93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2OTk2NzM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Authentic narratives from communities around the world',
  },
];

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-32 relative z-10">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="mb-20 px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl text-white mb-4"
          style={{ fontFamily: 'serif' }}
        >
          Featured Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#D4AF37] text-xl tracking-wider"
        >
          A CURATED SELECTION
        </motion.p>
      </div>

      {/* Infinite Scroll Container */}
      <div
        className="w-full overflow-hidden"
      >
        <div
          className="flex w-max"
          style={{
            animation: 'marquee 40s linear infinite',
            animationPlayState: selectedProject ? 'paused' : 'running',
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div key={`${project.id}-${index}`} className="mr-8 flex-shrink-0">
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hint Text */}
      <div className="mt-8 text-center">
        <p className="text-white/40 text-sm uppercase tracking-widest animate-pulse">
          Click an image to view details
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <RemoveScroll>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="relative bg-[#111] w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-sm flex flex-col md:flex-row shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>

                <div className="w-full md:w-2/3 h-[40vh] md:h-auto overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-[#111]">
                  <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-white text-4xl md:text-5xl mb-6" style={{ fontFamily: 'serif' }}>
                    {selectedProject.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-col gap-4">
                    <p className="text-white/50 italic text-sm">
                      "Photography helps people to see." – Berenice Abbott
                    </p>
                    <button className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all uppercase tracking-widest text-sm w-fit">
                      View Full Project
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: typeof projects[0], onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      data-cursor-hover
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-[600px] h-[700px] group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex flex-col justify-end p-12"
        >
          <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-3">
            {project.category}
          </p>
          <h3 className="text-white text-5xl mb-4" style={{ fontFamily: 'serif' }}>
            {project.title}
          </h3>
          <p className="text-white/70 text-lg max-w-md">
            {project.description}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-white/90 tracking-wider">VIEW PROJECT</span>
            <motion.div
              animate={{ x: isHovered ? 10 : 0 }}
              className="w-12 h-[1px] bg-[#D4AF37]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
