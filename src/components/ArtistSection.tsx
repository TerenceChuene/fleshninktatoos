
import { motion } from 'framer-motion';
import { CardContent } from '@/components/ui/card';
import { FaInstagram, FaEye } from 'react-icons/fa';
import { artistsData } from '@/config/artistData';

const LogoCircle = ({ className = '' }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" as const }}
    className={`h-32 w-32 md:h-48 md:w-48 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-4 border-[#e8a43a]/30 bg-[#0a0a0a] ${className}`} 
  />
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const ArtistSection = () => {
  return (
    <section id="artists" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/imgs/bg-2.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      {/* Floating accent orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-40 h-40 bg-[#e8a43a]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-60 h-60 bg-[#e8a43a]/5 rounded-full blur-3xl"
      />

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/4 w-24 h-px bg-gradient-to-r from-[#e8a43a]/40 to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-24 h-px bg-gradient-to-l from-[#e8a43a]/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between mb-20"
        >
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#e8a43a] text-sm uppercase tracking-[0.3em] mb-4"
            >
              Our Team
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-[#f5f5f5] leading-none tracking-tight"
            >
              <span className="text-gradient-amber">MEET OUR</span>
              <br />
              <span className="text-[#f5f5f5]">ARTISTS</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 w-32 bg-gradient-to-r from-[#e8a43a] to-[#e8a43a]/50 mt-6 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-lg text-[#a0a0a0] max-w-md leading-relaxed"
            >
              Our talented artists bring your vision to life with precision, creativity, and years of experience in the craft.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <LogoCircle />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-[#e8a43a]/20 rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artistsData.map((artist) => (
            <motion.div
              key={artist.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4 }
              }}
              className="group relative transition-all duration-500"
            >
              {/* Glow border on hover */}
              <div className="absolute -inset-px bg-gradient-to-b from-[#e8a43a]/50 via-[#e8a43a]/20 to-[#e8a43a]/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              {/* Glass morphism card */}
              <div className="relative bg-[#0a0a0a] border border-[#e8a43a]/20 rounded-lg overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8a43a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social media icon */}
                <motion.a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 left-4 z-20 text-[#e8a43a]/60 hover:text-[#e8a43a] text-xl transition-colors duration-300 bg-[#050505]/50 p-2 rounded-full backdrop-blur-sm border border-[#e8a43a]/20 hover:border-[#e8a43a]"
                >
                  <FaInstagram />
                </motion.a>

                {/* Artist image with overlay */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  
                  {/* Floating view profile button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#e8a43a] p-4 rounded-full shadow-[0_0_30px_rgba(232,164,58,0.4)]"
                    >
                      <FaEye className="text-[#050505] text-2xl" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <CardContent className="p-6 relative">
                  <motion.h3 
                    className="text-2xl font-bold uppercase text-[#f5f5f5] mb-2 tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {artist.name}
                  </motion.h3>
                  <p className="text-sm font-medium uppercase text-[#e8a43a] tracking-[0.2em] mb-4">
                    {artist.specialty}
                  </p>
                  <p className="text-[#666666] text-sm mb-6 line-clamp-2">
                    {artist.description.substring(0, 80) || 'Talented tattoo artist specializing in unique designs.'}
                  </p>
                  
                  {/* CTA Button */}
                  <a href={`/artist/${artist.id}`}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(232, 164, 58, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 bg-transparent border-2 border-[#e8a43a] text-[#e8a43a] font-bold uppercase text-xs tracking-widest rounded-none hover:bg-[#e8a43a] hover:text-[#050505] transition-all duration-300"
                    >
                      View Portfolio
                    </motion.button>
                  </a>
                </CardContent>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistSection;
