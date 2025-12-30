import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden flex items-center justify-center">
      <img
        alt="Woman in elegant silk dress"
        className="absolute inset-0 w-full h-full object-cover object-top scale-105 animate-[scaleOut_20s_ease-out_infinite_alternate]"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8JXks-pNbg02TXoSOblL2koNbqXORfK9W4RCH__GrrMO8ZS51YZFsq87a4Iyyw9w86-lmFfjV2eHwa3Vi7dumI01lAfM2BDXqabBnjoMt7DE_YzsXwGz-KK41iADUghBfs1-pux3jZZ_Jii0LeIvvDO4s58WBLho-tlJQpa_BjBq77ZTI6xu898aD_5TcTBxYc-YOnrpjkqqbOUvCY4ieXbs1vZlEyEzlsmU_EdBnjKj51klSxl17OcNRlCNEfyl_COMtXnnDrrb9"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-up">
        <span className="text-white text-xs md:text-sm tracking-[0.4em] uppercase mb-4 block font-medium opacity-90">
          The Winter Collection
        </span>
        <h1 className="font-display text-5xl md:text-8xl text-white mb-10 drop-shadow-2xl leading-[1.1]">
          Elegance <br className="md:hidden" /> Redefined
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/dresses"
            className="w-full sm:w-auto bg-white text-black px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
          >
            Shop Dresses
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto bg-transparent border border-white text-white px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            View Lookbook
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes scaleOut {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </header>
  );
};

export default Hero;
