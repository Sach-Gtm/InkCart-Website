"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const SALES_DATA = [
    { name: "Rahul from Delhi", product: "Custom T-Shirt" },
    { name: "Sanya from Mumbai", product: "Premium Hoodie" },
    { name: "Arjun from Bangalore", product: "Custom Coffee Mug" },
    { name: "Priya from Chennai", product: "Gaming Mouse Pad" }
];

export const RecentSales = () => {
    const [sale, setSale] = useState<null | typeof SALES_DATA[0]>(null);

    useEffect(() => {
        const showSale = () => {
            const randomSale = SALES_DATA[Math.floor(Math.random() * SALES_DATA.length)];
            setSale(randomSale);
            setTimeout(() => setSale(null), 5000);
        };

        const interval = setInterval(() => {
            if (Math.random() > 0.5) showSale();
        }, 15000);

        // Show first one after 3s
        const initial = setTimeout(showSale, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(initial);
        };
    }, []);

    return (
        <AnimatePresence>
            {sale && (
                <motion.div
                    initial={{ opacity: 0, x: -100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.8 }}
                    className="fixed bottom-24 left-6 z-50 glass-morphism p-4 rounded-2xl shadow-floating border border-carbon/5 flex items-center gap-4 max-w-[280px]"
                >
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-0.5">Recent Sale</p>
                        <p className="text-sm font-bold text-carbon leading-tight">{sale.name} just bought a {sale.product}</p>
                        <p className="text-[10px] text-carbon/40 font-bold mt-1">2 minutes ago</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
