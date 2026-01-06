import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Loan Approval Engine',
            description: 'A high-precision classification system analyzing demographic and financial vectors to predict creditworthiness.',
            techStack: ['Python', 'Pandas', 'Scikit-Learn'],
            accent: 'border-primary-red',
            link: '#',
            github: 'https://github.com/tokir07',
        },
        {
            title: 'Fraud Detection Core',
            description: 'Advanced anomaly detection system processing transaction patterns to identify fraudulent activities in real-time.',
            techStack: ['Python', 'NumPy', 'ML'],
            accent: 'border-primary-blue',
            link: '#',
            github: 'https://github.com/tokir07',
        },
        {
            title: 'Algorithmic Core',
            description: 'Implementation of high-efficiency data structures and optimized solutions for complex computational problems.',
            techStack: ['C++', 'Algorithms', 'DS'],
            accent: 'border-primary-red',
            link: '#',
            github: 'https://github.com/tokir07',
        },
        {
            title: 'Portfolio Website',
            description: 'Implementation of high-efficiency data structures and optimized solutions for complex computational problems.',
            techStack: ['React', 'Next.js', 'Tailwind CSS'],
            accent: 'border-primary-red',
            link: '#',
            github: 'https://github.com/tokir07',
        },
        {
            title: 'Smart ERP',
            description: 'Implementation of high-efficiency data structures and optimized solutions for complex computational problems.',
            techStack: ['Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
            accent: 'border-primary-red',
            link: '#',
            github: 'https://github.com/tokir07',
        },
        {
            title: 'ATM Simulation',
            description: 'A command-line ATM simulation system built using C++ with account management, transactions, and file-based persistence.',
            techStack: ['C++', 'Algorithms', 'DS'],
            accent: 'border-primary-red',
            link: '#',
            github: 'https://github.com/tokir07',
        },
    ];

    return (
        <section id="projects" className="section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-6xl font-black dark:text-white text-gray-950 uppercase tracking-tighter">
                            CORE <span className="text-primary-red">PROJ</span>ECTS
                        </h2>
                        <div className="w-32 h-2 bg-primary-red rounded-full"></div>
                    </div>
                    <p className="dark:text-gray-400 text-gray-600 font-medium max-w-md">
                        Applying theoretical foundations to solve practical computational and mathematical problems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-1 rounded-[40px] border-2 border-transparent hover:${project.accent} transition-all duration-500`}
                        >
                            <div className="h-full p-8 rounded-[38px] dark:bg-gray-900/60 bg-gray-50/80 border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-black mb-4 dark:text-white text-gray-950 group-hover:text-primary-red transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-8">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech, idx) => (
                                            <span key={idx} className="text-[10px] font-black uppercase tracking-widest dark:text-gray-500 text-gray-400">
                                                {tech} {idx !== project.techStack.length - 1 && '•'}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <motion.a
                                        href={project.link}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary-red"
                                    >
                                        Inspect <ExternalLink size={14} />
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        className="dark:text-gray-400 text-gray-600 hover:text-primary-blue dark:hover:text-primary-blue transition-colors"
                                    >
                                        <Github size={22} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
