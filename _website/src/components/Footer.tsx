'use client';

import React from 'react';
import { Flame, Send, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#200303] text-white border-t border-[#D4AF37]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter & Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#3B0606] via-[#200303] to-[#3B0606] border border-[#D4AF37]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#FBBF24]">
              Join Our Divine Devotee Circle
            </h3>
            <p className="text-xs text-gray-300">
              Subscribe to receive daily Panchang, auspicious Mahurat timings & special festival discounts.
            </p>
          </div>

          <div className="flex w-full lg:w-auto max-w-md gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address..."
              className="w-full bg-white/10 border border-[#D4AF37]/40 rounded-full px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#FBBF24]"
            />
            <button className="px-6 py-3 bg-gold-gradient text-[#200303] font-bold text-xs rounded-full hover:brightness-110 shrink-0 flex items-center gap-1.5 shadow-lg">
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-gray-300">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B0606] to-[#200303] border border-[#D4AF37] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#F59E0B] animate-diya" />
              </div>
              <span className="font-heading text-xl font-bold text-[#FBBF24]">
                PAVITRABHAKTI
              </span>
            </div>

            <p className="leading-relaxed text-gray-400">
              Dedicated to delivering 100% pure, organic, and temple-blessed pooja samagri, brassware, and ritual kits across India with utmost devotion.
            </p>

            <div className="flex items-center gap-2 text-[#FBBF24] font-semibold text-xs pt-1">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Vedic Certified Purity</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider text-[#FBBF24]">
              Sacred Categories
            </h4>
            <ul className="space-y-2">
              <li><a href="#categories" className="hover:text-[#FBBF24] transition-colors">Sampoorna Pooja Kits</a></li>
              <li><a href="#categories" className="hover:text-[#FBBF24] transition-colors">Handcrafted Brassware</a></li>
              <li><a href="#categories" className="hover:text-[#FBBF24] transition-colors">Organic Flower Dhoop</a></li>
              <li><a href="#categories" className="hover:text-[#FBBF24] transition-colors">Original Ganga Jal</a></li>
              <li><a href="#categories" className="hover:text-[#FBBF24] transition-colors">Certified Rudraksha</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider text-[#FBBF24]">
              Devotee Support
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#FBBF24] transition-colors">Track Order Status</a></li>
              <li><a href="#hero" className="hover:text-[#FBBF24] transition-colors">Shipping & Returns</a></li>
              <li><a href="#custom-kit" className="hover:text-[#FBBF24] transition-colors">Custom Bulk Havan Orders</a></li>
              <li><a href="#testimonials" className="hover:text-[#FBBF24] transition-colors">Devotee Testimonials</a></li>
              <li><a href="#hero" className="hover:text-[#FBBF24] transition-colors">Privacy Policy & Terms</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider text-[#FBBF24]">
              Sacred Helpline
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Vedic Bhawan, Sector 18, Temple Road, Varanasi, UP - 221001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>+91 98765 43210 / 0542 2345678</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>sewa@pavitrabhakti.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© 2026 PavitraBhakti Store. All Sacred Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Devotees across the World
          </p>
        </div>

      </div>
    </footer>
  );
}
