"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const UGC_ITEMS = [
    { name: "Arjun", location: "Mumbai", image: "/asset/images/tshirt/ylw-men-clr-back-hs.png" },
    { name: "Sanya", location: "Delhi", image: "/asset/images/hoddies/1.jpg" },
    { name: "Rahul", location: "Bangalore", image: "/asset/images/mugs/1_Main-31.jpg" },
    { name: "Priya", location: "Pune", image: "/asset/images/shipper/15.jpg" },
    { name: "Amit", location: "Kolkata", image: "/asset/images/mouse/Mouse_pad.jpg" },
];

export const Lookbook = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading mb-4 tracking-tight">
                        Our Happy <span className="text-primary">Tribe</span>
                    </h2>
                    <p className="text-carbon/40 font-bold max-w-sm">
                        Join 5,000+ creators who wear their identity. Tag us @InkCartIndia to be featured!
                    </p>
                </div>
                <button className="hidden md:block px-8 py-4 bg-white border border-carbon/10 font-black rounded-2xl hover:bg-carbon hover:text-white transition-all shadow-sm">
                    View All Looks
                </button>
            </div>

            <div className="relative">
                <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] cursor-pointer py-4">
                    {[...UGC_ITEMS, ...UGC_ITEMS].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="w-[280px] md:w-[320px] shrink-0 aspect-[4/5] bg-white rounded-[32px] overflow-hidden shadow-premium group relative"
                        >
                            <Image
                                src={item.image}
                                alt={`Look by ${item.name}`}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-x-6 bottom-6 p-4 glass-morphism rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <p className="text-[10px] font-black uppercase text-carbon/40 tracking-widest mb-1">Verified Creator</p>
                                <p className="font-bold text-sm text-carbon">{item.name} @ {item.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
