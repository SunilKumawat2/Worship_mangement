'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Heart, ShoppingBag, Check, Flame } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge: string;
  description: string;
}

const productsData: Product[] = [
  {
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
  {
    id: 'p2',
    name: 'Handcrafted Antique Peacock Brass Diya (12 inch)',
    hindiName: 'हस्तनिर्मित मयूर पीतल दीया',
    category: 'brassware',
    price: 999,
    originalPrice: 1499,
    rating: 5,
    reviewsCount: 310,
    image: '/images/brass_diya.jpg',
    badge: 'POPULAR',
    description: '100% Solid Brass Peacock Oil Lamp designed for divine glowing ambience in your pooja ghar.'
  },
  {
    id: 'p3',
    name: 'Organic Herbal Flower Dhoop Cones (Pack of 3)',
    hindiName: 'ऑर्गेनिक हर्बल फ्लावर धूप',
    category: 'dhoop',
    price: 349,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 195,
    image: '/images/organic_dhoop.jpg',
    badge: 'CHEMICAL FREE',
    description: '100% Temple recycled flower dhoop cones with soothing Sandalwood & Rose sugandh.'
  },
  {
    id: 'p4',
    name: 'Original Gangotri Ganga Jal (500ml Glass Jar)',
    hindiName: 'पवित्र गंगोत्री गंगा जल',
    category: 'pooja-kits',
    price: 249,
    originalPrice: 399,
    rating: 4.9,
    reviewsCount: 520,
    image: '/images/hero_pooja_banner.jpg',
    badge: '100% PURE',
    description: 'Directly sourced sacred Ganga Jal packed in eco-friendly glass bottle for abhishekam.'
  },
  {
    id: 'p5',
    name: 'Authentic Vrindavan Tulsi Mala (108 Beads)',
    hindiName: 'प्राकृतिक वृंदावन तुलसी माला',
    category: 'malas',
    price: 549,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 240,
    image: '/images/pooja_kit.jpg',
    badge: 'SACRED',
    description: 'Hand-strung 108 beads authentic Vrindavan Tulsi mala with silver capping for jaap & wearing.'
  },
  {
    id: 'p6',
    name: 'Pure Desi Cow Ghee & Bhimseni Camphor Set',
    hindiName: 'शुद्ध देशी गाय घी एवं भीमसेनी कपूर',
    category: 'dhoop',
    price: 429,
    originalPrice: 699,
    rating: 4.8,
    reviewsCount: 180,
    image: '/images/organic_dhoop.jpg',
    badge: 'VEDIC PURE',
    description: 'A2 Desi Cow Ghee for diya lighting combined with pure therapeutic Bhimseni Kapur.'
  }
];

interface ProductSectionProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
  wishlist: string[];
}

export default function ProductSection({ onAddToCart, onToggleWishlist, wishlist }: ProductSectionProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const filteredProducts = activeTab === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeTab);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="bestsellers" className="py-20 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0606] text-[#FBBF24] text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#F59E0B] animate-diya" />
            <span>Divine Bestsellers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#3B0606]">
            Most Loved Sacred Essentials
          </h2>
          <p className="text-gray-600 text-sm">
            Handpicked 100% pure pooja samagri delivered with love & devotion to your doorstep.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Sacred Items' },
            { id: 'pooja-kits', label: 'Pooja Kits' },
            { id: 'brassware', label: 'Pure Brassware' },
            { id: 'dhoop', label: 'Organic Dhoop & Ghee' },
            { id: 'malas', label: 'Rudraksha & Malas' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gold-gradient text-[#200303] shadow-md scale-105'
                  : 'bg-[#FAF5E6] text-gray-700 hover:bg-[#FEF3C7] hover:text-[#3B0606]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            const isJustAdded = addedItems[product.id];
            const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

            return (
              <div 
                key={product.id}
                className="group rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Product Image Container */}
                <div className="relative h-64 w-full bg-[#FAF5E6] overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Badge & Discount Tag */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    <span className="bg-[#3B0606] text-[#FBBF24] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md">
                      {product.badge}
                    </span>
                    <span className="bg-[#B45309] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                      SAVE {discountPercent}%
                    </span>
                  </div>

                  {/* Wishlist Button */}
                  <button 
                    onClick={() => onToggleWishlist(product.id)}
                    aria-label="Toggle Wishlist"
                    className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                      isWishlisted 
                        ? 'bg-[#EF4444] text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-white hover:text-[#EF4444]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] text-[#B45309] font-hindi tracking-wide block">
                      {product.hindiName}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#3B0606] line-clamp-2 hover:text-[#B45309] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex text-[#F59E0B]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
                      <span className="text-[11px] text-gray-400">({product.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-gray-400 line-through block">₹{product.originalPrice}</span>
                      <span className="text-xl font-extrabold text-[#3B0606]">₹{product.price}</span>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white scale-95'
                          : 'bg-gold-gradient text-[#200303] hover:brightness-105 hover:scale-105'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" /> Added!
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" /> Add to Cart
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
