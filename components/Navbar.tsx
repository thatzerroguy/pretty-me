"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-primary" : "text-gray-600";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/sales"
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${isActive("/sales")}`}
            >
              Sales
            </Link>
            <Link
              href="/dresses"
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${isActive("/dresses")}`}
            >
              Dresses
            </Link>
            <Link
              href="/office"
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${isActive("/office")}`}
            >
              Office
            </Link>
            <Link
              href="/others"
              className={`text-[11px] uppercase tracking-widest hover:text-primary transition-colors ${isActive("/others")}`}
            >
              Others
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="font-brand text-3xl md:text-4xl text-black hover:text-primary transition-colors"
            >
              PrettyMe
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link
              href="#"
              className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-gray-600 hover:text-primary transition-colors"
            >
              Account
            </Link>
            <div className="flex items-center space-x-3 md:space-x-4 text-gray-700">
              <button className="hover:text-primary transition-colors flex">
                <span className="material-symbols-outlined text-xl">
                  search
                </span>
              </button>
              <button className="hover:text-primary transition-colors hidden sm:flex">
                <span className="material-symbols-outlined text-xl">
                  favorite
                </span>
              </button>
              <button className="hover:text-primary transition-colors relative flex">
                <span className="material-symbols-outlined text-xl">
                  shopping_bag
                </span>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            <Link
              href="/sales"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] uppercase tracking-widest text-gray-600"
            >
              Sales
            </Link>
            <Link
              href="/dresses"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] uppercase tracking-widest text-gray-600"
            >
              Dresses
            </Link>
            <Link
              href="/office"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] uppercase tracking-widest text-gray-600"
            >
              Office
            </Link>
            <Link
              href="/others"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] uppercase tracking-widest text-gray-600"
            >
              Others
            </Link>
            <hr className="border-gray-100" />
            <Link
              href="#"
              className="text-[11px] uppercase tracking-widest text-gray-600"
            >
              Account
            </Link>
            <Link
              href="#"
              className="text-[11px] uppercase tracking-widest text-gray-600"
            >
              Favorites
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
