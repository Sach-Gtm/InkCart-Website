"use client";

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Search, Package, Clock, CheckCircle } from 'lucide-react';
import { CartDrawer } from '@/components/cart/CartDrawer';

export default function TrackOrder() {
    const [orderId, setOrderId] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);
        setTimeout(() => setIsSearching(false), 1500);
    };

    return (
        <main className="min-h-screen bg-[#F8F9FA]">
            <Header onOpenCart={() => setIsCartOpen(true)} />

            <div className="max-w-3xl mx-auto px-4 py-20">
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-premium text-center space-y-8">
                    <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Package className="w-10 h-10 text-primary" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl font-black text-carbon">Track Your Order</h1>
                        <p className="text-carbon/40">Enter your order ID sent on WhatsApp to see status.</p>
                    </div>

                    <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Order ID (e.g. INK-1234)"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            className="w-full py-5 px-8 rounded-2xl bg-[#F8F9FA] border-2 border-carbon/5 focus:border-primary focus:outline-none font-bold text-center"
                        />
                        <button
                            type="submit"
                            className="mt-4 w-full bg-carbon text-white py-5 rounded-2xl font-black shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            {isSearching ? <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Search className="w-5 h-5" /> Track Now</>}
                        </button>
                    </form>

                    {/* Placeholder Status */}
                    <div className="pt-8 border-t border-carbon/5 grid grid-cols-3 gap-4 grayscale opacity-30">
                        <div className="space-y-2 text-center">
                            <CheckCircle className="w-6 h-6 mx-auto" />
                            <p className="text-[10px] font-bold uppercase tracking-widest">Ordered</p>
                        </div>
                        <div className="space-y-2 text-center">
                            <Clock className="w-6 h-6 mx-auto" />
                            <p className="text-[10px] font-bold uppercase tracking-widest">Processing</p>
                        </div>
                        <div className="space-y-2 text-center">
                            <Package className="w-6 h-6 mx-auto" />
                            <p className="text-[10px] font-bold uppercase tracking-widest">Shipped</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </main>
    );
}
