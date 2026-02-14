"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORY_DATA } from '@/lib/constants';

const categories = [
    {
        title: "T-Shirts",
        price: CATEGORY_DATA["T-Shirts"].price,
        image: CATEGORY_DATA["T-Shirts"].designs[0],
        color: "bg-[#F0F7FF]",
        size: "md:col-span-2 md:row-span-2"
    },
    {
        title: "Hoodies",
        price: CATEGORY_DATA["Hoodies"].price,
        image: CATEGORY_DATA["Hoodies"].designs[0],
        color: "bg-[#FFF9F0]",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Mugs",
        price: CATEGORY_DATA["Mugs"].price,
        image: CATEGORY_DATA["Mugs"].designs[0],
        color: "bg-[#F0FFF4]",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Sippers",
        price: CATEGORY_DATA["Sippers"].price,
        image: CATEGORY_DATA["Sippers"].designs[0],
        color: "bg-[#FEF2F2]",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Mouse Pads",
        price: CATEGORY_DATA["Mouse Pads"].price,
        image: CATEGORY_DATA["Mouse Pads"].designs[0],
        color: "bg-[#F5F3FF]",
        size: "md:col-span-1 md:row-span-1"
    }
];

export const CategoryGrid = ({ onSelectCategory }: { onSelectCategory: (category: string) => void }) => {
    return (
        <section id="categories" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-carbon mb-4 font-heading tracking-tight">
                        Browse Our <span className="text-primary">Collections</span>
                    </h2>
                    <p className="text-carbon/40 text-lg font-medium">Choose a product to start customizing.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            onClick={() => onSelectCategory(cat.title)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-[40px] ${cat.color} ${cat.size} cursor-pointer shadow-premium hover:shadow-floating-hover transition-all duration-500 border border-carbon/5`}
                        >
                            {/* Product Info */}
                            <div className="absolute top-8 left-8 z-20">
                                <p className="text-[10px] font-bold text-carbon/40 uppercase tracking-widest mb-1">Starting from</p>
                                <h3 className="text-2xl font-black text-carbon mb-2 font-heading tracking-tight">{cat.title}</h3>
                                <div className="inline-block px-4 py-1.5 bg-white rounded-full text-primary font-bold shadow-sm font-plus">
                                    {cat.price}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                <div className="h-12 w-12 bg-white text-carbon rounded-full flex items-center justify-center shadow-xl border border-carbon/5">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Image Overlay/Background */}
                            <div className="absolute inset-0 z-10 p-12 flex items-center justify-center">
                                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Subtle Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
