
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#F8F5F2] py-24 border-y border-gray-100">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="text-primary font-brand text-4xl mb-3 block">Join the Club</span>
        <h2 className="font-display text-3xl md:text-4xl mb-6 text-gray-900 tracking-tight">Unlock 10% Off Your First Order</h2>
        <p className="text-gray-500 mb-10 text-sm md:text-base leading-relaxed italic">
          Sign up for exclusive access to new collections, sales, and style inspiration.
        </p>
        <form className="flex flex-col sm:flex-row gap-0 border-b border-gray-300 pb-2">
          <input 
            className="flex-1 bg-transparent border-none px-2 py-3 focus:ring-0 text-gray-900 placeholder-gray-400 text-[13px] tracking-wider italic" 
            placeholder="Enter your email address" 
            type="email"
          />
          <button className="bg-transparent text-gray-900 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors" type="button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
