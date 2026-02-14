"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, PenTool, Truck, Home } from 'lucide-react';

const steps = [
    {
        icon: ShoppingBag,
        title: "You Order",
        description: "Pick your product and base design to get started."
    },
    {
        icon: MessageCircle,
        title: "We Contact",
        description: "We reach out on WhatsApp for your custom details."
    },
    {
        icon: PenTool,
        title: "We Customize",
        description: "Our designers craft your preview for final approval."
    },
    {
        icon: Truck,
        title: "We Ship",
        description: "Your custom gear is dispatched within 24 hours."
    },
    {
        icon: Home,
        title: "You Receive",
        description: "Premium quality prints delivered to your doorstep."
    }
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-carbon mb-4 font-heading tracking-tight">
                        How It <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-carbon/40 text-lg font-medium">Simple steps to your premium custom gear.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-carbon/5 -z-0">
                                    <div className="w-0 h-full bg-primary/20 group-hover:w-full transition-all duration-1000" />
                                </div>
                            )}

                            <div className="w-20 h-20 rounded-3xl bg-white shadow-premium flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-100 group-hover:scale-110">
                                <step.icon className="w-8 h-8" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-carbon text-white text-xs font-black flex items-center justify-center border-2 border-white">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-black text-carbon mb-2 font-heading tracking-tight">{step.title}</h3>
                            <p className="text-carbon/50 text-sm font-medium leading-relaxed px-4">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
