import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="bg-black py-32 overflow-hidden">
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

      <motion.div style={{ x }} className="flex gap-8 px-8">
        {[...projects, ...projects].map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      data-cursor-hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-shrink-0 w-[600px] h-[700px] group cursor-pointer"
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
