import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Header Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-black dark:text-white text-gray-950">
                            THE <span className="text-primary-red">PRINCIPLE</span> OF CONSISTENCY
                        </h2>
                        <div className="w-20 h-2 bg-primary-red rounded-full"></div>
                        <p className="text-xl dark:text-gray-400 text-gray-600 font-medium">
                            I build systems, not just code. My approach is rooted in the belief that discipline is the bridge between goals and accomplishment.
                        </p>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg dark:text-gray-300 text-gray-700 leading-relaxed"
                        >
                            <p>
                                I'm someone who values{' '}
                                <span className="text-primary-red font-bold">discipline</span> more
                                than motivation. Whether it's the daily grit of solving DSA problems or the methodical exploration of Machine Learning foundations, I prioritize long-term depth over short-term hacks.
                            </p>
                            <p>
                                Beyond the screen, I've led student communities and technical initiatives, focusing on how{' '}
                                <span className="text-primary-blue font-bold">responsibility</span> and collective effort shape high-impact results.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-3xl dark:bg-gray-900/50 bg-gray-50 border border-gray-200 dark:border-gray-800 transition-all hover:border-primary-red/50"
                            >
                                <h3 className="text-xl font-black text-primary-red mb-4 uppercase tracking-wider">
                                    Current Focus
                                </h3>
                                <ul className="space-y-3 dark:text-gray-400 text-gray-600 text-sm font-medium">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red" />
                                        DSA (Striver Sheet)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red" />
                                        ML Fundamentals
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red" />
                                        Classification Systems
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-red" />
                                        JAVA Programming
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-6 rounded-3xl dark:bg-gray-900/50 bg-gray-50 border border-gray-200 dark:border-gray-800 transition-all hover:border-primary-blue/50"
                            >
                                <h3 className="text-xl font-black text-primary-blue mb-4 uppercase tracking-wider">
                                    Involvement
                                </h3>
                                <ul className="space-y-3 dark:text-gray-400 text-gray-600 text-sm font-medium">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                        DevCrest Community
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                        Alumni Association
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                        IAESTE LC JECRC
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                                        Student Leadership
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
