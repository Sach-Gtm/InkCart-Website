"use client";

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { SocialProofBar } from '@/components/home/SocialProofBar';
import { Gallery } from '@/components/home/Gallery';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CustomizationEngine } from '@/components/product/CustomizationEngine';
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';
import { RecentSales } from '@/components/ui/RecentSales';
import { CATEGORY_DATA } from '@/lib/constants';
import { Lookbook } from '@/components/home/Lookbook';
import { FAQ } from '@/components/home/FAQ';
import { HowItWorks } from '@/components/home/HowItWorks';

type ViewState = 'HOME' | 'GALLERY' | 'CUSTOMIZE';

export default function Home() {
  const [view, setView] = useState<ViewState>('HOME');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigateToGallery = (category: string) => {
    setSelectedCategory(category);
    setView('GALLERY');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCustomize = (image: string) => {
    if (!selectedCategory) return;

    setSelectedProduct({
      title: selectedCategory,
      image: image,
      price: CATEGORY_DATA[selectedCategory].price
    });
    setView('CUSTOMIZE');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setView('HOME');
    setSelectedCategory(null);
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Header onOpenCart={() => setIsCartOpen(true)} onLogoClick={goHome} />

      {view === 'HOME' && (
        <>
          <Hero />
          <HowItWorks />
          <SocialProofBar />
          <CategoryGrid onSelectCategory={navigateToGallery} />
          <Lookbook />
          <FAQ />
        </>
      )}

      {view === 'GALLERY' && selectedCategory && (
        <Gallery
          category={selectedCategory}
          onBack={goHome}
          onSelect={navigateToCustomize}
        />
      )}

      {view === 'CUSTOMIZE' && selectedProduct && (
        <CustomizationEngine
          product={selectedProduct}
          onBack={() => setView('GALLERY')}
        />
      )}

      <Footer />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppFAB />
      <RecentSales />
    </main>
  );
}
