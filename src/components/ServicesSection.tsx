import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { IconComponents, IconComponents2, IconComponents3} from '@/components/ui/icons';


const services = [
  {
    id: 1,
    title: 'Custom Tattoos',
    description: 'Personalized designs created specifically for you, reflecting your ideas and vision.',
    icon: IconComponents.TattooMachine,
    cover: '/web/bg4.webp',
  },
  {
    id: 2,
    title: 'Cover-Ups',
    description: 'Transform existing tattoos with creative solutions that seamlessly integrate new designs.',
    icon: IconComponents2.Scissors,
    cover: '/web/pic-2.webp',
  },
  {
    id: 3,
    title: 'Touch-Ups',
    description: 'Refresh and revitalize your existing tattoos to maintain their vibrant appearance.',
    icon: IconComponents3.PenTool,
    cover: '/web/bg-image-1.webp',
  },
];

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

const cardVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const ServicesSection = () => {
  return (
    <section id='services' className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/web/bg-1.webp')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      {/* Floating accent orbs */}
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 w-40 h-40 bg-[#e8a43a]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, 80, 0],
          y: [0, -60, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-20 w-32 h-32 bg-[#e8a43a]/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
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
            What We Offer
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-[#f5f5f5] leading-none tracking-tight relative mb-6"
          >
            <span className="text-gradient-amber">OUR</span>
            <br />
            <span className="text-[#f5f5f5]">SERVICES</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-48 bg-gradient-to-r from-[#e8a43a] to-[#e8a43a]/50"
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-[#a0a0a0] max-w-2xl mx-auto"
          >
            Professional tattoo services delivered with precision, creativity, and care in the heart of Pretoria.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          
          {/* Left: Service Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card
                  className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20"
                  style={{
                    backgroundImage: `url(${service.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <CardContent className="relative z-10 p-8">
                    <div className="flex items-start space-x-6">
                      {/* Animated Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="flex-shrink-0 w-16 h-16 bg-green-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-green-400/30 group-hover:bg-green-500/30 transition-colors duration-300"
                      >
                        <service.icon className="h-10 w-10 text-green-400 group-hover:text-green-300 transition-colors" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-3 deadwood-font uppercase tracking-wider"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          {service.title}
                        </motion.h3>
                        <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-green-400/0 group-hover:border-green-400/50 transition-all duration-500"
                      whileHover={{
                        boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Studio Info */}
          <motion.div 
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right relative"
          >
            {/* Floating Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mb-8"
            >
              <div className="h-32 w-32 lg:h-48 lg:w-48 bg-[url('/imgs/logo-3.png')] bg-cover bg-center rounded-full border-4 bg-white border-white/30 backdrop-blur-sm shadow-2xl" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-green-400/30 rounded-full"
              />
              {/* Pulse effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 border-2 border-green-400/20 rounded-full"
              />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white mb-8 deadwood-font leading-tight"
            >
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                PROUDLY
              </span>
              <br />
              <span className="text-white">
                SOUTH AFRICAN
              </span>
              <br />
              <span className="text-sm font-normal text-gray-300 normal-case tracking-wide">
                TATTOO STUDIO IN PRETORIA
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0" />
              <p className="text-white text-base lg:text-lg leading-relaxed max-w-lg p-6 rounded-2xl">
                <span className="text-green-400 font-semibold">Rooted in the heart of Pretoria</span>, our studio celebrates local creativity and cultural expression through the art of tattooing. We are a proudly South African-owned business offering a safe, clean, and professional space where your ideas come to life.
              </p>
            </motion.div>
<a href="/docs/Aftercare FNIT.pdf" download>
  <motion.button
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold uppercase text-sm rounded-full hover:bg-white/15 transition-all duration-300 shadow-lg"
  >
    Download Aftercare Instructions
  </motion.button>
</a>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex space-x-3 mt-8"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.4 
                  }}
                  className="w-4 h-4 bg-green-400 rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative wave */}
       <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-0"
        >
          <svg width="300" height="80" viewBox="0 0 300 80" className="text-green-400">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.2 }}
              d="M20 40 Q75 15 150 40 Q225 65 280 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
              d="M20 50 Q75 25 150 50 Q225 75 280 50"
              stroke="currentColor"
              strokeWidth="4.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
              d="M20 50 Q75 25 150 50 Q225 75 280 50"
              stroke="currentColor"
              strokeWidth="6.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.2"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
