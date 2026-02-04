import { motion } from 'motion/react';
import { Camera, Film, Aperture, Cpu } from 'lucide-react';

const equipment = [
  {
    icon: Camera,
    name: 'Primary Bodies',
    items: ['Leica M11', 'Canon EOS R5', 'Hasselblad 907X'],
  },
  {
    icon: Aperture,
    name: 'Lenses',
    items: ['Zeiss 50mm f/1.4', 'Canon RF 85mm f/1.2', 'Voigtländer 35mm f/1.4'],
  },
  {
    icon: Film,
    name: 'Film Stock',
    items: ['Kodak Portra 400', 'Ilford HP5 Plus', 'Cinestill 800T'],
  },
  {
    icon: Cpu,
    name: 'Post-Production',
    items: ['Capture One Pro', 'Adobe Creative Suite', 'DaVinci Resolve'],
  },
];

export function BehindTheScenes() {
  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent" />

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-4">
            The Process
          </p>
          <h2
            className="text-6xl md:text-8xl text-white mb-6"
            style={{ fontFamily: 'serif' }}
          >
            Behind the Lens
          </h2>
          <p className="text-white/60 text-xl max-w-3xl leading-relaxed">
            A glimpse into the tools, techniques, and philosophy that shape each photograph
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] group"
            data-cursor-hover
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1588419344934-13f50aa8fc5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2OTk2NzM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Camera Equipment"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3
              className="text-4xl md:text-5xl text-white mb-8"
              style={{ fontFamily: 'serif' }}
            >
              Photography as
              <br />
              <span className="text-[#D4AF37]">Cinema</span>
            </h3>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                I approach every shoot with a cinematic mindset—treating each frame as 
                a scene in a larger narrative. This philosophy extends from pre-production 
                planning to the final color grade.
              </p>
              <p>
                Working primarily with natural light and vintage glass, I seek to create 
                images with depth, texture, and a timeless quality that resonates beyond 
                trends.
              </p>
              <p>
                The process is intentional: slow, considered, and deeply personal. Whether 
                shooting digital or film, the goal remains the same—to capture authentic 
                moments that move people.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Equipment Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-12"
            style={{ fontFamily: 'serif' }}
          >
            Essential Kit
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors duration-300"
                data-cursor-hover
              >
                <category.icon className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h4 className="text-white text-xl mb-4 tracking-wide">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-white/60 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workspace Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 h-[500px] relative group"
          data-cursor-hover
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 opacity-60" />
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1654870574819-ee447f65112d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njk5NjczNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Studio Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <p className="text-white/80 text-2xl tracking-[0.3em] uppercase">
              The Workspace
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
