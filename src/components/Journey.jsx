import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Snowflake, BookOpen, BrainCircuit, Users } from 'lucide-react';

const Journey = () => {
    const milestones = [
        {
            year: '2024',
            title: 'Initial Alpha',
            description: "Established foundational logic in Data Structures and Algorithms with systematic problem-solving cycles.",
            icon: <Rocket className="w-6 h-6" />,
            color: 'text-primary-red'
        },
        {
            year: '2024',
            title: 'TUF Winter Arc Phase',
            description: 'Intensive consistency sprint within the TakeUForward community. 24/7 engagement with complex fundamentals.',
            icon: <Snowflake className="w-6 h-6" />,
            color: 'text-primary-blue'
        },
        {
            year: '2025',
            title: 'Foundational Shift',
            description: 'Transitioned focus to Machine Learning. Architecting mathematical models and classification engines.',
            icon: <BrainCircuit className="w-6 h-6" />,
            color: 'text-primary-red'
        },
    ];

    return (
        <section id="journey" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <h2 className="text-5xl md:text-7xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none">
                        PHAS<span className="text-primary-red">ED</span> EVOLUTI<span className="text-primary-blue">ON</span>
                    </h2>
                    <p className="mt-6 dark:text-gray-400 text-gray-600 font-medium max-w-xl mx-auto uppercase tracking-widest text-[10px]">
                        Chronological progression of technical capabilities and structural growth.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line with gradient */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-red via-primary-blue to-primary-red opacity-20"></div>

                    <div className="space-y-24">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-12 relative ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Center Icon */}
                                <div className="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-2xl dark:bg-gray-900 bg-white border border-gray-200 dark:border-gray-800 shadow-2xl flex items-center justify-center z-10 transition-transform hover:scale-110">
                                    <span className={milestone.color}>{milestone.icon}</span>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="space-y-4">
                                        <div className={`text-sm font-black uppercase tracking-widest ${milestone.color}`}>
                                            [{milestone.year}]
                                        </div>
                                        <h3 className="text-3xl font-black dark:text-white text-gray-950 uppercase tracking-tight">
                                            {milestone.title}
                                        </h3>
                                        <p className="dark:text-gray-400 text-gray-600 font-medium leading-relaxed max-w-md ml-auto mr-0 md:mr-auto">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for md screens */}
                                <div className="hidden md:block w-5/12"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
