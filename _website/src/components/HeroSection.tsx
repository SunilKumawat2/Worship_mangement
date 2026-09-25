'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Sparkles, Truck, Star, ArrowRight, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[85vh] bg-[#200303] text-white flex items-center overflow-hidden">
      {/* Background Image Overlay with Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_pooja_banner.jpg" 
          alt="Sacred Indian Pooja Room Setup" 
          fill
          priority
          className="object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0202] via-[#200303]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#200303] via-transparent to-[#1A0202]/50 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Divine Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B0606]/80 border border-[#D4AF37]/50 text-[#FBBF24] text-xs font-semibold backdrop-blur-md shadow-lg animate-float">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span>पवित्रता और अखंड श्रद्धा का प्रतीक | 100% Pure Organic Samagri</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Bring Divine Energy & Purity To Your <span className="text-gold-gradient drop-shadow-md">Sacred Space</span>
            </h1>

            {/* Hindi & English Description */}
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl font-light leading-relaxed">
              Discover authentic <strong>Sampoorna Pooja Kits</strong>, handcrafted <strong>Pure Brass Diyas</strong>, organic flower-based <strong>Dhoop Sticks</strong>, and certified divine essentials blessed for your daily rituals and festive celebrations.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#bestsellers" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-gradient text-[#200303] font-bold text-sm shadow-2xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Sacred Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#custom-kit" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[#FDE68A] font-semibold text-sm hover:bg-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-[#F59E0B] animate-diya" />
                <span>Build Festival Pooja Kit</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#D4AF37]/20 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-[#FBBF24]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-base text-white">4.9/5</span>
                </div>
                <span className="text-[11px] text-gray-300">50,000+ Happy Devotees</span>
              </div>

              <div className="flex flex-col items-center lg:items-start border-x border-[#D4AF37]/20 px-2">
                <div className="flex items-center gap-1 text-[#FBBF24]">
                  <Award className="w-4 h-4" />
                  <span className="font-bold text-base text-white">100% Pure</span>
                </div>
                <span className="text-[11px] text-gray-300">Vedic & Chemical Free</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-[#FBBF24]">
                  <Truck className="w-4 h-4" />
                  <span className="font-bold text-base text-white">24h Express</span>
                </div>
                <span className="text-[11px] text-gray-300">Pan India Safe Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Floating Banner Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative mx-auto w-full max-w-md p-6 rounded-3xl bg-gradient-to-b from-[#3B0606]/90 to-[#200303]/90 border border-[#D4AF37]/40 shadow-2xl backdrop-blur-xl animate-glow">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-inner">
                <Image 
                  src="/images/pooja_kit.jpg" 
                  alt="Sampoorna Sacred Festival Pooja Kit" 
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-[#B45309] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                  ⚡ 35% OFF SPECIAL
                </div>
              </div>

              <div className="pt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#FBBF24] tracking-widest uppercase">Festival Bestseller</span>
                  <div className="flex items-center gap-1 text-xs text-[#F59E0B]">
                    {"★".repeat(5)} <span className="text-gray-300 text-[10px]">(482 reviews)</span>
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-white">
                  Sampoorna Navratri & Havan Pooja Thali Kit
                </h3>

                <p className="text-xs text-gray-300 line-clamp-2">
                  Complete set including Pure Brass Thali, Gangajal, Pure Chandan, Organic Dhoop, Kumkum, Cow Ghee & Akshat Rice.
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/20">
                  <div>
                    <span className="text-xs text-gray-400 line-through mr-2">₹1,999</span>
                    <span className="text-xl font-extrabold text-[#FBBF24]">₹1,299</span>
                  </div>
                  <a 
                    href="#bestsellers" 
                    className="px-4 py-2 rounded-lg bg-gold-gradient text-[#200303] text-xs font-bold hover:brightness-110 transition-all"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
