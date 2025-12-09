import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-12 px-6 md:px-12 bg-gradient-to-b from-gray-100 to-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto">
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Get In Touch
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block h-1 bg-gray-900 mx-auto mt-3"
          ></motion.span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Left: Contact Info */}
          <motion.div
            variants={itemVariants}
            className="md:w-2/5 w-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex flex-col justify-center items-start py-12 px-8 text-white"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-6"
            >
              Contact Information
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/20 p-3 rounded-full"
                >
                  <FaEnvelope size={20} />
                </motion.div>
                <div>
                  <p className="text-sm opacity-80">Email</p>
                  <p className="font-semibold">tharinduherath2426@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/20 p-3 rounded-full"
                >
                  <FaPhone size={20} />
                </motion.div>
                <div>
                  <p className="text-sm opacity-80">Phone</p>
                  <p className="font-semibold">+94 76 6 591 147</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/20 p-3 rounded-full"
                >
                  <FaMapMarkerAlt size={20} />
                </motion.div>
                <div>
                  <p className="text-sm opacity-80">Location</p>
                  <p className="font-semibold">Bandarawela, Sri Lanka</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="md:w-3/5 w-full bg-white px-10 py-12"
          >
            <div className="flex items-center mb-6">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="myy.jpg"
                alt="Tharindu Herath"
                className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-emerald-500 shadow-lg"
              />
              <div>
                <div className="text-2xl font-bold text-gray-900">Tharindu Herath</div>
                <div className="text-gray-500 text-sm">Full Stack Developer</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border-2 border-gray-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border-2 border-gray-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border-2 border-gray-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg text-center"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
