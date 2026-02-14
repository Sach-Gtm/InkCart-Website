"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageSquare } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const { cart, removeFromCart, updateQuantity, cartTotal, generateWhatsAppLink, isBelowMinimum } = useCart();

    const handleCheckout = () => {
        if (isBelowMinimum) return;
        const link = generateWhatsAppLink();
        window.open(link, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-carbon/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-carbon/5 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-black text-carbon">Your Cart</h2>
                                <p className="text-sm text-carbon/40">{cart.length} items added</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-carbon/5 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-carbon" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Plus className="w-8 h-8 text-primary rotate-45" />
                                    </div>
                                    <p className="text-carbon/40 font-bold">Your cart is empty.</p>
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-2 bg-carbon text-white rounded-full text-sm font-bold"
                                    >
                                        Keep Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-carbon/5">
                                        <div className="relative h-20 w-20 bg-white rounded-xl overflow-hidden shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-carbon">{item.name}</h3>
                                                    <p className="text-xs text-carbon/40 uppercase tracking-widest leading-6">
                                                        {item.color} • {item.size}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-carbon/20 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="flex justify-between items-end mt-2">
                                                <div className="flex items-center bg-white rounded-full border border-carbon/5 px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:text-primary transition-colors">
                                                        <Minus className="w-3.5 h-3.5" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:text-primary transition-colors">
                                                        <Plus className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <p className="font-black text-carbon">₹{item.totalPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Summary */}
                        {cart.length > 0 && (
                            <div className="p-8 bg-white border-t border-carbon/5 space-y-6">
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-carbon/60">Subtotal</span>
                                    <span className="font-black text-carbon text-2xl">₹{cartTotal}</span>
                                </div>

                                {isBelowMinimum && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center text-red-500 text-xs font-bold bg-red-50 py-3 rounded-xl border border-red-100"
                                    >
                                        Minimum order amount is ₹149. Add more items!
                                    </motion.p>
                                )}

                                <button
                                    onClick={handleCheckout}
                                    disabled={isBelowMinimum}
                                    className={`w-full py-5 rounded-[20px] font-black text-lg transition-all flex items-center justify-center gap-3 group ${isBelowMinimum
                                            ? 'bg-carbon/10 text-carbon/20 cursor-not-allowed'
                                            : 'bg-[#25D366] text-white shadow-xl shadow-green-500/20 hover:scale-[1.02] active:scale-95'
                                        }`}
                                >
                                    <MessageSquare className={`w-6 h-6 fill-current ${!isBelowMinimum && 'group-hover:rotate-12 transition-transform'}`} />
                                    Complete Order on WhatsApp
                                </button>
                                <p className="text-[10px] text-center text-carbon/30 uppercase tracking-[2px]">
                                    No account needed • Direct communication
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
