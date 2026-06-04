import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] text-[#f5f5f5] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8a43a]/40 to-transparent" />
      <div className="absolute inset-0 bg-[url('/imgs/bg-2.png')] bg-cover bg-center opacity-5" />
      <motion.div animate={{ rotate: [0, 360], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -bottom-40 -left-40 w-80 h-80 border border-[#e8a43a]/10 rounded-full" />
      <motion.div animate={{ rotate: [360, 0], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -top-40 -right-40 w-96 h-96 border border-[#e8a43a]/10 rounded-full" />
      <div className="mx-auto w-full max-w-screen-xl font-bold p-4 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center space-x-4 mb-6">
              <div className="relative h-16 w-16">
                <div className="absolute inset-0 rounded-full bg-[#e8a43a]/20 blur-md" />
                <div className="relative h-full w-full bg-[url('/web/logo3.webp')] bg-cover bg-center rounded-full border-2 border-[#e8a43a]/40 bg-[#0a0a0a]" />
              </div>
              <div>
                <span className="text-gradient-amber text-xl font-bold tracking-wider">FLESH-N-INK</span>
                <p className="text-[#666666] text-sm tracking-widest">STUDIO</p>
              </div>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[#a0a0a0] text-sm leading-relaxed mb-6">Pretoria's Premier Tattoo Studio. Passionately local. Boldly artistic. Where culture and creativity collide.</motion.p>
            <div className="flex items-center space-x-4">
              {[{ icon: FaInstagram, href: "https://www.instagram.com/fleshninktattoos/", color: "hover:text-[#e8a43a]" }, { icon: FaFacebook, href: "https://www.facebook.com/fleshninktattoos/", color: "hover:text-[#e8a43a]" }, { icon: FaWhatsapp, href: "https://wa.me/+27814071917", color: "hover:text-[#e8a43a]" }].map((social, idx) => (
                <motion.a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }} className={`w-10 h-10 rounded-none bg-[#0a0a0a] border border-[#e8a43a]/20 flex items-center justify-center text-[#a0a0a0] hover:border-[#e8a43a] hover:shadow-[0_0_20px_rgba(232,164,58,0.2)] transition-all duration-300 ${social.color}`}>
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[#e8a43a] text-sm uppercase tracking-[0.2em] mb-6 font-bold">Quick Links</motion.h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((link, idx) => (
                <motion.li key={link} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-[#a0a0a0] hover:text-[#e8a43a] transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-0 h-px bg-[#e8a43a] mr-2 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />{link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[#e8a43a] text-sm uppercase tracking-[0.2em] mb-6 font-bold">Contact</motion.h3>
            <ul className="space-y-4">
              <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex items-start space-x-3"><FaMapMarkerAlt className="w-4 h-4 text-[#e8a43a] mt-1 flex-shrink-0" /><span className="text-[#a0a0a0] text-sm">Pretoria, South Africa</span></motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="flex items-start space-x-3"><FaPhoneAlt className="w-4 h-4 text-[#e8a43a] mt-1 flex-shrink-0" /><a href="tel:+27814071917" className="text-[#a0a0a0] hover:text-[#e8a43a] text-sm transition-colors duration-300">+27 81 407 1917</a></motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }} className="flex items-start space-x-3"><FaEnvelope className="w-4 h-4 text-[#e8a43a] mt-1 flex-shrink-0" /><a href="mailto:info@fleshninktattoos.com" className="text-[#a0a0a0] hover:text-[#e8a43a] text-sm transition-colors duration-300">info@fleshninktattoos.com</a></motion.li>
            </ul>
          </div>
          <div>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[#e8a43a] text-sm uppercase tracking-[0.2em] mb-6 font-bold">Book Your Session</motion.h3>
            <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(232, 164, 58, 0.4)" }} whileTap={{ scale: 0.98 }} onClick={() => window.open("https://wa.me/+27814071917", "_blank")} className="w-full py-4 px-6 bg-[#e8a43a] text-[#050505] font-bold uppercase text-sm tracking-widest rounded-none hover:bg-[#f5c67b] transition-all duration-300 mb-4">Book Now</motion.button>
            <p className="text-[#666666] text-xs">Walk-ins welcome. Appointments preferred for custom designs.</p>
          </div>
        </div>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="my-12 mx-4 sm:mx-6 lg:mx-8 h-px bg-gradient-to-r from-transparent via-[#e8a43a]/20 to-transparent" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="sm:flex sm:items-center sm:justify-between text-center px-4 sm:px-6 lg:px-8">
          <span className="text-sm text-[#666666] sm:text-left">© {currentYear} <span className="text-gradient-amber">Flesh-n-Ink</span> Tattoo Studio™. All Rights Reserved.</span>
          <div className="flex items-center justify-center sm:justify-end space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-[#666666] hover:text-[#e8a43a] text-sm transition-colors duration-300">Privacy Policy</a>
            <span className="text-[#e8a43a]/30">|</span>
            <a href="#" className="text-[#666666] hover:text-[#e8a43a] text-sm transition-colors duration-300">Terms & Conditions</a>
          </div>
        </motion.div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e8a43a]/20 to-transparent" />
    </footer>
  );
}
export default Footer;
