"use client";

import React from 'react';

export const SocialProofBar = () => {
    const items = [
        "5,000+ Happy Customers",
        "24-Hour Dispatch",
        "Premium Quality Material",
        "Eco-Friendly Printing",
    ];

    return (
        <div className="bg-carbon py-6 overflow-hidden border-y border-white/5">
            <div className="flex whitespace-nowrap animate-scroll">
                <div className="flex items-center space-x-12 px-12">
                    {items.map((text, i) => (
                        <div key={i} className="flex items-center space-x-3 text-white/90 font-black uppercase text-[10px] tracking-[0.2em]">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center space-x-12 px-12">
                    {items.map((text, i) => (
                        <div key={`dup-${i}`} className="flex items-center space-x-3 text-white/90 font-black uppercase text-[10px] tracking-[0.2em]">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
