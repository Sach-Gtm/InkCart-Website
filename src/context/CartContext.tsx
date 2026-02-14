"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, MINIMUM_ORDER } from '@/lib/constants';

export interface CartItem {
  id: string;
  name: string;
  basePrice: number;
  customizationFee: number;
  totalPrice: number;
  color: string;
  size: string;
  customText?: string;
  customImage?: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isBelowMinimum: boolean;
  generateWhatsAppLink: (directMessage?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'id' | 'totalPrice'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const totalPrice = (item.basePrice + (item.customizationFee || 0)) * item.quantity;
    setCart((prev) => [...prev, { ...item, id, totalPrice }]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity, totalPrice: (item.basePrice + (item.customizationFee || 0)) * quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const isBelowMinimum = cartTotal < MINIMUM_ORDER;

  const generateWhatsAppLink = (directMessage?: string) => {
    if (directMessage) return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(directMessage)}`;

    const messageHeader = "Hello InkCart! 🚀%0AI’d like to place an order:%0A%0A";
    const itemsList = cart.map(item => {
      return `---------------------------%0A` +
        `👕 *Item:* ${item.name}%0A` +
        `🎨 *Options:* Color: ${item.color}, Size: ${item.size}%0A` +
        (item.customText ? `✍️ *Customization:* ${item.customText}%0A` : "") +
        `📦 *Quantity:* ${item.quantity}%0A` +
        `💰 *Price:* ₹${item.totalPrice}%0A`;
    }).join("%0A");

    const footer = `%0A---------------------------%0A✨ *Total Payable: ₹${cartTotal}*%0A%0APlease confirm my order!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${messageHeader}${itemsList}${footer}`;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
      isBelowMinimum,
      generateWhatsAppLink
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
