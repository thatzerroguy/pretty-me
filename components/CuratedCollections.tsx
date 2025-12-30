import React from "react";
import Link from "next/link";
import { COLLECTIONS } from "../constants";

const CuratedCollections: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="font-display text-3xl md:text-5xl text-gray-900 mb-6">
          Curated Collections
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Discover our hand-picked selection of premium fabrics and timeless
          silhouettes designed for the modern muse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COLLECTIONS.map((col, index) => (
          <Link
            key={col.id}
            href={col.link}
            className={`group cursor-pointer relative overflow-hidden aspect-[4/5.5] block ${index === 1 ? "lg:mt-12" : ""}`}
          >
            <img
              alt={col.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              src={col.image}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
            <div className="absolute bottom-10 left-10 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-display text-3xl mb-3">{col.title}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-transparent group-hover:border-white inline-block pb-1 transition-all">
                Shop Collection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CuratedCollections;
