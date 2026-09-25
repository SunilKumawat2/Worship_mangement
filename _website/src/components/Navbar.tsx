'use client';

import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Sparkles, 
  Flame, 
  Menu, 
  X, 
  ChevronDown,
  Phone,
  ShieldCheck,
  Truck
} from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, wishlistCount, onOpenCart }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#3B0606] via-[#200303] to-[#3B0606] text-[#FBBF24] py-2 px-4 text-xs sm:text-sm font-medium border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#F59E0B] animate-diya" />
            <span>🪔 <strong>Navratri & Festival Special:</strong> 100% Pure & Vedic Certified Sampoorna Pooja Kits</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs text-[#FDE68A]">
            <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-[#F59E0B]" /> Free Express Shipping &gt; ₹599</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" /> Temple Blessed Products</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-[#F59E0B]" /> Helpline: +91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B0606] to-[#200303] border-2 border-[#D4AF37] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-6 h-6 text-[#F59E0B] animate-diya" />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-[#3B0606] tracking-wider block leading-none">
                  PAVITRA<span className="text-[#B45309]">BHAKTI</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#B45309] font-medium uppercase font-hindi block mt-0.5">
                  पवित्रता और अखंड भक्ति
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#374151]">
              <a href="#hero" className="text-[#B45309] hover:text-[#3B0606] transition-colors">Home</a>
              
              <div className="relative group cursor-pointer py-2">
                <span className="flex items-center gap-1 hover:text-[#B45309] transition-colors">
                  Categories <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />
                </span>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 hidden group-hover:block w-64 bg-white rounded-xl shadow-2xl border border-[#F3F4F6] p-3 z-50 animate-fadeIn">
                  <a href="#categories" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#FFFBEB] text-gray-700 hover:text-[#B45309] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-xs">🪔</span>
                    <div>
                      <p className="font-semibold text-xs">Sampoorna Pooja Kits</p>
                      <p className="text-[10px] text-gray-500">All-in-one Ritual Boxes</p>
                    </div>
                  </a>
                  <a href="#categories" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#FFFBEB] text-gray-700 hover:text-[#B45309] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-xs">🔔</span>
                    <div>
                      <p className="font-semibold text-xs">Pure Brassware</p>
                      <p className="text-[10px] text-gray-500">Handcrafted Diyas & Thali</p>
                    </div>
                  </a>
                  <a href="#categories" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#FFFBEB] text-gray-700 hover:text-[#B45309] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-xs">🌿</span>
                    <div>
                      <p className="font-semibold text-xs">Organic Dhoop & Incense</p>
                      <p className="text-[10px] text-gray-500">Natural Herbs & Sugandh</p>
                    </div>
                  </a>
                  <a href="#categories" className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#FFFBEB] text-gray-700 hover:text-[#B45309] transition-colors">
                    <span className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-xs">☸️</span>
                    <div>
                      <p className="font-semibold text-xs">Rudraksha & Sacred Malas</p>
                      <p className="text-[10px] text-gray-500">100% Authentic Certified</p>
                    </div>
                  </a>
                </div>
              </div>

              <a href="#bestsellers" className="hover:text-[#B45309] transition-colors flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" /> Bestsellers
              </a>
              <a href="#custom-kit" className="hover:text-[#B45309] transition-colors">Build Custom Kit</a>
              <a href="#testimonials" className="hover:text-[#B45309] transition-colors">Devotee Reviews</a>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative w-64 lg:w-72">
              <input 
                type="text" 
                placeholder="Search Pure Brass Diya, Agarbatti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-2 pl-10 pr-4 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
            </div>

            {/* User Action Icons */}
            <div className="flex items-center gap-4">
              <button 
                aria-label="Wishlist"
                className="p-2 text-gray-700 hover:text-[#B45309] relative transition-colors rounded-full hover:bg-gray-100"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#EF4444] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button 
                onClick={onOpenCart}
                className="p-2 text-[#3B0606] hover:text-[#B45309] relative transition-colors bg-[#FEF3C7] rounded-full hover:bg-[#FDE68A] shadow-sm"
              >
                <ShoppingBag className="w-5 h-5 text-[#3B0606]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#B45309] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>

              <button className="hidden sm:flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-[#3B0606] to-[#200303] text-[#FBBF24] border border-[#D4AF37]/50 px-4 py-2 rounded-full hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <User className="w-3.5 h-3.5" /> Devotee Login
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#3B0606]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFDF7] border-t border-gray-100 px-4 pt-3 pb-6 space-y-3">
            <div className="relative mb-3">
              <input 
                type="text" 
                placeholder="Search Brass Diya, Havan Kit..."
                className="w-full bg-[#F3F4F6] border border-gray-200 rounded-lg py-2 pl-9 pr-3 text-xs text-gray-800"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <a href="#hero" className="block text-sm font-semibold text-[#B45309] py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#categories" className="block text-sm font-semibold text-gray-700 py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Pooja Categories</a>
            <a href="#bestsellers" className="block text-sm font-semibold text-gray-700 py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Bestsellers</a>
            <a href="#custom-kit" className="block text-sm font-semibold text-gray-700 py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Build Custom Kit</a>
            <a href="#testimonials" className="block text-sm font-semibold text-gray-700 py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Devotee Reviews</a>
          </div>
        )}
      </nav>
    </header>
  );
}
