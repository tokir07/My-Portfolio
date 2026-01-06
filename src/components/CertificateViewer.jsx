import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Loader2, Award, ShieldCheck } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CertificateViewer = ({ isOpen, onClose, cert }) => {
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateScale = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Leave space for header + footer
            const availableWidth =
                viewportWidth < 640
                    ? viewportWidth * 0.9
                    : viewportWidth < 1024
                        ? viewportWidth * 0.8
                        : viewportWidth * 0.65;

            const availableHeight = viewportHeight * 0.6;

            // Typical certificate aspect ratio (~1.4)
            const pageAspectRatio = 1.414;

            const widthScale = availableWidth / 800;
            const heightScale = availableHeight / (800 / pageAspectRatio);

            setScale(Math.min(widthScale, heightScale) * 0.92);
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    if (!cert) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[150] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 sm:p-8"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative bg-white dark:bg-gray-950 rounded-[40px] md:rounded-[56px] w-full max-w-5xl h-fit max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-3xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-10 gap-4 border-b border-gray-100 dark:border-gray-900">
                            <div className="space-y-1">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck size={18} className="text-primary-red" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-red">Authenticated Credential</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black dark:text-white text-gray-950 uppercase tracking-tighter">
                                    {cert.title}
                                </h3>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{cert.org}</p>
                            </div>

                            <div className="flex gap-3">
                                <motion.a
                                    href={cert.pdf}
                                    download
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-4 bg-primary-blue rounded-2xl text-white shadow-lg shadow-primary-blue/20 flex items-center gap-2"
                                    title="Download Asset"
                                >
                                    <Download size={20} />
                                    <span className="hidden sm:inline text-xs font-black uppercase tracking-widest">Download</span>
                                </motion.a>
                                <button
                                    onClick={onClose}
                                    className="p-4 bg-gray-100 dark:bg-gray-900 rounded-2xl dark:text-white text-gray-900 hover:bg-red-500 hover:text-white transition-all shadow-md"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Content Area */}
                        <div className="flex-1 overflow-hidden bg-gray-50 dark:bg-black/40 flex items-center justify-center p-2 md:p-4">

                            <Document
                                file={cert.pdf}
                                loading={
                                    <div className="flex flex-col items-center gap-4">
                                        <Loader2 className="w-10 h-10 text-primary-red animate-spin" />
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-500">Decrypting Asset...</p>
                                    </div>
                                }
                                error={
                                    <div className="text-center p-8">
                                        <p className="text-red-500 font-bold">Error loading certificate. Please try downloading instead.</p>
                                    </div>
                                }
                            >
                                <Page
                                    pageNumber={1}
                                    scale={scale}
                                    renderMode="canvas"
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                    className="rounded-lg shadow-xl"

                                />

                            </Document>
                        </div>

                        {/* Footer / Badge Decoration */}
                        <div className="p-4 flex justify-center items-center bg-gray-50/50 dark:bg-black/20">
                            <div className="flex items-center gap-2 opacity-50">
                                <Award size={14} className="text-primary-blue" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Interactive Showcase Mode</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CertificateViewer;
