'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, Tag } from 'lucide-react';
import { Product } from './ProductSection';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingFee = subtotal > 599 || subtotal === 0 ? 0 : 79;
  const finalTotal = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'BHAKTI10') {
      setDiscountPercent(10);
      setCouponApplied(true);
    } else {
      alert('Invalid code! Use code BHAKTI10 for 10% OFF');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF7] shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/30 z-50">
          
          {/* Header */}
          <div className="p-6 bg-[#3B0606] text-white flex items-center justify-between border-b border-[#D4AF37]/40">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#F59E0B]" />
              <div>
                <h2 className="font-heading text-lg font-bold text-white">Your Sacred Cart</h2>
                <p className="text-xs text-[#FBBF24]">({cartItems.length} items selected)</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FEF3C7] flex items-center justify-center mx-auto text-2xl">
                  🪔
                </div>
                <h3 className="font-heading text-lg font-bold text-[#3B0606]">Your Cart is Empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Add sacred pooja kits, brass diyas or organic dhoop to get started with your spiritual order.
                </p>
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gold-gradient text-[#200303] text-xs font-bold rounded-full shadow-md hover:scale-105 transition-transform"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.product.id}
                  className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm flex gap-4 items-center"
                >
                  <div className="relative w-16 h-16 rounded-xl bg-gray-100 overflow-hidden shrink-0">
                    <Image 
                      src={item.product.image} 
                      alt={item.product.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-xs font-bold text-[#3B0606] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs font-extrabold text-[#B45309] mt-0.5">
                      ₹{item.product.price}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-[#FAF5E6]">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 text-gray-600 hover:text-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 text-gray-600 hover:text-black"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button 
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-gray-200 space-y-4">
              
              {/* Coupon Box */}
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Coupon: BHAKTI10"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-[#FAF5E6] border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-800 uppercase focus:outline-none"
                />
                <button 
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 bg-[#3B0606] text-[#FBBF24] text-xs font-bold rounded-lg hover:bg-[#200303]"
                >
                  Apply
                </button>
              </div>

              {couponApplied && (
                <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <Tag className="w-3 h-3" /> 10% Special Devotee Discount Applied!
                </p>
              )}

              {/* Price Details */}
              <div className="space-y-1.5 text-xs text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-gray-800">₹{subtotal}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount (10%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Express Shipping:</span>
                  <span className="font-semibold text-gray-800">
                    {shippingFee === 0 ? <span className="text-emerald-600">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>

                <div className="flex justify-between text-base font-extrabold text-[#3B0606] pt-2 border-t border-gray-200">
                  <span>Total Payable:</span>
                  <span className="text-[#B45309]">₹{finalTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={() => alert(`Redirecting to Secure Gateway for total ₹${finalTotal}... Thank you for your Devotion!`)}
                className="w-full py-3.5 rounded-xl bg-gold-gradient text-[#200303] font-bold text-xs shadow-lg hover:brightness-105 flex items-center justify-center gap-2"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Encrypted 256-Bit SSL Payment Gateway</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
