"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFAB = () => {
    const openWhatsApp = () => {
        const text = encodeURIComponent("Hi InkCart! I have a question about customizing a product.");
        window.open(`https://wa.me/919355446497?text=${text}`, '_blank');
    };

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openWhatsApp}
            className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:hidden"></div>
            <MessageCircle className="w-8 h-8 fill-current" />
        </motion.button>
    );
};
