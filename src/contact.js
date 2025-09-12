import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-0 bg-white">
      <div className="max-w-1xl mx-auto flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg scale-90">
        {/* Left: Title/Accent */}
        <div className="md:w-1/3 w-full bg-red-500 flex flex-col justify-center items-center py-10 px-4">
           <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="bg-white text-gray-900 p-1 rounded"><FaEnvelope size={14} /></span>
              <span className="text-white text-sm font-mono">tharinduherath2426@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white text-gray-900 p-1 rounded"><FaPhone size={14} /></span>
              <span className="text-white text-sm font-mono">+94 76 6 591 147</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white text-gray-900 p-1 rounded"><FaMapMarkerAlt size={14} /></span>
              <span className="text-white text-sm font-mono">Bandarawela, Sri Lanka</span>
            </div>
          </div>
        </div>
        {/* Right: Contact Card */}
        <div className="md:w-2/3 w-full bg-gray-800 px-6 py-8 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <img
              src="profile.jpg"
              alt="Your Name"
              className="w-12 h-12 rounded-full object-cover mr-3 border-4 border-gray-700"
            />
            <div>
              <div className="text-lg font-bold text-white">Tharindu Herath</div>
              <div className="text-gray-400 text-sm">Contact Owner</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded bg-gray-900 text-white font-mono border border-gray-700 focus:outline-none focus:border-emerald-400 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-3 py-2 rounded bg-gray-900 text-white font-mono border border-gray-700 focus:outline-none focus:border-emerald-400 text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              className="px-3 py-2 rounded bg-gray-900 text-white font-mono border border-gray-700 focus:outline-none focus:border-emerald-400 text-sm"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono font-bold py-2 px-6 rounded transition w-max text-sm"
            >
              Send Message
            </button>
          </form>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;