import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#050505] flex flex-col justify-center items-center py-32 px-4 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/web/bg-1.webp')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      {/* Floating accent orbs */}
      <motion.div
        animate={{ 
          x: [0, 120, 0],
          y: [0, -60, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-48 h-48 bg-[#e8a43a]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 80, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 w-40 h-40 bg-[#e8a43a]/5 rounded-full blur-3xl"
      />

      {/* Decorative corner lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#e8a43a]/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#e8a43a]/20" />

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#e8a43a] text-sm uppercase tracking-[0.3em] mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-[#f5f5f5] leading-none tracking-tight relative mb-6"
          >
            <span className="text-gradient-amber">ABOUT</span>
            <br />
            <span className="text-[#f5f5f5]">US</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-[#e8a43a] to-[#e8a43a]/50"
            />
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-16"
        >
          {/* Left: Images */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start relative"
          >
            {/* Studio photo */}
            <motion.div 
              whileHover={{ 
                rotate: 2, 
                scale: 1.03,
                y: -10
              }}
              className="bg-[#0a0a0a] border border-[#e8a43a]/20 rounded-lg shadow-[0_0_60px_rgba(232,164,58,0.1)] w-72 h-80 flex items-center justify-center mb-[-30px] z-10 rotate-2 relative group overflow-hidden"
            >
              <img 
                src="/web/pic-1.webp" 
                alt="Studio" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-[#e8a43a]/30" />
            </motion.div>

            {/* Tattoo work photo */}
            <motion.div 
              whileHover={{ 
                rotate: -2, 
                scale: 1.03,
                y: -5
              }}
              className="bg-[#0a0a0a] border border-[#e8a43a]/20 rounded-lg shadow-[0_0_40px_rgba(232,164,58,0.1)] w-72 h-52 flex items-center justify-center mt-[-20px] -rotate-3 relative z-0 group overflow-hidden"
            >
              <img 
                src="/web/pic-2.webp" 
                alt="Tattoo work" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
              
              {/* Accent pin */}
              <motion.span 
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 left-1/2 -translate-x-1/2"
              >
                <div className="relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#e8a43a" stroke="#050505" strokeWidth="2" />
                    <motion.circle 
                      cx="12" 
                      cy="12" 
                      r="6" 
                      fill="#f5c67b"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                </div>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 flex flex-col justify-center items-start text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase mb-6 leading-tight"
            >
              <span className="text-gradient-amber block">
                Flesh-n-Ink
              </span>
              <span className="text-[#f5f5f5] text-xl sm:text-2xl lg:text-3xl mt-2 block font-bold tracking-wide">
                PRETORIA'S PREMIER TATTOO STUDIO
              </span>
            </motion.h2>

            <motion.h3 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#f5f5f5] text-xl sm:text-2xl lg:text-3xl font-bold uppercase mb-8 leading-relaxed"
            >
              <span className="text-[#e8a43a]">
                Passionately local. Boldly artistic.
              </span>
              <br />
              <span className="text-[#c0c0c0] text-lg">
                Where culture and creativity collide.
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-8"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-[#e8a43a]/10 to-transparent rounded-lg" />
              <p className="text-[#a0a0a0] text-base lg:text-lg leading-relaxed max-w-3xl p-6 rounded-lg border border-[#e8a43a]/10">
                <span className="text-[#e8a43a] font-semibold">Founded in the heart of Pretoria</span>, Flesh-n-Ink is proudly South African and rooted in a deep love for body art. Our studio celebrates local talent, diversity, and self-expression. Each tattoo we create tells a unique story—whether inspired by heritage, modern artistry, or personal journeys.
                <br /><br />
                Our artists bring years of experience and a passion for their craft, ensuring every piece is done with precision, professionalism, and care. More than just ink, we create connections—building a community where every client feels seen, heard, and proud of the art they wear.
              </p>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#e8a43a]/50" />
            <span className="text-[#e8a43a] text-2xl">✦</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#e8a43a]/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 