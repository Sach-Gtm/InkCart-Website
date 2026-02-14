"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* Left Side: Branding/Visual */}
            <div className="hidden md:flex md:w-1/2 bg-carbon relative overflow-hidden items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 text-center space-y-8 p-12">
                    <div className="relative h-24 w-24 mx-auto mb-8">
                        <Image
                            src="/images/logo/per.png"
                            alt="InkCart Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-5xl font-black text-white leading-tight">
                        Join the <span className="text-primary italic">Creative</span> Revolution.
                    </h2>
                    <p className="text-white/40 text-lg max-w-sm mx-auto">
                        Access your custom orders, save your designs, and track your printing journey.
                    </p>
                </div>

                {/* Floating Mockup Partials */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 h-64 w-64 bg-primary/10 rounded-full blur-3xl"
                />
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-20">
                <div className="w-full max-w-md space-y-10">
                    <div className="space-y-2">
                        <Link href="/" className="md:hidden block mb-8">
                            <span className="text-3xl font-black tracking-tighter text-carbon">
                                INK<span className="text-primary">CART</span>
                            </span>
                        </Link>
                        <h1 className="text-4xl font-black text-carbon">Welcome Back</h1>
                        <p className="text-carbon/40 font-medium">Log in to manage your custom printing orders.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon/20 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-4 pl-12 pr-6 rounded-2xl bg-[#F8F9FA] border-2 border-carbon/5 focus:border-primary focus:outline-none font-bold transition-all"
                                    required
                                />
                            </div>

                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon/20 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full py-4 pl-12 pr-6 rounded-2xl bg-[#F8F9FA] border-2 border-carbon/5 focus:border-primary focus:outline-none font-bold transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm font-bold">
                            <label className="flex items-center gap-2 text-carbon/40 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-carbon/10 accent-primary" />
                                Remember me
                            </label>
                            <button type="button" className="text-primary hover:underline">Forgot Password?</button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-carbon text-white py-5 rounded-[20px] font-black text-lg shadow-xl shadow-carbon/10 hover:bg-carbon/90 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                        >
                            Sign In
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-carbon/5"></div></div>
                        <div className="relative flex justify-center text-xs uppercase font-black tracking-widest text-carbon/20"><span className="bg-white px-4">Or continue with</span></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <button className="flex items-center justify-center gap-3 py-4 border-2 border-carbon/5 rounded-2xl font-bold hover:bg-carbon/5 transition-colors">
                            <Github className="w-5 h-5" />
                            GitHub
                        </button>
                    </div>

                    <p className="text-center text-sm font-bold text-carbon/40">
                        Don't have an account? <button className="text-primary hover:underline">Create Account</button>
                    </p>
                </div>
            </div>
        </div>
    );
}
