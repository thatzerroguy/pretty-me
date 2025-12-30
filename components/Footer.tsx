
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <a href="#" className="font-brand text-4xl text-black mb-8 block">PrettyMe</a>
            <p className="text-[12px] text-gray-500 leading-[1.8] italic max-w-[240px]">
              Elevating everyday elegance with premium fabrics and timeless designs for the modern muse.
            </p>
            <div className="flex space-x-6 mt-10">
              <a href="#" className="text-gray-400 hover:text-primary transition-all"><span className="material-symbols-outlined text-xl">language</span></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all"><span className="material-symbols-outlined text-xl">share</span></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-black">Collections</h4>
            <ul className="space-y-5 text-[12px] text-gray-500 uppercase tracking-widest">
              <li><a className="hover:text-primary transition-colors" href="#">New Arrivals</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Dresses</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Nightwear</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Accessories</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-black">Customer Care</h4>
            <ul className="space-y-5 text-[12px] text-gray-500 uppercase tracking-widest">
              <li><a className="hover:text-primary transition-colors" href="#">Shipping & Returns</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Size Guide</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-black">Corporate</h4>
            <ul className="space-y-5 text-[12px] text-gray-500 uppercase tracking-widest">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-400">© 2024 PrettyMe Inc. Crafting elegance daily.</p>
          <div className="flex space-x-3 opacity-60">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map(card => (
              <div key={card} className="text-[9px] border border-gray-200 px-2 py-1 rounded text-gray-500 font-bold tracking-widest">{card}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
