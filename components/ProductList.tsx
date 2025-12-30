"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { PRODUCTS } from "../constants";
import { Product } from "../types";

interface ProductListProps {
  title?: string;
  filter?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  title = "Collection",
  filter,
}) => {
  const filteredProducts = useMemo(() => {
    if (!filter) return PRODUCTS;

    const matchTerms = (p: Product, terms: string[]) => {
      const combined = `${p.name} ${p.category}`.toLowerCase();
      return terms.some((term) => combined.includes(term.toLowerCase()));
    };

    switch (filter) {
      case "sale":
        return PRODUCTS.filter(
          (p) => !!p.isSale || (p.discountPrice && p.discountPrice < p.price),
        );
      case "office":
        return PRODUCTS.filter(
          (p) =>
            !!p.isOffice ||
            matchTerms(p, [
              "linen",
              "knit",
              "blazer",
              "trousers",
              "professional",
            ]),
        );
      case "dresses":
        return PRODUCTS.filter((p) =>
          matchTerms(p, [
            "dress",
            "gown",
            "midi",
            "slip",
            "maxi",
            "wrap",
            "tunic",
          ]),
        );
      case "others":
        const isDressType = (p: Product) =>
          matchTerms(p, ["dress", "gown", "midi", "slip", "maxi"]);
        return PRODUCTS.filter((p) => !isDressType(p) && !p.isOffice);
      default:
        return PRODUCTS;
    }
  }, [filter]);

  return (
    <div className="bg-surface-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark transition-colors duration-300">
      <main className="max-w-[1920px] mx-auto pt-8 pb-20">
        {/* Breadcrumbs & Header */}
        <div className="px-4 sm:px-6 lg:px-12 mb-8">
          <div className="flex flex-col mb-10 text-left">
            <nav className="flex text-xs text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider space-x-2">
              <Link href="/" className="hover:text-black dark:hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-black dark:text-white font-medium">
                {title}
              </span>
            </nav>
            <h1 className="font-display text-4xl md:text-6xl text-text-light dark:text-text-dark mb-4 animate-fade-in-up">
              {title}
            </h1>
            <p
              className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl leading-relaxed italic animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Discover our collection of effortless silhouettes, curated for the
              modern muse. From premium silk slips to structured professional
              midis.
            </p>
          </div>

          {/* Category Slider - Matches User Design */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 mb-8 no-scrollbar scroll-smooth">
            {[
              {
                name: "Day Dresses",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO_wufreUh2IlVS8xau9rO9sHHBXh7qdHenXfCiqFBnot0io1rhwJ9DVNlhwPwU8EJNk1XhwG-8S84th5dvmXpR4nQrACf58tFTgSX3qfaWb43VqpYc8imFqhnrPQUtm1B9kimMM3Zn3OAVsvVEZhdkvbQ2BeKiZgVTh1Nctnqa4eKwMV9u1IzcUqG3wfGT4mCGTHQY9wkRnLm3eYt--hObQKn-3U550rgwbfKje7yXuaA9yziFP9WQc11bJJo4Guk8uSedHI2qIHY",
              },
              {
                name: "Evening",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGvssqPF-wds84ebu8SeibP5aHTJ-rdZw2q6czahSo1dAiO9EA2gdzT1PrFQDT2M_2sMW7VtH_KjQkJh9m44d2kl8RDG_cdZPMo-UusmveYqyHAYLeTqhpcnIVMVrzeTwFCY-ILyEPdZZz-PYZx6eVVa0_Kzxc5zcmA7HcZTq5AuDkW4oaMkEol3fKu8H7Vu5xDmRrHJgx1hi9_gJwfHTHyfqoVvpnmWqd1cL53vR79tGHf5RO2z9LQI7VfqIvhFKXNrkwqLnJY2qK",
              },
              {
                name: "Silk & Satin",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGSbLA2Qpyrj_ttc_0rsjrS1ufnkqGnjO98ehFdfUVQ05Xnqvpz1GAAchcSBXL_WAndyTAovQdW1gTiZ6dFvMRb8DVdZPZPuuFtBUF6JOMAokIHTEe5DpySTp9H1HYTUXa8aEev1c4gPgGDW_RlQcxRJG7h58giZZpw2cgo8HBWyf6G66h_FQoMoxj-iCPvbMf-RNhUKP8YKVCtVD_LXzlR9dJxn37TuIo0ccHdKypbwPZig8UikW5E2-Hvb9_Xl59KtgRY_TijYDf",
              },
              {
                name: "Cocktail",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgLqiV1cammjp6KJe4i0P_2XUkBO6qc4r8FROKPcPaH0aNsz2Dd5tiB4stW9kE7yNsHslJ3tJg7Tkf-aiNiVLz2CfGedq7SskmAQYOrOM2QdztuyPwGs1K9MKkZGcAquaZjCZ-juopdUKaUryF11Hs338ZWpJcGYnADAw9ns0KmlFsjNH82MS2s31EoPEEig0NM05D-pFGax7vYkjsd79Ek0tGC-0gBTQa6L87JcrGTPUJrSv2ON5Wi8kibW4jXY5jU0-u2EnLSBB",
              },
              {
                name: "Maxi",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA80k3O26_pqInFnVqOjg_8rHMbQhofKGGZh8DRNyKhDq7QxbKE_Luouz1tNX1g2aDCf2b9hO43O9e3psmJcZ0z1txnJVIGN4y_GumazgOvNi526MRfxS8xIRFEaGD8Et0iOt3a7-bpVXbcOjw7SkutQF5g_dO0oWaWYJj9FoGUxl2PFKqQLFAGtD-jiMzyQfG-BK3KISsUAAqPlrzxW4YhgVq7WM-KVcZ_8WoSB6pNGXFIy-SEEw2fADlJ_9oFbCfgJExUJWZEICfm",
              },
              {
                name: "Knitwear",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2l1Iy62GDBl1YxrP151yAt6AEpUNUFsdRInOCUNv-8iWA3AvBE6VPxx_BFncHQnYXfHH1R6hGKd-1h5GhKk4d0cn_XAfxAKBj4SqCnEBc6gbLtmhBEndhcaICMOsPOJu-QrEgIbfUUmsBj0TgH3Fq_Wa5qns4wSkTj8PdYXRQbzK9czCfOE2syRM_jChuxFlwwJycX2H42b4l2_pjA87WIdY5btdr0idcPelxNJ8a9PZvEgsAXLlCmH-itJkPwXFHsvrfg6hu109",
              },
            ].map((cat) => (
              <div
                key={cat.name}
                className="group min-w-[140px] md:min-w-[160px] cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800 mb-3 relative">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="text-[10px] uppercase font-bold tracking-[0.2em] text-center group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Sticky Action Bar */}
          <div className="sticky top-[80px] z-40 bg-surface-light dark:bg-background-dark py-4 border-t border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-8">
                <button className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    tune
                  </span>
                  <span>Filter Selection</span>
                </button>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-10">
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                  {filteredProducts.length} Items found
                </span>
                <button className="flex items-center space-x-1 text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors group">
                  <span>Sort By: Recommended</span>
                  <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 lg:gap-x-6 lg:gap-y-16">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-[3/4.5] overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-white/95 text-black px-2 py-1 text-[9px] uppercase tracking-wider font-bold z-10">
                      New
                    </div>
                  )}
                  {product.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-[9px] uppercase tracking-wider font-bold z-10">
                      Popular
                    </div>
                  )}
                  {product.isSale && (
                    <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 text-[9px] uppercase tracking-wider font-bold z-10">
                      Sale
                    </div>
                  )}

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button className="bg-white/95 p-2 rounded-full hover:bg-white text-black shadow-md backdrop-blur-sm">
                      <span className="material-symbols-outlined text-sm font-bold">
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <button className="w-full bg-black/90 text-white py-4 text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-sm">
                      Add to Bag
                    </button>
                  </div>
                </div>

                <div className="text-center px-1">
                  <h3 className="font-medium text-text-light dark:text-text-dark text-[13px] uppercase tracking-widest leading-relaxed mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 italic mb-2">
                    {product.category}
                  </p>

                  <div className="flex justify-center gap-2 mb-3">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-2.5 h-2.5 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>

                  <p className="text-sm font-semibold tracking-wider">
                    {product.discountPrice ? (
                      <span className="flex justify-center gap-2">
                        <span className="text-red-700 font-bold">
                          ${product.discountPrice.toFixed(2)}
                        </span>
                        <span className="text-gray-400 line-through font-normal text-xs">
                          ${product.price.toFixed(2)}
                        </span>
                      </span>
                    ) : (
                      `$${product.price.toFixed(2)}`
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Loader */}
          <div className="mt-24 text-center">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6 font-bold">
              Refining your style...
            </p>
            <div className="w-64 h-0.5 bg-gray-100 dark:bg-gray-800 mx-auto mb-10 overflow-hidden relative">
              <div className="h-full bg-primary w-[30%] absolute left-0"></div>
            </div>
            <button className="border border-black dark:border-white text-black dark:text-white px-16 py-4 uppercase text-[11px] font-bold tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-xl active:scale-95">
              Explore More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductList;
