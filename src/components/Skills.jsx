import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Binary,
    Cpu,
    BarChart3,
    LineChart,
    Globe,
    Wrench,
    Dices
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Foundations',
            icon: <Code2 className="w-8 h-8 text-primary-red" />,
            skills: ['Python', 'C', 'C++', 'Java', 'R', 'JavaScript'],
            accent: 'text-primary-red',
        },
        {
            title: 'Algorithms',
            icon: <Binary className="w-8 h-8 text-primary-blue" />,
            skills: ['Arrays', 'Graphs', 'DP', 'Recursion', 'Trees', 'Linked List'],
            accent: 'text-primary-blue',
        },
        {
            title: 'Machine Learning',
            icon: <Cpu className="w-8 h-8 text-primary-red" />,
            skills: ['Scikit-Learn', 'TensorFlow', 'Keras', 'Classification'],
            accent: 'text-primary-red',
        },
        {
            title: 'Analytics',
            icon: <BarChart3 className="w-8 h-8 text-primary-blue" />,
            skills: ['Pandas', 'NumPy', 'EDA', 'Excel'],
            accent: 'text-primary-blue',
        },
        {
            title: 'Visualization',
            icon: <LineChart className="w-8 h-8 text-primary-red" />,
            skills: ['Matplotlib', 'Seaborn'],
            accent: 'text-primary-red',
        },
        {
            title: 'Platforms',
            icon: <Globe className="w-8 h-8 text-primary-blue" />,
            skills: ['React', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Vercel', 'Notion'],
            accent: 'text-primary-blue',
        },
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl font-black mb-4 dark:text-white text-gray-950 uppercase tracking-tighter">
                        SYST<span className="text-primary-red">EM</span> ARCHITECTURE
                    </h2>
                    <p className="dark:text-gray-400 text-gray-600 font-medium max-w-2xl mx-auto">
                        Technical proficiency built on mathematical foundations and structural discipline.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-[32px] dark:bg-gray-900/40 bg-gray-50/50 border border-gray-200 dark:border-gray-800 hover:border-primary-red transition-all duration-500"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-4 rounded-2xl dark:bg-gray-800 bg-white shadow-xl dark:shadow-none transition-transform group-hover:rotate-6">
                                    {category.icon}
                                </div>
                                <span className={`text-[10px] uppercase font-black tracking-widest ${category.accent}`}>
                                    {category.title}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black mb-6 dark:text-white text-gray-950">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 dark:bg-gray-800 bg-white dark:text-gray-400 text-gray-600 rounded-xl text-xs font-bold border border-gray-200 dark:border-gray-700 group-hover:border-primary-red/30 transition-all font-sans"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
