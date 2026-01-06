import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const DynamicBackground = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500">
            <div className="relative w-full h-full">

                {/* Red Blob */}
                <motion.div
                    animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                    className={`absolute top-1/2 left-1/2 -translate-x-[140%] -translate-y-[120%]
            w-[550px] h-[550px] rounded-full blur-[100px]
            ${isDark ? 'bg-red-500/30' : 'bg-red-400/45'}`}
                />

                {/* Blue Blob */}
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                    className={`absolute top-1/2 left-1/2 translate-x-[40%] translate-y-[40%]
            w-[650px] h-[650px] rounded-full blur-[120px]
            ${isDark ? 'bg-blue-500/25' : 'bg-blue-400/40'}`}
                />

                {/* Accent Blob */}
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className={`absolute top-1/2 left-1/2 -translate-x-[10%] translate-y-[10%]
            w-[350px] h-[350px] rounded-full blur-[80px]
            ${isDark ? 'bg-red-400/20' : 'bg-red-300/35'}`}
                />

                {/* Particles */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: Math.random() * 0.5 + 0.2,
                            x: `${Math.random() * 100}vw`,
                            y: `${Math.random() * 100}vh`,
                        }}
                        animate={{
                            y: ['0px', '-40px', '0px'],
                            opacity: isDark ? [0.2, 0.7, 0.2] : [0.15, 0.5, 0.15],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: Math.random() * 5,
                        }}
                        className={`absolute w-1.5 h-1.5 rounded-full blur-[1.5px]
              ${isDark ? 'bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'bg-gray-400/70'}`}
                    />
                ))}

            </div>
        </div>
    );
};

export default DynamicBackground;
