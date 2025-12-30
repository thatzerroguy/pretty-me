
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group animate-fade-in-up">
    <div className="relative aspect-[3/4.5] overflow-hidden mb-5 bg-gray-50 border border-gray-100">
      <img 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        src={product.image}
      />
      {product.isNew && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[9px] uppercase tracking-widest font-bold shadow-sm">New</div>
      )}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
        <button className="bg-white/95 p-2 rounded-full hover:bg-white text-black shadow-md backdrop-blur-sm transition-all hover:scale-110">
          <span className="material-symbols-outlined text-base">favorite</span>
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 text-center py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out shadow-inner backdrop-blur-sm">
        <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-900">Quick Add</button>
      </div>
    </div>
    
    <div className="text-center">
      <h3 className="font-medium text-gray-900 text-[13px] md:text-sm mb-1 uppercase tracking-wider">{product.name}</h3>
      <p className="text-gray-400 text-[11px] mb-3 italic">{product.category}</p>
      
      <div className="flex justify-center gap-3 mb-3">
        {product.colors.map((color, i) => (
          <button 
            key={i} 
            className={`w-3 h-3 rounded-full border border-gray-300 ring-offset-2 hover:ring-1 hover:ring-primary transition-all`} 
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <p className="text-sm font-semibold tracking-wide">
        {product.discountPrice ? (
          <>
            <span className="text-red-700 font-bold">${product.discountPrice.toFixed(2)}</span>
            <span className="text-gray-400 line-through font-normal ml-2 text-xs">${product.price.toFixed(2)}</span>
          </>
        ) : (
          `$${product.price.toFixed(2)}`
        )}
      </p>
    </div>
  </div>
);

const LatestArrivals: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-gray-900">Latest Arrivals</h2>
          <div className="h-0.5 w-16 bg-primary mt-4"></div>
        </div>
        <a href="#dresses" className="group flex items-center text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-black transition-colors">
          View All <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
        {PRODUCTS.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 text-center sm:hidden">
        <a href="#dresses" className="inline-block border border-gray-200 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-black transition-colors">
          Explore Arrivals
        </a>
      </div>
    </section>
  );
};

export default LatestArrivals;
