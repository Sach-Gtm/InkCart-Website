"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-carbon text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <span className="text-3xl font-black tracking-tighter">
                            INK<span className="text-primary">CART</span>
                        </span>
                        <p className="text-white/50 text-lg leading-relaxed max-w-sm">
                            The simplest way to order custom high-quality merchandise in India. Designed by you, delivered by us.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                                <MessageCircle className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#categories" className="hover:text-white transition-colors">Collections</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Bulk Orders</Link></li>
                            <li><Link href="/track" className="hover:text-white transition-colors">Track Order</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact WhatsApp</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 flex flex-col md:row justify-between items-center text-sm text-white/30 space-y-4 md:space-y-0 text-center md:text-left">
                    <p>© 2026 InkCart. All Rights Reserved.</p>
                    <div className="flex space-x-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
