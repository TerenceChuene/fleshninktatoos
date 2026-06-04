import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const flipControls = useAnimation();

  const images = ["/imgs/bg4.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => console.error("Error playing video:", err));
      const timer = setTimeout(() => {
        video.pause();
        video.style.display = "none";
        setShowContent(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [showContent]);

  const playFlip = () => {
    flipControls.start({
      rotateY: [0, 180, 0],
      transition: { duration: 2, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    if (!showContent) return;
    let cleanupFn: (() => void) | undefined;
    async function runAnimations() {
      flipControls.set({ opacity: 0, x: 100 });
      await flipControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" as const },
      });
      playFlip();
      const interval = setInterval(() => { playFlip(); }, 90000);
      return () => clearInterval(interval);
    }
    runAnimations().then((cleanup) => { cleanupFn = cleanup; });
    return () => { if (cleanupFn) cleanupFn(); };
  }, [showContent]);

  useEffect(() => {
    if (!headingRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { playFlip(); }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative">
      <div className="grain-overlay fixed inset-0 pointer-events-none z-50" />
      
      <div className="relative h-screen bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            src="/vids/video-2.mp4"
            className="w-full h-full object-cover"
            muted
            playsInline
            autoPlay
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/80 to-[#050505]/95" />
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#e8a43a]/20" />
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#e8a43a]/20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#e8a43a]/20" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#e8a43a]/20" />
          <motion.div
            animate={{ x: [0, 150, 0], y: [0, -80, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-60 h-60 bg-[#e8a43a]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 100, 0], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-48 h-48 bg-[#e8a43a]/10 rounded-full blur-3xl"
          />
        </div>

        {showContent && (
          <AnimatePresence>
            <motion.div
              key={currentImage}
              className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        )}

        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:px-24"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, x: -100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-20px] rounded-full border border-[#e8a43a]/20"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-10px] rounded-full border border-dashed border-[#e8a43a]/30"
                  />
                  <div className="relative h-64 w-64 lg:h-80 lg:w-80 rounded-full border-2 border-[#e8a43a]/40 bg-[#0a0a0a] shadow-[0_0_60px_rgba(232,164,58,0.15)]">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative h-full w-full bg-[url('/web/logo3.webp')] bg-cover bg-center rounded-full border-4 border-[#e8a43a]/30"
                    />
                  </div>
                </div>
              </motion.div>
              
              <div className="hidden lg:block h-2" />

              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative"
                >
                  <div
                    ref={headingRef}
                    className="flip-container mb-6"
                    style={{ perspective: 1000 }}
                  >
                    <motion.h1
                      animate={flipControls}
                      style={{ transformStyle: "preserve-3d" }}
                      className="deadwood-font text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase leading-none tracking-widest drop-shadow-xl"
                    >
                      <span className="text-gradient-amber block">FLESH-N-INK</span>
                      <span className="text-[#f5f5f5] block mt-2">TATTOO</span>
                      <span className="text-gradient-amber block mt-2">STUDIO</span>
                    </motion.h1>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative mb-8"
                  >
                    <div className="inline-block px-6 py-3 border border-[#e8a43a]/30 bg-[#0a0a0a]/50 backdrop-blur-sm">
                      <p className="text-[#c0c0c0] text-lg sm:text-xl lg:text-2xl font-light tracking-wide">
                        <span className="text-[#e8a43a]">✦</span> Where Art Meets Skin <span className="text-[#e8a43a]">✦</span>
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 mb-8"
                  >
                    <motion.button
                      onClick={() => window.open("https://wa.me/+27814071917", "_blank")}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(232, 164, 58, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-10 py-4 bg-gradient-to-r from-[#e8a43a] to-[#f5c67b] text-[#050505] font-bold uppercase text-sm tracking-widest rounded-none relative overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="flex items-center justify-center gap-3 relative z-10">
                        <FaCalendarAlt className="w-4 h-4" />
                        Book a Session
                      </span>
                    </motion.button>

                    <a href="#gallery">
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(232, 164, 58, 0.15)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-transparent border-2 border-[#e8a43a] text-[#e8a43a] font-bold uppercase text-sm tracking-widest rounded-none hover:bg-[#e8a43a]/10 transition-all duration-300"
                      >
                        View Gallery
                      </motion.button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-8 left-8 lg:right-8 lg:left-auto"
            >
              <div className="hidden lg:flex flex-row lg:flex-col gap-5">
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/fleshninktattoos/", label: "Instagram" },
                  { icon: FaFacebookF, href: "https://www.facebook.com/fleshninktattoos/", label: "Facebook" },
                  { icon: FaWhatsapp, href: "https://wa.me/+27814071917", label: "WhatsApp" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-none bg-[#0a0a0a] border border-[#e8a43a]/30 flex items-center justify-center hover:border-[#e8a43a] hover:shadow-[0_0_20px_rgba(232,164,58,0.3)] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-[#e8a43a]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
            >
              <div className="flex flex-col items-center">
                <span className="text-[#666666] text-xs uppercase tracking-widest mb-2">Scroll</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-6 h-10 border border-[#e8a43a]/30 rounded-full flex justify-center pt-2"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-2 bg-[#e8a43a] rounded-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
