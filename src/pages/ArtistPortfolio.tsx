import { useParams, Link } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaArrowLeft, FaInstagram, FaEye } from 'react-icons/fa';
import { artistsData } from '@/config/artistData';
import { useState } from 'react';

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

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
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

const ArtistPortfolio = () => {
  const { id } = useParams();
  const artist = artistsData.find((a) => String(a.id) === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!artist) {
    return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* 👇 Add this block here — before your main content */}
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 deadwood-font uppercase"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Artist Not Found
          </motion.h2>
          <p className="text-gray-300 mb-8 text-lg">
            The artist you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <FaArrowLeft />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-black to-slate-800 min-h-screen text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/imgs/bg-2.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ 
          x: [0, 80, 0],
          y: [0, -40, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-40 h-40 bg-green-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/15 transition-all duration-300 shadow-lg"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="font-semibold">Back </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Artist Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          {/* Artist Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <img
              src={artist.image}
              alt={artist.name}
              className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
            />
            {/* Instagram overlay */}
            <motion.a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </motion.a>
          </motion.div>

          {/* Artist Info */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-extrabold mb-4 deadwood-font uppercase tracking-widest relative"
            >
              <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                {artist.name}
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 lg:left-0 h-1 bg-gradient-to-r from-green-400 to-green-600 origin-left w-full"
              />
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl text-green-400 font-semibold mb-6 uppercase tracking-wider"
            >
              {artist.specialty}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mb-8"
            >
             
            </motion.div>
          </div>
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <motion.h3 
            className="text-4xl font-bold mb-12 text-center deadwood-font uppercase tracking-wider relative"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-green-400 to-green-600 origin-center w-32"
            />
          </motion.h3>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artist.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl">
                <CardContent className="p-0 relative">
                  <img
                    src={img}
                    alt={`Tattoo ${idx + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating view icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 shadow-lg"
                    >
                      <FaEye className="text-white text-2xl" />
                    </motion.div>
                  </motion.div>

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

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
                className="w-4 h-4 bg-green-400 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Portfolio piece"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtistPortfolio;
