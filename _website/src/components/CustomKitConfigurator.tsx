'use client';

import React, { useState } from 'react';
import { Flame, Check, Sparkles, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Product } from './ProductSection';

const kitItemsData = [
  { id: 'k1', name: 'Handcrafted Pure Brass Aarti Thali', price: 499, defaultSelected: true, icon: '🪔' },
  { id: 'k2', name: 'Original Gangotri Ganga Jal (250ml)', price: 149, defaultSelected: true, icon: '🏺' },
  { id: 'k3', name: 'Organic Flower Dhoop Cones (Pack of 12)', price: 120, defaultSelected: true, icon: '🌿' },
  { id: 'k4', name: 'Pure Mysore Sandalwood Chandan Paste', price: 99, defaultSelected: true, icon: '✨' },
  { id: 'k5', name: 'Vedic Roli Kumkum & Haldi Set', price: 79, defaultSelected: true, icon: '🔴' },
  { id: 'k6', name: 'Bhimseni Pure Camphor (100g)', price: 149, defaultSelected: false, icon: '❄️' },
  { id: 'k7', name: 'A2 Desi Cow Ghee Diya Wicks (Pack of 30)', price: 199, defaultSelected: false, icon: '🔥' },
  { id: 'k8', name: 'Vrindavan Sacred Tulsi Beads Mala', price: 299, defaultSelected: false, icon: '☸️' }
];

interface ConfiguratorProps {
  onAddToCart: (product: Product) => void;
}

export default function CustomKitConfigurator({ onAddToCart }: ConfiguratorProps) {
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({
    k1: true,
    k2: true,
    k3: true,
    k4: true,
    k5: true
  });
  const [selectedOccasion, setSelectedOccasion] = useState('Navratri Special');

  const toggleItem = (id: string) => {
    setSelectedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalPrice = kitItemsData.reduce((sum, item) => {
    return selectedItems[item.id] ? sum + item.price : sum;
  }, 0);

  const selectedCount = Object.values(selectedItems).filter(Boolean).length;

  const handleAddCustomKit = () => {
    const customKitProduct: Product = {
      id: `custom-kit-${Date.now()}`,
      name: `Customized ${selectedOccasion} Pooja Kit (${selectedCount} items)`,
      hindiName: 'कस्टम सम्पूर्ण पूजा किट',
      category: 'pooja-kits',
      price: totalPrice,
      originalPrice: Math.round(totalPrice * 1.3),
      rating: 5.0,
      reviewsCount: 1,
      image: '/images/pooja_kit.jpg',
      badge: 'CUSTOM KIT',
      description: 'Handpicked custom pooja samagri bundle created by you.'
    };
    onAddToCart(customKitProduct);
  };

  return (
    <section id="custom-kit" className="py-20 bg-gradient-to-b from-[#200303] via-[#3B0606] to-[#200303] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/50 text-[#FBBF24] text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Interactive Custom Builder</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Build Your Sampoorna Ritual Kit
          </h2>
          <p className="text-gray-300 text-sm">
            Customize your pooja thali by selecting exact pure samagri items needed for your home rituals.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Item Selection Grid */}
          <div className="lg:col-span-8 bg-white/5 border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
            
            {/* Festival Selector Buttons */}
            <div>
              <label className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider block mb-3">
                1. Select Ritual Occasion:
              </label>
              <div className="flex flex-wrap gap-2">
                {['Navratri Special', 'Satyanarayan Katha', 'Griha Pravesh', 'Daily Puja', 'Diwali Havan'].map((occ) => (
                  <button
                    key={occ}
                    onClick={() => setSelectedOccasion(occ)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedOccasion === occ
                        ? 'bg-gold-gradient text-[#200303] shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Checkbox Grid */}
            <div>
              <label className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider block mb-3">
                2. Pick Pure Samagri Ingredients:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kitItemsData.map((item) => {
                  const isChecked = !!selectedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                        isChecked 
                          ? 'bg-[#3B0606]/80 border-[#D4AF37] shadow-lg scale-[1.01]' 
                          : 'bg-white/5 border-white/10 hover:border-white/30 text-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <p className={`text-xs font-bold ${isChecked ? 'text-white' : 'text-gray-300'}`}>
                            {item.name}
                          </p>
                          <p className="text-[11px] text-[#FDE68A]">₹{item.price}</p>
                        </div>
                      </div>

                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isChecked ? 'bg-gold-gradient text-[#200303]' : 'border border-gray-500'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#3B0606] to-[#200303] border-2 border-[#D4AF37] rounded-3xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4">
              <div>
                <h3 className="font-heading text-lg font-bold text-white">Kit Summary</h3>
                <p className="text-xs text-[#FBBF24] font-semibold">{selectedOccasion}</p>
              </div>
              <Flame className="w-6 h-6 text-[#F59E0B] animate-diya" />
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-gray-300">
                <span>Selected Samagri Items:</span>
                <span className="font-bold text-white">{selectedCount} items</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Vedic Blessings:</span>
                <span className="text-emerald-400 font-semibold">Included FREE</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Packaging:</span>
                <span className="text-[#FBBF24]">Eco-Friendly Wooden Box</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/30 space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-semibold text-gray-200">Total Price:</span>
                <span className="text-3xl font-extrabold text-[#FBBF24]">₹{totalPrice}</span>
              </div>
              <p className="text-[11px] text-gray-400">Inclusive of all taxes & free shipping across India</p>
            </div>

            <button
              onClick={handleAddCustomKit}
              disabled={selectedCount === 0}
              className="w-full py-4 rounded-full bg-gold-gradient text-[#200303] font-bold text-sm shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <ShoppingBag className="w-4 h-4" /> Add Custom Kit to Cart
            </button>

            <div className="flex items-center gap-2 justify-center text-[11px] text-gray-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>100% Satisfaction & Pure Guarantee</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
