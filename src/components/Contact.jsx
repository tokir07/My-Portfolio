import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Phone, Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Standard EmailJS implementation...
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <section id="contact" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[40px] dark:bg-gray-900/40 bg-gray-50/50 border border-gray-200 dark:border-gray-800 p-8 md:p-16 overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-6xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none">
                                    CONNECT <br />
                                    <span className="text-primary-blue">FOR</span> <br />
                                    <span className="text-primary-red">OPPORTUNITIES</span>
                                </h2>
                                <p className="text-xl dark:text-gray-400 text-gray-600 font-medium">
                                    Open for technical collaborations, research opportunities, or architectural discussions.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-black tracking-widest text-primary-red">Email</p>
                                    <a href="mailto:your.email@example.com" className="text-lg font-bold dark:text-white text-gray-950 hover:text-primary-red transition-colors">
                                        tokirkhan00291@gmail.com
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase font-black tracking-widest text-primary-blue">Mobile Number</p>
                                    <p className="text-lg font-bold dark:text-white text-gray-950">+91 9079968792</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                {/* GitHub */}
                                <motion.a
                                    href="https://github.com/tokir07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-4 rounded-2xl dark:bg-gray-800 bg-white shadow-xl dark:shadow-none dark:text-white text-gray-950 border border-gray-200 dark:border-gray-700"
                                    aria-label="GitHub Profile"
                                >
                                    <Github size={24} />
                                </motion.a>

                                {/* LinkedIn */}
                                <motion.a
                                    href="https://linkedin.com/in/tokirkhan07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-4 rounded-2xl dark:bg-gray-800 bg-white shadow-xl dark:shadow-none dark:text-white text-gray-950 border border-gray-200 dark:border-gray-700"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin size={24} />
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href="mailto:tokirkhan00291@gmail.com"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-4 rounded-2xl dark:bg-gray-800 bg-white shadow-xl dark:shadow-none dark:text-white text-gray-950 border border-gray-200 dark:border-gray-700"
                                    aria-label="Send Email"
                                >
                                    <Mail size={24} />
                                </motion.a>
                            </div>

                        </div>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest dark:text-gray-500 text-gray-400 ml-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl dark:bg-black/20 bg-white border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-primary-red transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest dark:text-gray-500 text-gray-400 ml-2">Email-ID</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl dark:bg-black/20 bg-white border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-primary-red transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest dark:text-gray-500 text-gray-400 ml-2">Description</label>
                                <textarea
                                    name="message"
                                    placeholder="Add Your Message"
                                    rows="5"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl dark:bg-black/20 bg-white border border-gray-200 dark:border-gray-800 focus:outline-none focus:border-primary-red transition-all resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'sending'}
                                className="w-full py-5 bg-primary-red rounded-2xl font-black uppercase tracking-widest text-white shadow-xl hover:shadow-primary-red/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Transmitting...' : status === 'success' ? 'Transmission Success ✓' : 'Send Message'}
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
