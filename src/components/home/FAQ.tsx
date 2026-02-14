"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
    {
        q: "How long is delivery?",
        a: "We dispatch all orders within 24 hours. Delivery typically takes 3-5 business days across India depending on your location."
    },
    {
        q: "Can I return custom items?",
        a: "Since items are made specifically for you, we only offer replacements for manufacturing defects or shipping damage within 7 days of delivery."
    },
    {
        q: "What is your printing quality?",
        a: "We use high-grade DTF and sublimation printing that lasts 100+ washes without fading or cracking, ensuring your designs look sharp for a long time."
    },
    {
        q: "How do I track my order?",
        a: "Once dispatched, you'll receive a tracking ID via WhatsApp and Email instantly. You can also use our Track Order page with your order ID."
    }
];

export const FAQ = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black font-heading mb-4 tracking-tight">
                        Got Questions? <span className="text-primary">Answers.</span>
                    </h2>
                    <p className="text-carbon/40 font-bold uppercase text-[10px] tracking-[4px]">Knowledge Base</p>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, i) => (
                        <details
                            key={i}
                            className="group glass-morphism rounded-[32px] border border-carbon/5 overflow-hidden transition-all duration-300 open:shadow-premium"
                        >
                            <summary className="p-8 cursor-pointer flex justify-between items-center font-black text-lg select-none list-none text-carbon">
                                {item.q}
                                <div className="h-10 w-10 rounded-2xl bg-primary/5 flex items-center justify-center group-open:bg-primary group-open:text-white transition-all">
                                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                                </div>
                            </summary>
                            <div className="px-8 pb-8 pt-0 text-carbon/60 font-medium leading-relaxed">
                                <div className="h-[1px] w-full bg-carbon/5 mb-6" />
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
