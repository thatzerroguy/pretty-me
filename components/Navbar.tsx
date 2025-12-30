
import React, { useState } from 'react';

interface NavbarProps {
  currentHash: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentHash }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#sales" 
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${currentHash === '#sales' ? 'text-primary' : 'text-gray-600'}`}
            >
              Sales
            </a>
            <a 
              href="#dresses" 
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${currentHash === '#dresses' ? 'text-primary' : 'text-gray-600'}`}
            >
              Dresses
            </a>
            <a 
              href="#office" 
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${currentHash === '#office' ? 'text-primary' : 'text-gray-600'}`}
            >
              Office
            </a>
            <a 
              href="#others" 
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${currentHash === '#others' ? 'text-primary' : 'text-gray-600'}`}
            >
              Others
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2">
            <a href="#home" className="font-brand text-3xl md:text-4xl text-black hover:text-primary transition-colors">PrettyMe</a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="#" className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-gray-600 hover:text-primary transition-colors">Account</a>
            <div className="flex items-center space-x-3 md:space-x-4 text-gray-700">
              <button className="hover:text-primary transition-colors flex">
                <span className="material-symbols-outlined text-xl">search</span>
              </button>
              <button className="hover:text-primary transition-colors hidden sm:flex">
                <span className="material-symbols-outlined text-xl">favorite</span>
              </button>
              <button className="hover:text-primary transition-colors relative flex">
                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            <a href="#sales" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] uppercase tracking-widest text-gray-600">Sales</a>
            <a href="#dresses" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] uppercase tracking-widest text-gray-600">Dresses</a>
            <a href="#office" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] uppercase tracking-widest text-gray-600">Office</a>
            <a href="#others" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] uppercase tracking-widest text-gray-600">Others</a>
            <hr className="border-gray-100" />
            <a href="#" className="text-[11px] uppercase tracking-widest text-gray-600">Account</a>
            <a href="#" className="text-[11px] uppercase tracking-widest text-gray-600">Favorites</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
