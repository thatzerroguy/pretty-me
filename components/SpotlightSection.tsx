import React from "react";
import Link from "next/link";

const SpotlightSection: React.FC = () => {
  return (
    <section className="bg-accent-beige py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[450px] lg:h-[700px] w-full order-2 lg:order-1">
          <img
            alt="Midnight Satin Slip Detail"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA80k3O26_pqInFnVqOjg_8rHMbQhofKGGZh8DRNyKhDq7QxbKE_Luouz1tNX1g2aDCf2b9hO43O9e3psmJcZ0z1txnJVIGN4y_GumazgOvNi526MRfxS8xIRFEaGD8Et0iOt3a7-bpVXbcOjw7SkutQF5g_dO0oWaWYJj9FoGUxl2PFKqQLFAGtD-jiMzyQfG-BK3KISsUAAqPlrzxW4YhgVq7WM-KVcZ_8WoSB6pNGXFIy-SEEw2fADlJ_9oFbCfgJExUJWZEICfm"
          />
        </div>

        <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20 lg:py-0 order-1 lg:order-2 bg-accent-beige">
          <span className="text-primary text-[10px] tracking-[0.3em] font-bold uppercase mb-6 block">
            Spotlight Item
          </span>
          <h2 className="font-display text-4xl lg:text-6xl text-gray-900 mb-8 leading-tight">
            The Midnight <br /> Satin Slip
          </h2>
          <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed max-w-md italic font-light">
            Crafted from 100% mulberry silk, our signature slip dress offers
            unparalleled comfort and effortless elegance. Designed to flow with
            your every movement.
          </p>
          <div className="flex items-center space-x-8">
            <Link
              href="/dresses"
              className="bg-black text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors shadow-lg"
            >
              Shop Now
            </Link>
            <span className="text-2xl font-display text-gray-900">$248.00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
