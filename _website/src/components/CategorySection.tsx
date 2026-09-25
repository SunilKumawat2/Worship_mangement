'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 'pooja-kits',
    name: 'Sampoorna Pooja Kits',
    hindiName: 'सम्पूर्ण पूजा किट',
    count: '32+ Essential Kits',
    image: '/images/pooja_kit.jpg',
    description: 'Festivals, Havan, Satyanarayan & Griha Pravesh All-In-One Boxes',
    badge: 'Popular',
  },
  {
    id: 'brassware',
    name: 'Pure Brassware & Diyas',
    hindiName: 'शुद्ध पीतल दीया एवं थाली',
    count: '65+ Artistry Items',
    image: '/images/brass_diya.jpg',
    description: 'Peacock Diyas, Hanging Lamps, Puja Bell & Antique Thalis',
    badge: 'Handcrafted',
  },
  {
    id: 'dhoop-incense',
    name: 'Organic Dhoop & Incense',
    hindiName: 'ऑर्गेनिक धूप एवं सुगंध',
    count: '48+ Fragrances',
    image: '/images/organic_dhoop.jpg',
    description: '100% Charcoal-free Flower Dhoop, Pure Loban & Agarbatti',
    badge: 'Eco-Friendly',
  },
  {
    id: 'rudraksha-malas',
    name: 'Rudraksha & Sacred Malas',
    hindiName: 'रुद्राक्ष एवं तुलसी माला',
    count: '24+ Certified Beads',
    image: '/images/hero_pooja_banner.jpg',
    description: 'Certified Nepal Panchmukhi Rudraksha & Sacred Vrindavan Tulsi',
    badge: 'Certified',
  },
];

export default function CategorySection() {
  return (
    <section id="categories" className="py-20 bg-[#FAF5E6] relative overflow-hidden">
      
      {/* Background Subtle Watermark Overlay */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#3B0606]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#D4AF37]/40 text-[#B45309] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Divine Collection</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#3B0606]">
              Explore Sacred Categories
            </h2>
            <p className="text-gray-600 text-sm mt-1 max-w-xl">
              Curated spiritual items designed to elevate your daily prayers, havan rituals, and festive occasions with 100% purity.
            </p>
          </div>

          <a 
            href="#bestsellers" 
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#B45309] hover:text-[#3B0606] transition-colors group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className="group relative rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D4AF37] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-56 w-full overflow-hidden bg-[#200303]">
                <Image 
                  src={cat.image} 
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge Tag */}
                <div className="absolute top-3 left-3 bg-[#3B0606]/90 border border-[#D4AF37]/50 text-[#FBBF24] text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                  {cat.badge}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-[#FDE68A] font-hindi tracking-wide block">
                    {cat.hindiName}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#FBBF24] transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-5 space-y-3 bg-white flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-semibold text-gray-500">{cat.count}</span>
                  <span className="w-8 h-8 rounded-full bg-[#FEF3C7] text-[#3B0606] flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-[#200303] transition-all transform group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
