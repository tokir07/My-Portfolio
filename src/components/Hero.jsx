import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center section-padding pt-32"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <motion.h1
                            className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter"
                        >
                            Hi, I'm a <br />
                            <span className="text-primary-red">CS Student</span>
                        </motion.h1>
                        <p className="text-xl md:text-2xl font-bold dark:text-gray-400 text-gray-600">
                            Focused on <span className="text-primary-blue">DSA</span> & <span className="text-primary-red">Machine Learning</span>
                        </p>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl dark:text-gray-300 text-gray-700 leading-relaxed max-w-2xl"
                    >
                        I believe real growth comes from{' '}
                        <span className="text-primary-red font-bold underline decoration-2 underline-offset-4">discipline</span> more
                        than motivation. Built on daily consistency and deep exploration of complex fundamentals.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-6"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-primary-red rounded-2xl font-bold text-white shadow-[0_10px_20px_-10px_rgba(238,68,68,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(238,68,68,0.6)] transition-all"
                        >
                            Explore Logic
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 border-2 border-gray-200 dark:border-gray-800 rounded-2xl font-bold dark:text-white text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        >
                            Let's Connect
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right: Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-lg aspect-square">
                        {/* Animated background shapes */}
                        <div className="absolute inset-0 bg-primary-red/10 dark:bg-primary-red/20 rounded-[40px] rotate-6 animate-pulse"></div>
                        <div className="absolute inset-0 bg-primary-blue/10 dark:bg-primary-blue/20 rounded-[40px] -rotate-3 transition-transform duration-1000"></div>

                        {/* Profile image container */}
                        <div className="relative rounded-[40px] overflow-hidden border-8 border-white dark:border-gray-950 aspect-square shadow-2xl translate-y-[20px]">
                            <img
                                src="/Profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/600x600/1a1a1a/ffffff?text=STUDENT';
                                }}
                            />
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 p-6 glass rounded-3xl shadow-xl dark:bg-black/40 bg-white/40 border border-white/20"
                        >
                            <span className="text-4xl font-black text-primary-red">λ</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
