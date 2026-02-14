"use client";

import React from 'react';
import { LayoutDashboard, Users, ShoppingBag, TrendingUp, Settings } from 'lucide-react';

export default function VendorDashboard() {
    const stats = [
        { label: 'Today Orders', value: '12', icon: ShoppingBag, color: 'text-blue-600' },
        { label: 'Pending WhatsApp', value: '5', icon: Users, color: 'text-green-600' },
        { label: 'Revenue (₹)', value: '₹14,580', icon: TrendingUp, color: 'text-purple-600' },
    ];

    return (
        <div className="flex min-h-screen bg-[#F0F2F5]">
            {/* Sidebar */}
            <aside className="w-64 bg-carbon p-8 flex flex-col space-y-12">
                <span className="text-2xl font-black text-white px-4">
                    INK<span className="text-primary">ADMIN</span>
                </span>
                <nav className="flex-1 space-y-2">
                    {['Dashboard', 'Orders', 'Products', 'Customizations', 'Settings'].map(tab => (
                        <button key={tab} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${tab === 'Dashboard' ? 'bg-primary text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                            {tab}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 p-12 overflow-y-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-black text-carbon">Overview</h1>
                    <div className="h-10 w-10 bg-white rounded-full border border-carbon/10"></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map(s => (
                        <div key={s.label} className="bg-white p-8 rounded-3xl shadow-sm border border-carbon/5 flex items-center justify-between">
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-carbon/40 uppercase tracking-widest">{s.label}</p>
                                <p className="text-3xl font-black text-carbon">{s.value}</p>
                            </div>
                            <div className={`h-12 w-12 rounded-2xl bg-[#F8F9FA] flex items-center justify-center ${s.color}`}>
                                <s.icon className="w-6 h-6" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tables */}
                <div className="bg-white rounded-[32px] border border-carbon/5 overflow-hidden">
                    <div className="p-8 border-b border-carbon/5 flex justify-between items-center">
                        <h2 className="text-xl font-black text-carbon">Incoming WhatsApp Leads</h2>
                        <button className="text-sm font-bold text-primary">View All</button>
                    </div>
                    <table className="w-full text-left">
                        <thead className="bg-[#F8F9FA] text-[10px] font-black text-carbon/40 uppercase tracking-[2px]">
                            <tr>
                                <th className="px-8 py-4">Product</th>
                                <th className="px-8 py-4">Customer</th>
                                <th className="px-8 py-4">Customizations</th>
                                <th className="px-8 py-4">Status</th>
                                <th className="px-8 py-4">Price</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-carbon/5">
                            {[1, 2, 3, 4].map(i => (
                                <tr key={i} className="hover:bg-primary/5 transition-colors group">
                                    <td className="px-8 py-6 font-bold text-carbon">Custom T-Shirt</td>
                                    <td className="px-8 py-6 text-carbon/60">+91 98*** **{i}21</td>
                                    <td className="px-8 py-6">
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 bg-carbon/5 rounded text-[10px] font-bold">Image</span>
                                            <span className="px-2 py-0.5 bg-carbon/5 rounded text-[10px] font-bold">Text</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-black uppercase">Pending</span>
                                    </td>
                                    <td className="px-8 py-6 font-black text-carbon">₹{499 + i * 100}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
