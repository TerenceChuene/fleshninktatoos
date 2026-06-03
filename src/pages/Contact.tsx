import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Contact = () => {
  return (
    <section id="contact">
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/imgs/bg-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />

        {/* Floating accent orbs */}
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -60, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-48 h-48 bg-[#e8a43a]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 80, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-20 w-40 h-40 bg-[#e8a43a]/5 rounded-full blur-3xl"
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e8a43a]/30 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase text-[#f5f5f5] leading-none tracking-tight relative mb-6"
            >
              <span className="text-gradient-amber">
                CONTACT
              </span>
              <br />
              <span className="text-[#f5f5f5]">
                US
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-1/5 -translate-x-1/2 h-1 bg-gradient-to-r from-green-400 to-green-600 origin-center w-32"
              />
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 px-6"
          >
            {/* QR Code */}
            <div className="hidden sm:flex justify-center items-center rounded-md lg:w-1/2">
              <div className="text-center">
                <img
                  src="/imgs/qrcode3.png"
                  alt="QR Code"
                  className="w-[400px] h-[400px]  mx-auto"
                />
                <p className="mt-4 text-gray-300">
                  Scan the QR code to get in touch with us.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-white lg:w-1/2">
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Get a Quote</h1>
              <p className="max-w-xl mt-6">
                Ask us everything and we would love to hear from you
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-7xl w-full flex flex-col gap-12 lg:gap-8 mt-6"
              >
                {/* Contact Details */}
                <motion.div variants={itemVariants} className="space-y-2">
                  {[
                    {
                      icon: FaMapMarkerAlt,
                      label: 'Address',
                      value: '325 Paul Kruger x Van Heerden Capital Park',
                      color: 'from-green-500 to-black',
                      link: 'https://maps.app.goo.gl/AtbDCyVVJnHKQbW76',
                    },
                    {
                      icon: FaPhone,
                      label: 'Phone',
                      value: '+27 81 407 1917',
                      color: 'from-green-500 to-black',
                    },
                    {
                      icon: FaEnvelope,
                      label: 'Email',
                      value: 'fleshninktattoos@gmail.com',
                      color: 'from-green-500 to-black',
                    },
                    {
                      icon: FaClock,
                      label: 'Hours',
                      value: 'Appointment Only',
                      color: 'from-green-500 to-black',
                    },
                  ].map((contact, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-4 p-4"
                    >
                      <div
  className={`w-14 h-14 flex-shrink-0 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
>
  <contact.icon className="w-6 h-6 text-white" />
</div>

                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">
                          {contact.label}
                        </p>
                        {contact.link ? (
                          <a
  href={contact.link}
  target="_blank"
  rel="noopener noreferrer"
  className="block text-white font-semibold underline underline-offset-4 hover:text-green-400 transition"
>
  {contact.value}
</a>

                        
                        ) : (
                          <p className="text-white font-semibold">{contact.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Dots Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mt-20"
          >
            <div className="flex space-x-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="w-3 h-3 bg-green-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
