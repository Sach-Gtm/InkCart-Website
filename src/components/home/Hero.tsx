"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    const [heroIndex, setHeroIndex] = useState(0);
    const heroImages = [
        "/asset/images/tshirt/ylw-men-clr-back-hs.png",
        "/asset/images/hoddies/1.jpg",
        "/asset/images/mugs/1_Main-31.jpg",
        "/asset/images/shipper/15.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const scrollToCategories = () => {
        const section = document.getElementById('categories');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHowItWorks = () => {
        const section = document.getElementById('how-it-works');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative overflow-hidden bg-white pt-12 pb-24 md:pt-20 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-carbon/5 shadow-sm">
                                <Image
                                    src="/asset/images/web logo/per.png"
                                    alt="InkCart logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-carbon font-heading uppercase">
                                INK<span className="text-primary">CART</span>
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-carbon leading-[1.1] tracking-tight font-heading">
                            Premium Custom<br />
                            <span className="text-primary italic">Merchandise.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-carbon/60 max-w-lg leading-relaxed font-medium">
                            Premium custom T-shirts, Hoodies, and Mugs. No account needed—order directly via WhatsApp.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                onClick={scrollToCategories}
                                className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
                            >
                                Browse Collection
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={scrollToHowItWorks}
                                className="inline-flex items-center justify-center px-10 py-5 bg-white text-carbon font-black border-2 border-carbon/10 rounded-2xl hover:bg-carbon/5 transition-all active:scale-95 transition-all"
                            >
                                How it Works
                            </button>
                        </div>

                        {/* Social Proof Mini */}
                        <div className="pt-8 flex items-center space-x-8 text-carbon/40">
                            <div className="flex items-center gap-1.5 grayscale opacity-70">
                                <Shield className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Premium quality</span>
                            </div>
                            <div className="flex items-center gap-1.5 grayscale opacity-70">
                                <Clock className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">24h Dispatch</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Hero Carousel */}
                    <div className="relative aspect-square">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-50 rounded-[40px] p-12 overflow-hidden relative h-full shadow-floating flex items-center justify-center"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={heroIndex}
                                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 1.1, x: -20 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={heroImages[heroIndex]}
                                        alt="InkCart Custom Prints"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                                {heroImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${heroIndex === i ? 'w-8 bg-primary' : 'w-2 bg-carbon/10'}`}
                                    ></div>
                                ))}
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-12 right-12 z-20 glass-morphism p-4 rounded-2xl shadow-premium border border-white/20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-carbon/40 uppercase tracking-widest">Starting at</p>
                                        <p className="text-xl font-black text-carbon font-plus">₹189</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
