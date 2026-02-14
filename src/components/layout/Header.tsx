"use client";

import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeaderProps {
    onOpenCart: () => void;
    onLogoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart, onLogoClick }) => {
    const { cartCount } = useCart();

    return (
        <header className="sticky top-0 z-50 glass-morphism w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <button
                        onClick={onLogoClick}
                        className="flex items-center space-x-3 group text-left outline-none"
                    >
                        <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-carbon/5 shadow-sm group-hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/asset/images/web logo/per.png"
                                alt="InkCart Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-carbon font-heading uppercase group-hover:text-primary transition-colors">
                            INK<span className="text-primary group-hover:text-carbon transition-colors">CART</span>
                        </span>
                    </button>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <button className="text-[10px] font-black text-carbon/40 hover:text-primary transition-all flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary/5 uppercase tracking-widest">
                            <Package className="w-4 h-4" />
                            Track Order
                        </button>
                    </div>

                    {/* Cart Icon */}
                    <button
                        onClick={onOpenCart}
                        className="relative p-3 rounded-2xl bg-carbon text-white hover:bg-primary transition-all shadow-premium active:scale-95 group"
                    >
                        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <AnimatePresence>
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-white"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </header>
    );
};
