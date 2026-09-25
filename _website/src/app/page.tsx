'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import ProductSection, { Product } from '@/components/ProductSection';
import CustomKitConfigurator from '@/components/CustomKitConfigurator';
import TestimonialsSection from '@/components/TestimonialsSection';
import CartDrawer, { CartItem } from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: 'p1',
        name: 'Sampoorna Navratri & Havan Pooja Thali Kit',
        hindiName: 'सम्पूर्ण नवरात्रि एवं हवन पूजा थाली किट',
        category: 'pooja-kits',
        price: 1299,
        originalPrice: 1999,
        rating: 5,
        reviewsCount: 482,
        image: '/images/pooja_kit.jpg',
        badge: 'BESTSELLER',
        description: 'Includes Brass Thali, Gangajal, Kesar Chandan, Organic Dhoop, Kumkum & Akshat Rice.'
      },
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(['p2']);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Add to cart handler
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // Quantity update handler
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  // Remove item handler
  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  // Toggle wishlist handler
  const handleToggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#2D241E] flex flex-col justify-between">
      <div>
        <Navbar 
          cartCount={totalCartCount}
          wishlistCount={wishlist.length}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <HeroSection />

        <CategorySection />

        <ProductSection 
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />

        <CustomKitConfigurator 
          onAddToCart={handleAddToCart}
        />

        <TestimonialsSection />
      </div>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </main>
  );
}
