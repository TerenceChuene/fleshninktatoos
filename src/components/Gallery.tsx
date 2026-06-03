import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const images = [
  { id: 1, src: '/web/pic1.webp' },
  { id: 2, src: '/web/pic2.webp' },
  { id: 3, src: '/web/pic3.webp' },
  { id: 4, src: '/web/pic4.webp' },
  { id: 5, src: '/web/pic5.webp' },
  { id: 6, src: '/web/pic6.webp' },
  { id: 7, src: '/web/pic7.webp' },
  { id: 8, src: '/web/pic8.webp' },
  { id: 9, src: '/web/pic9.webp' },
  { id: 10, src: '/web/pic10.webp' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="gallery">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      {/* Decorative accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8a43a]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8a43a]/30 to-transparent" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 left-20 w-32 h-32 border border-[#e8a43a]/10 rounded-full"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 right-20 w-24 h-24 border border-[#e8a43a]/10 rounded-full"
      />

      {/* Section Header */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase text-[#f5f5f5] leading-none tracking-tight"
          >
            <span className="text-gradient-amber">GALLERY</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-[#e8a43a] to-[#e8a43a]/30 mt-8 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-[#a0a0a0] text-lg max-w-2xl mx-auto"
          >
            Explore our portfolio of stunning tattoos crafted by our talented artists. Each piece tells a unique story.
          </motion.p>
        </motion.div>

        {/* Magazine-style Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              onClick={() => setSelectedImage(image.id)}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              {/* Glow border effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#e8a43a]/40 via-[#e8a43a]/10 to-[#e8a43a]/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card background */}
              <div className="relative bg-[#0a0a0a] border border-[#e8a43a]/20 rounded-lg overflow-hidden">
                {/* Image */}
                <motion.img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 ? 'h-80 md:h-96' : 'h-48 md:h-56'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-[#e8a43a] p-4 rounded-full shadow-[0_0_40px_rgba(232,164,58,0.5)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#050505]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#050505]/80 backdrop-blur-sm border border-[#e8a43a]/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#e8a43a] text-xs font-bold">{String(image.id).padStart(2, '0')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 md:top-8 md:right-8 bg-[#0a0a0a] border border-[#e8a43a]/30 rounded-full p-3 hover:border-[#e8a43a] transition-colors duration-300 z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#e8a43a]"
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

            {/* Image counter */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-4">
              <span className="text-[#e8a43a] text-sm uppercase tracking-widest">
                {String(selectedImage).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
              <div className="w-16 h-px bg-[#e8a43a]/30" />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images.find(img => img.id === selectedImage)?.src}
                alt={`Gallery ${selectedImage}`}
                className="w-full h-auto rounded-lg shadow-[0_0_80px_rgba(232,164,58,0.15)]"
              />
              
              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#050505] to-transparent rounded-b-lg">
                <p className="text-[#e8a43a] text-sm uppercase tracking-widest">Flesh-n-Ink Tattoo Studio</p>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.findIndex(img => img.id === selectedImage);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                setSelectedImage(images[prevIndex].id);
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-[#e8a43a]/30 rounded-full p-4 hover:border-[#e8a43a] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e8a43a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.findIndex(img => img.id === selectedImage);
                const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                setSelectedImage(images[nextIndex].id);
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-[#e8a43a]/30 rounded-full p-4 hover:border-[#e8a43a] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e8a43a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery; 
