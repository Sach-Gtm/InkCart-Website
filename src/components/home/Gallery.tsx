"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { CATEGORY_DATA } from '@/lib/constants';

interface GalleryProps {
    category: string;
    onBack: () => void;
    onSelect: (image: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ category, onBack, onSelect }) => {
    const data = CATEGORY_DATA[category];

    if (!data) return null;

    return (
        <div className="bg-gray-50 py-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={onBack}
                    className="flex items-center text-carbon/40 font-bold mb-8 hover:text-primary transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Categories
                </button>

                <div className="mb-12">
                    <h2 className="text-4xl font-black font-heading tracking-tight mb-2">
                        {category} <span className="text-primary">Design Gallery</span>
                    </h2>
                    <p className="text-carbon/40 font-bold">
                        Select a base design to start customizing your unique {category.toLowerCase()}.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.designs.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => onSelect(img)}
                            className="bg-white rounded-[40px] p-6 cursor-pointer shadow-premium hover:shadow-floating-hover hover:-translate-y-2 transition-all duration-500 group border border-carbon/5"
                        >
                            <div className="aspect-square mb-4 overflow-hidden rounded-3xl bg-gray-50 flex items-center justify-center p-4">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`Design ${i + 1}`}
                                        fill
                                        className="object-contain drop-shadow-lg transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="font-bold text-sm text-carbon/20 italic">#Design {i + 1}</span>
                                <span className="text-primary font-black font-plus">{data.price}</span>
                            </div>
                            <div className="mt-4 w-full py-3 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                Customize This
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
