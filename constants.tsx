import { Product, Collection } from "./types";

export const COLLECTIONS: Collection[] = [
  {
    id: "1",
    title: "Evening Wear",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb8H4Ul6VyrFxpegDkqrtRLxunQ0a-ZwzxDRcAZ5wkk4FfmgNjcSilKLaDAxpxpHoet4BM19Ah2jEWvPBC_zVKXMxhUIr_7ePFvMUhy1owpWKKAktGUa8ZYXJ8ic0dtM2OOt5DEy_psSDfsarRleIwfYG9T8dDfiqNm73aHCdsaT1pojpBtLZkhIWWcEZSpDmprwsYnbonTZybcT1v2m19GtVo79w78Lbn5Lgnr9sBVtHRdr_iEMFSa2RohNudVibc1MybGlW1IPLo",
    link: "/dresses",
  },
  {
    id: "2",
    title: "Silk & Lounge",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGSbLA2Qpyrj_ttc_0rsjrS1ufnkqGnjO98ehFdfUVQ05Xnqvpz1GAAchcSBXL_WAndyTAovQdW1gTiZ6dFvMRb8DVdZPZPuuFtBUF6JOMAokIHTEe5DpySTp9H1HYTUXa8aEev1c4gPgGDW_RlQcxRJG7h58giZZpw2cgo8HBWyf6G66h_FQoMoxj-iCPvbMf-RNhUKP8YKVCtVD_LXzlR9dJxn37TuIo0ccHdKypbwPZig8UikW5E2-Hvb9_Xl59KtgRY_TijYDf",
    link: "/others",
  },
  {
    id: "3",
    title: "Cocktail Attire",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgLqiV1cammjp6KJe4i0P_2XUkBO6qc4r8FROKPcPaH0aNsz2Dd5tiB4stW9kE7yNsHslJ3tJg7Tkf-aiNiVLz2CfGedq7SskmAQYOrOM2QdztuyPwGs1K9MKkZGcAquaZjCZ-juopdUKaUryF11Hs338ZWpJcGYnADAw9ns0KmlFsjNH82MS2s31EoPEEig0NM05D-pFGax7vYkjsd79Ek0tGC-0gBTQa6L87JcrGTPUJrSv2ON5Wi8kibW4jXY5jU0-u2EnLSBB",
    link: "/dresses",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "v1",
    name: "The Verona Midi",
    category: "Italian Linen",
    price: 185,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCO_wufreUh2IlVS8xau9rO9sHHBXh7qdHenXfCiqFBnot0io1rhwJ9DVNlhwPwU8EJNk1XhwG-8S84th5dvmXpR4nQrACf58tFTgSX3qfaWb43VqpYc8imFqhnrPQUtm1B9kimMM3Zn3OAVsvVEZhdkvbQ2BeKiZgVTh1Nctnqa4eKwMV9u1IzcUqG3wfGT4mCGTHQY9wkRnLm3eYt--hObQKn-3U550rgwbfKje7yXuaA9yziFP9WQc11bJJo4Guk8uSedHI2qIHY",
    colors: ["#FFFFFF", "#000000"],
    isOffice: true,
  },
  {
    id: "n1",
    name: "Noire Evening Gown",
    category: "Velvet Blend",
    price: 295,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGvssqPF-wds84ebu8SeibP5aHTJ-rdZw2q6czahSo1dAiO9EA2gdzT1PrFQDT2M_2sMW7VtH_KjQkJh9m44d2kl8RDG_cdZPMo-UusmveYqyHAYLeTqhpcnIVMVrzeTwFCY-ILyEPdZZz-PYZx6eVVa0_Kzxc5zcmA7HcZTq5AuDkW4oaMkEol3fKu8H7Vu5xDmRrHJgx1hi9_gJwfHTHyfqoVvpnmWqd1cL53vR79tGHf5RO2z9LQI7VfqIvhFKXNrkwqLnJY2qK",
    colors: ["#000000"],
    isNew: true,
  },
  {
    id: "s1",
    name: "Scarlet Wrap Dress",
    category: "100% Silk",
    price: 210,
    discountPrice: 148,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0fI3vdpA8h-WATO59ZUVR8LXlkAF5u_tVfTPZUzvU9Ihy4H-1kKsSCJpcm9po8UQijzOely4ikfX81E3rdvxem4feBe1HpZyq9g5B5Nl08gQbEEUESrPhiilDJgwCsOZMtu75kWr0KwvizoGbvauTFmLw-wf98jhkOVT_fx0C-nvBU-Cf1iB3eGrvh-3u7AXkPPoYdVcRlKlrRzL6QgRwOI18BBuztjwP4X_AwMiKqtj_qrHVEXJYHLowyiF-ckJFy6WrRVHbu_h4",
    colors: ["#991B1B", "#FBCFE8"],
    isSale: true,
  },
  {
    id: "c1",
    name: "Cashmere Knit",
    category: "Sustainable Wool",
    price: 165,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2l1Iy62GDBl1YxrP151yAt6AEpUNUFsdRInOCUNv-8iWA3AvBE6VPxx_BFncHQnYXfHH1R6hGKd-1h5GhKk4d0cn_XAfxAKBj4SqCnEBc6gbLtmhBEndhcaICMOsPOJu-QrEgIbfUUmsBj0TgH3Fq_Wa5qns4wSkTj8PdYXRQbzK9czCfOE2syRM_jChuxFlwwJycX2H42b4l2_pjA87WIdY5btdr0idcPelxNJ8a9PZvEgsAXLlCmH-itJkPwXFHsvrfg6hu109",
    colors: ["#D2B48C", "#8B4513"],
    isOffice: true,
  },
  {
    id: "a1",
    name: "The Aurelia Gown",
    category: "Chiffon",
    price: 320,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb8H4Ul6VyrFxpegDkqrtRLxunQ0a-ZwzxDRcAZ5wkk4FfmgNjcSilKLaDAxpxpHoet4BM19Ah2jEWvPBC_zVKXMxhUIr_7ePFvMUhy1owpWKKAktGUa8ZYXJ8ic0dtM2OOt5DEy_psSDfsarRleIwfYG9T8dDfiqNm73aHCdsaT1pojpBtLZkhIWWcEZSpDmprwsYnbonTZybcT1v2m19GtVo79w78Lbn5Lgnr9sBVtHRdr_iEMFSa2RohNudVibc1MybGlW1IPLo",
    colors: ["#BFA395", "#000000"],
    isBestSeller: true,
  },
  {
    id: "m1",
    name: "Midnight Satin Slip",
    category: "Mulberry Silk",
    price: 248,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGSbLA2Qpyrj_ttc_0rsjrS1ufnkqGnjO98ehFdfUVQ05Xnqvpz1GAAchcSBXL_WAndyTAovQdW1gTiZ6dFvMRb8DVdZPZPuuFtBUF6JOMAokIHTEe5DpySTp9H1HYTUXa8aEev1c4gPgGDW_RlQcxRJG7h58giZZpw2cgo8HBWyf6G66h_FQoMoxj-iCPvbMf-RNhUKP8YKVCtVD_LXzlR9dJxn37TuIo0ccHdKypbwPZig8UikW5E2-Hvb9_Xl59KtgRY_TijYDf",
    colors: ["#EADDCD"],
  },
  {
    id: "cc1",
    name: "The Classic Cocktail",
    category: "Crepe Fabric",
    price: 195,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPgLqiV1cammjp6KJe4i0P_2XUkBO6qc4r8FROKPcPaH0aNsz2Dd5tiB4stW9kE7yNsHslJ3tJg7Tkf-aiNiVLz2CfGedq7SskmAQYOrOM2QdztuyPwGs1K9MKkZGcAquaZjCZ-juopdUKaUryF11Hs338ZWpJcGYnADAw9ns0KmlFsjNH82MS2s31EoPEEig0NM05D-pFGax7vYkjsd79Ek0tGC-0gBTQa6L87JcrGTPUJrSv2ON5Wi8kibW4jXY5jU0-u2EnLSBB",
    colors: ["#F5F5DC", "#000000"],
  },
  {
    id: "dm1",
    name: "Draped Maxi",
    category: "Satin",
    price: 210,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA80k3O26_pqInFnVqOjg_8rHMbQhofKGGZh8DRNyKhDq7QxbKE_Luouz1tNX1g2aDCf2b9hO43O9e3psmJcZ0z1txnJVIGN4y_GumazgOvNi526MRfxS8xIRFEaGD8Et0iOt3a7-bpVXbcOjw7SkutQF5g_dO0oWaWYJj9FoGUxl2PFKqQLFAGtD-jiMzyQfG-BK3KISsUAAqPlrzxW4YhgVq7WM-KVcZ_8WoSB6pNGXFIy-SEEw2fADlJ_9oFbCfgJExUJWZEICfm",
    colors: ["#B8860B"],
  },
];
