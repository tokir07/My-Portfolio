import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Code, Camera, Briefcase, Award, Focus, Image, Sparkle, Aperture, Frame } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            organization: "IAESTE",
            role: "Local Committee Member",
            icon: <img src="/NEW logo in png white.png" className="w-12 h-12" />,
            // icon: <Globe className="w-6 h-6" />,
            color: "from-blue-900 to-cyan-900",
            glow: "shadow-blue-500/20",
            responsibilities: [
                "Actively involved in managing and promoting international internship opportunities",
                "Assisted students with registration, documentation, and application processes",
                "Coordinated with team members during orientations and outreach initiatives",
                "Represented IAESTE values of global exposure and professional development"
            ],
            skills: ["Leadership", "Communication", "International Exposure", "Team Coordination"]
        },
        {
            organization: "JECRC Alumni Association",
            role: "General Secretary",
            icon: <img src="/Alumni logo.png" className="w-10 h-10" />,
            // icon: <Users className="w-6 h-6" />,
            color: "from-red-500 to-orange-400",
            glow: "shadow-red-500/20",
            responsibilities: [
                "Serving as the General Secretary, responsible for coordination and execution of alumni initiatives",
                "Managed internal communication and community engagement activities",
                "Helped plan and organize alumni events, interactions, and networking sessions",
                "Played a key role in strengthening student–alumni relations"
            ],
            skills: ["Leadership", "Event Management", "Organizational Skills", "Communication"]
        },
        {
            organization: "Dev Crest Coding Community",
            role: "Core Member",
            icon: <Code className="w-6 h-6" />,
            color: "from-purple-500 to-indigo-400",
            glow: "shadow-purple-500/20",
            responsibilities: [
                "Contributed to technical community growth and peer learning initiatives",
                "Assisted in organizing workshops, coding events, and orientation activities",
                "Collaborated with developers and designers on community-driven projects"
            ],
            skills: ["Problem Solving", "Teamwork", "Technical Communication"]
        },
        {
            organization: "Mavrick Photography Club",
            role: "Member",
            icon: <Aperture className="w-8 h-8 " />,
            color: "from-yellow-500 to-amber-400",
            glow: "shadow-yellow-500/20",
            responsibilities: [
                "Participated in event photography and visual content creation",
                "Assisted in creative planning and visual storytelling",
                "Worked with media teams for branding and promotional content"
            ],
            skills: ["Creativity", "Visual Design", "Attention to Detail"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-px w-12 bg-primary-red"></div>
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">Professional Involvement</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black dark:text-white text-gray-950 uppercase tracking-tighter leading-none mb-6">
                        EXPERI<span className="text-primary-blue">ENCE</span>
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-primary-red to-primary-blue rounded-full"></div>
                </motion.div>

                {/* Experience Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className={`group relative p-8 rounded-[32px] border border-white/10 dark:bg-white/[0.03] bg-gray-50/50 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl ${exp.glow}`}
                        >
                            <div className="flex flex-col h-full">
                                {/* Card Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-5">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg`}>
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black dark:text-white text-gray-950 tracking-tight leading-tight">
                                                {exp.organization}
                                            </h3>
                                            <p className="text-sm font-bold text-primary-red uppercase tracking-wider mt-1">
                                                {exp.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block">
                                        <Award className="w-5 h-5 dark:text-gray-700 text-gray-300 transition-colors group-hover:text-primary-blue" />
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <div className="flex-1 mb-8">
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0"></div>
                                                <p className="text-sm font-medium dark:text-gray-400 text-gray-600 leading-relaxed">
                                                    {item}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skill Pills */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-black/5 dark:bg-white/5 dark:text-gray-400 text-gray-600 border border-black/5 dark:border-white/5 transition-all group-hover:border-primary-blue/30 group-hover:text-primary-blue"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-red/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default Experience;
