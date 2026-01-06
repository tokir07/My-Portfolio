import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Home, User, Cpu, Briefcase, Trophy, Send, GraduationCap, ShieldCheck } from 'lucide-react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home', icon: <Home size={16} /> },
        { name: 'About', href: '#about', icon: <User size={16} /> },
        { name: 'Education', href: '#education', icon: <GraduationCap size={16} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={16} /> },
        { name: 'Projects', href: '#projects', icon: <Briefcase size={16} /> },
        { name: 'Certificates', href: '#certificates', icon: <ShieldCheck size={16} /> },
        { name: 'Journey', href: '#journey', icon: <Trophy size={16} /> },
        { name: 'Contact', href: '#contact', icon: <Send size={16} /> },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-10 px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="floating-nav min-w-[920px] max-w-[95vw] px-6 flex items-center gap-4 pointer-events-auto"
            >
                {/* Logo - Hidden on mobile to save space */}
                {/* <motion.a
                    href="#home"
                    className="hidden sm:flex text-lg font-black items-center gap-1 shrink-0"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-primary-red">P</span>
                    <span className="dark:text-white text-gray-900 transition-colors text-xs">F</span>
                </motion.a> */}

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-center flex-1 gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary-red transition"
                        >
                            <span className="opacity-80">{item.icon}</span>
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile Icons - Visible on small screens */}
                <div className="flex md:hidden items-center justify-around flex-1">
                    {navItems.slice(0, 4).map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="p-2 dark:text-gray-400 text-gray-600 hover:text-primary-red transition-all"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-gray-800 dark:text-gray-100 transition-all hover:scale-110 active:scale-90 border border-black/10 dark:border-white/10"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 rounded-full bg-primary-red text-white shadow-lg active:scale-90 transition-transform"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Full Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -50 }}
                            className="absolute top-20 left-0 right-0 p-4 rounded-[32px] bg-white/90 dark:bg-gray-950/90 border border-black/10 dark:border-white/10 backdrop-blur-3xl shadow-2xl md:hidden"
                        >
                            <div className="grid grid-cols-2 gap-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-6 py-4 rounded-2xl dark:bg-white/5 bg-black/5 text-sm font-bold dark:text-white text-gray-900 hover:bg-primary-red hover:text-white transition-all"
                                    >
                                        {item.icon}
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;
