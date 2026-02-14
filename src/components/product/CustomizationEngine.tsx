"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Upload, Plus, ChevronRight, Check, Type, ShieldCheck, Lock, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { COLORS, SIZES } from '@/lib/constants';

export const CustomizationEngine = ({ product, onBack }: { product: any, onBack: () => void }) => {
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState(COLORS[0]);
    const [selectedSize, setSelectedSize] = useState('M');
    const [customText, setCustomText] = useState('');
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const basePrice = parseInt(product.price.toString().replace('₹', '')) || 499;
    const customizationFee = (customText ? 50 : 0) + (uploadedImage ? 100 : 0);
    const totalPrice = basePrice + customizationFee;

    const handleColorChange = (color: typeof COLORS[0]) => {
        setIsLoading(true);
        setSelectedColor(color);
        setTimeout(() => setIsLoading(false), 800);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUploadedImage(url);
        }
    };

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart({
            name: `Custom ${product.title}`,
            basePrice,
            customizationFee,
            color: selectedColor.name,
            size: selectedSize,
            customText,
            customImage: uploadedImage || undefined,
            quantity: 1,
            image: product.image
        });

        setTimeout(() => {
            setIsAdding(false);
            onBack();
        }, 1000);
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-8 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={onBack}
                    className="inline-flex items-center text-carbon/40 hover:text-primary transition-colors font-bold mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Collection
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Preview Window */}
                    <div className="space-y-6">
                        <motion.div
                            className="bg-white rounded-[48px] aspect-square p-12 shadow-floating relative flex items-center justify-center overflow-hidden border border-carbon/5"
                            animate={{ backgroundColor: selectedColor.value }}
                            transition={{ duration: 0.8 }}
                        >
                            {isLoading && (
                                <div className="absolute inset-0 z-10 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}

                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt="Mockup"
                                    fill
                                    className={`object-contain transition-all duration-700 ${selectedColor.name !== 'White' ? 'brightness-90 contrast-110' : ''}`}
                                />

                                {/* Interactive Design Area */}
                                <div className="absolute inset-0 flex items-center justify-center p-20 pointer-events-none">
                                    <div className="w-full h-full relative pointer-events-auto border-2 border-dashed border-primary/0 hover:border-primary/20 transition-all rounded-3xl">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                            {uploadedImage && (
                                                <motion.div
                                                    drag
                                                    dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
                                                    className="cursor-move mix-blend-multiply opacity-90 select-none touch-none"
                                                >
                                                    <div className="relative w-32 h-32">
                                                        <Image src={uploadedImage} alt="Custom" fill className="object-contain pointer-events-none shadow-sm" />
                                                    </div>
                                                </motion.div>
                                            )}
                                            {customText && (
                                                <motion.p
                                                    drag
                                                    dragConstraints={{ left: -120, right: 120, top: -120, bottom: 120 }}
                                                    className={`text-3xl font-black cursor-move select-none touch-none ${['Black', 'Navy'].includes(selectedColor.name) ? 'text-white' : 'text-carbon'} drop-shadow-sm px-4`}
                                                >
                                                    {customText}
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Live Badge */}
                            <div className="absolute bottom-6 right-8 flex items-center gap-2 px-4 py-1.5 bg-green-500/10 text-green-600 rounded-full border border-green-500/10">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest">Live Preview</span>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square bg-white rounded-3xl border border-carbon/5 shadow-sm overflow-hidden p-2 opacity-30">
                                    <div className="relative w-full h-full">
                                        <Image src={product.image} alt="Thumbnail" fill className="object-contain" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Controls */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-red-100 text-red-600 text-[10px] font-black uppercase rounded-lg flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                                    Hurry! Only 5 left in stock
                                </span>
                            </div>
                            <h1 className="text-4xl font-black text-carbon mb-2 font-heading tracking-tight">Custom {product.title}</h1>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-black text-primary font-plus">₹{totalPrice}</span>
                                <span className="text-carbon/20 line-through font-bold">₹{totalPrice + 300}</span>
                                <div className="px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-black rounded-lg uppercase tracking-widest">
                                    Save 40% Today
                                </div>
                            </div>
                        </div>

                        <hr className="border-carbon/5" />

                        {/* Color Picker */}
                        <div>
                            <p className="text-xs font-black uppercase text-carbon/30 tracking-[2px] mb-4 font-plus">Color: {selectedColor.name}</p>
                            <div className="flex gap-4">
                                {COLORS.map(color => (
                                    <button
                                        key={color.name}
                                        onClick={() => handleColorChange(color)}
                                        className={`h-12 w-12 rounded-full border-4 transition-all ${color.border} ${selectedColor.name === color.name ? 'border-primary scale-110 shadow-lg' : 'hover:scale-105 opacity-80'}`}
                                        style={{ backgroundColor: color.value }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-xs font-black uppercase text-carbon/30 tracking-[2px] font-plus">Size: {selectedSize}</p>
                                <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Size Chart</button>
                            </div>
                            <div className="grid grid-cols-5 gap-3">
                                {SIZES.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-4 rounded-2xl border-2 font-black transition-all ${selectedSize === size ? 'bg-carbon text-white border-carbon shadow-xl' : 'bg-white text-carbon/40 border-carbon/5 hover:border-carbon/20'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Customization Inputs */}
                        <div className="space-y-4">
                            <p className="text-xs font-black uppercase text-carbon/30 tracking-[2px] font-plus">Design your product</p>

                            <div className="relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2">
                                    <Type className="w-5 h-5 text-carbon/20 group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Add your slogan (+₹50)"
                                    value={customText}
                                    onChange={(e) => setCustomText(e.target.value)}
                                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white border-2 border-carbon/5 focus:border-primary focus:outline-none font-bold placeholder:text-carbon/20 transition-all shadow-sm"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="file"
                                    id="file-upload"
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className={`w-full py-10 border-2 border-dashed rounded-[32px] flex flex-col items-center justify-center cursor-pointer transition-all ${uploadedImage ? 'border-green-500 bg-green-50' : 'border-carbon/10 hover:border-primary hover:bg-white hover:shadow-xl group'}`}
                                >
                                    {uploadedImage ? (
                                        <>
                                            <Check className="w-10 h-10 text-green-500 mb-2" />
                                            <span className="font-bold text-green-600">Logo Uploaded! Click to Change</span>
                                        </>
                                    ) : (
                                        <>
                                            <Upload className="w-10 h-10 text-carbon/20 mb-2 group-hover:text-primary transition-colors" />
                                            <span className="font-bold text-carbon/40 group-hover:text-carbon">Upload Image Logo (+₹100)</span>
                                            <span className="text-[10px] text-carbon/20 uppercase mt-1">PNG or JPG supported</span>
                                        </>
                                    )}
                                </label>
                            </div>
                        </div>

                        {/* Final Action */}
                        <div className="pt-4 space-y-8">
                            <button
                                onClick={handleAddToCart}
                                disabled={isAdding}
                                className="w-full bg-primary text-white py-6 rounded-[32px] font-black text-xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:bg-carbon/20"
                            >
                                {isAdding ? (
                                    <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Add to Custom Cart
                                        <ChevronRight className="w-6 h-6" />
                                    </>
                                )}
                            </button>

                            {/* Trust Badge Row */}
                            <div className="grid grid-cols-3 gap-2 py-8 border-t border-carbon/5">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-carbon/20" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-carbon/30 tracking-widest">Premium Quality</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center">
                                        <Lock className="w-6 h-6 text-carbon/20" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-carbon/30 tracking-widest">Secure Order</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center">
                                        <RotateCcw className="w-6 h-6 text-carbon/20" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-carbon/30 tracking-widest">7-Day Replace</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
