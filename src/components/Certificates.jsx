import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react';
import CertificateViewer from './CertificateViewer';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const certificates = [
        {
            title: 'Data Structures & Algorithms',
            org: 'Apna College',
            description: 'Mastered core algorithmic logic, optimization techniques, and high-performance problem-solving patterns.',
            thumbnail: '/cert-prob.jpg',
            pdf: '/certificates/DSA Apna College.pdf',
            skills: ['DSA', 'Logic', 'Java']
        },
        {
            title: 'Python for Data Analysis',
            org: 'IBM / Coursera',
            description: 'Advanced data manipulation using Pandas, NumPy, and scientific computing for technical insight extraction.',
            thumbnail: '/cert-data-analysis.jpg',
            pdf: '/certificates/Data_Analysis_Using_Python.pdf',
            skills: ['Python', 'Pandas', 'EDA']
        },
        {
            title: 'Introduction to AI',
            org: 'Udemy',
            description: 'Comprehensive study of artificial intelligence agents, search methodologies, and stochastic modeling.',
            thumbnail: '/cert-ai.jpg',
            pdf: '/certificates/Introduction to AI.pdf',
            skills: ['AI', 'Search', 'Logic']
        },
        {
            title: 'Data Visualization',
            org: 'Udemy',
            description: 'Architecting visual representations of complex datasets to drive data-driven decision making.',
            thumbnail: '/cert-data-viz.jpg',
            pdf: '/certificates/Data Visualization Udemy.pdf',
            skills: ['Matplotlib', 'Seaborn', 'Viz']
        },
        {
            title: 'Probabilistic Modelling',
            org: 'Udemy',
            description: 'Statistical inference and probabilistic architectures for machine learning models using Python.',
            thumbnail: '/cert-prob.jpg',
            pdf: '/certificates/Probablistic Modelling Using Python.pdf',
            skills: ['Stats', 'ML', 'Python']
        },
        {
            title: 'AI Tools & Productivity',
            org: 'Workshop',
            description: 'Leveraging LLMs and generative AI tools to optimize development workflows and technical research.',
            thumbnail: '/cert-ai-tools.jpg',
            pdf: '/certificates/AI Tools Certificate.pdf',
            skills: ['LLMs', 'GenAI', 'Productivity']
        }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % (certificates.length));
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));

    return (
        <section id="certificates" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="text-primary-red w-6 h-6" />
                            <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Validated Skills</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none">
                            CERTIF<span className="text-primary-blue">ICATES</span>
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={prevSlide} className="p-5 rounded-3xl dark:bg-gray-950 bg-gray-100 dark:text-white text-gray-900 hover:bg-primary-red hover:text-white transition-all shadow-xl group">
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button onClick={nextSlide} className="p-5 rounded-3xl dark:bg-gray-950 bg-gray-100 dark:text-white text-gray-900 hover:bg-primary-red hover:text-white transition-all shadow-xl group">
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                <div className="relative">
                    <div className="overflow-visible px-4">
                        <motion.div
                            animate={{ x: `-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%` }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="flex gap-8"
                        >
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="min-w-full md:min-w-[48%] lg:min-w-[31.5%] group"
                                >
                                    <div
                                        onClick={() => setSelectedCert(cert)}
                                        className="h-full p-8 rounded-[48px] dark:bg-gray-950/40 bg-white border border-gray-200 dark:border-gray-800 hover:border-primary-blue/50 transition-all cursor-pointer shadow-xl backdrop-blur-xl relative overflow-hidden"
                                    >
                                        <div className="aspect-[16/10] rounded-[32px] overflow-hidden mb-8 relative border border-black/10 dark:border-white/5 shadow-inner">
                                            <img
                                                src={cert.thumbnail}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110 group-hover:rotate-1"
                                                onError={(e) => {
                                                    e.target.src = `https://via.placeholder.com/600x400/030712/ffffff?text=${encodeURIComponent(cert.org)}`;
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-primary-blue/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                                <div className="bg-white dark:bg-gray-950 p-5 rounded-3xl shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                                                    <ExternalLink className="text-primary-blue" size={28} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-primary-red px-3 py-1 bg-primary-red/5 rounded-full border border-primary-red/10">
                                                    {cert.org}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-black dark:text-white text-gray-950 uppercase tracking-tight leading-tight group-hover:text-primary-blue transition-colors">
                                                {cert.title}
                                            </h3>
                                            <p className="dark:text-gray-400 text-gray-600 font-medium text-sm leading-relaxed line-clamp-2">
                                                {cert.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-4">
                                                {cert.skills.map((skill, i) => (
                                                    <span key={i} className="text-[9px] font-black uppercase tracking-widest dark:text-gray-500 text-gray-400">
                                                        #{skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Custom PDF Viewer Modal */}
                <CertificateViewer
                    isOpen={!!selectedCert}
                    onClose={() => setSelectedCert(null)}
                    cert={selectedCert}
                />
            </div>
        </section>
    );
};

export default Certificates;
