'use client';

import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Pandit Sharma Ji',
    location: 'Varanasi, UP',
    comment: 'PavitraBhakti ka Ganga Jal aur Pure Cow Ghee Havan kit bohot hi shuddh hai. Rituals ke liye 100% authentic samagri hai.',
    rating: 5,
    role: 'Vedic Acharya',
  },
  {
    name: 'Sunita Mishra',
    location: 'Delhi NCR',
    comment: 'Mujhe Navratri Pooja kit 2 din mein mil gayi. Wooden packaging aur organic dhoop ki sugandh se ghar poora mehak gaya!',
    rating: 5,
    role: 'Verified Devotee',
  },
  {
    name: 'Rajesh Agarwal',
    location: 'Mumbai, Maharashtra',
    comment: 'Handcrafted Antique Peacock Brass Diya build quality is unbelievable. Highly recommended for Diwali & daily pooja ghar setup.',
    rating: 5,
    role: 'Verified Buyer',
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#FAF5E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B0606] text-[#FBBF24] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>50,000+ Happy Devotees</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#3B0606]">
            Words From Our Spiritual Community
          </h2>
          <p className="text-gray-600 text-sm">
            Hear how our pure pooja samagri & kits have enriched homes across India.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#FEF3C7] absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex text-[#F59E0B]">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#3B0606]">{rev.name}</h4>
                  <p className="text-[11px] text-gray-500">{rev.location}</p>
                </div>
                <span className="text-[10px] bg-[#FEF3C7] text-[#B45309] font-bold px-2.5 py-1 rounded-full">
                  {rev.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
