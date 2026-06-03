import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@heroui/button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#hero' },
    { name: 'About', path: '/#about' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#e8a43a]/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e8a43a]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div className="flex items-center space-x-4">
            <motion.div
              className="relative h-12 w-12 bg-[url('/web/logo3.webp')] bg-cover bg-center rounded-full border-2 border-[#e8a43a]/40 bg-[#0a0a0a]"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-[#e8a43a]/20 blur-md" />
            </motion.div>
            <motion.div
              className={`text-xl font-bold tracking-wider ${
                scrolled ? 'text-[#f5f5f5]' : 'text-white'
              }`}
            >
              <span className="text-gradient-amber">FLESH-N-INK</span>
              <span className="text-[#666666]"> STUDIO</span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredLink(link.name)}
                onHoverEnd={() => setHoveredLink(null)}
              >
                <a
                  href={link.path}
                  className={`relative font-semibold text-sm uppercase tracking-widest transition-colors duration-300 hover:text-[#e8a43a] ${
                    scrolled ? 'text-[#a0a0a0]' : 'text-white/80'
                  } ${hoveredLink === link.name ? 'text-[#e8a43a]' : ''}`}
                >
                  {link.name}
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="hover-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-[#e8a43a]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => window.open("https://wa.me/+27814071917", "_blank")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(232, 164, 58, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex px-6 py-3 bg-[#e8a43a] text-[#050505] font-bold uppercase text-xs tracking-widest rounded-none hover:bg-[#f5c67b] transition-all duration-300"
          >
            Book Now
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button 
              variant="flat" 
              className="md:hidden p-3 bg-[#0a0a0a] border border-[#e8a43a]/20" 
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-[#e8a43a]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-[#e8a43a]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden pt-4 pb-6 border-t border-[#e8a43a]/10 bg-[#0a0a0a]/95 backdrop-blur-xl"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.path}
                    className="block py-4 px-4 font-semibold text-sm uppercase tracking-wider text-[#a0a0a0] hover:text-[#e8a43a] transition-colors duration-300 border-b border-[#e8a43a]/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.button
                variants={itemVariants}
                onClick={() => {
                  setIsOpen(false);
                  window.open("https://wa.me/+27814071917", "_blank");
                }}
                className="w-full mt-4 mx-4 px-6 py-4 bg-[#e8a43a] text-[#050505] font-bold uppercase text-sm tracking-widest rounded-none hover:bg-[#f5c67b] transition-all duration-300"
              >
                Book Now
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      
      {/* Bottom accent line */}
      <div className={`h-px w-full transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'} bg-gradient-to-r from-transparent via-[#e8a43a]/20 to-transparent`} />
    </motion.nav>
  );
};

export default Navbar;
