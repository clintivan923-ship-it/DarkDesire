const products = [

  // ── BODYSUITS & TEDDIES ─────────────────────────────────────
  {
    id: 16,
    name: "Dark Dominion Zip-Up Dress",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 24.99,
    oldPrice: 29.99,
    badge: "sale",
    rating: 4.9,
    reviews: 287,
    sizes: ["XS","S","M","L","XL"],
    description: "Jet-black wet-look mini dress that means business. Deep plunge zip-front, buckle collar, and attached garter straps that clip onto your favourite stockings. Power, edge, and pure desire in one.",
    img: "assets/images/BW_1857_black-front-2026 copy.jpg",
    imgs: [
      "assets/images/BW_1857_black-front-2026 copy.jpg",
      "assets/images/BW_1857_black-side-2026 copy.jpg",
      "assets/images/BW_1857_black-back-2026 copy.jpg"
    ]
  },
  {
    id: 17,
    name: "Caught in the Net Set",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 17.99,
    oldPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 163,
    sizes: ["XS","S","M","L","XL"],
    description: "Bold diamond-net long-sleeve crop top and high-waist thong set that leaves absolutely nothing to the imagination. Available in electric turquoise or neon green — wear it and dare them not to stare.",
    img: "assets/images/BW_2155_TUR_F_web_2022APRIL48678.jpg",
    imgs: [
      "assets/images/BW_2155_TUR_F_web_2022APRIL48678.jpg",
      "assets/images/BW_2155_TUR_S_web_2022APRIL48678.jpg",
      "assets/images/BW_2155_TUR_B_web_2022APRIL48678-.jpg",
      "assets/images/h.jpg",
      "assets/images/BW_2155_NG_B_web_2022APRIL48678.jpg"
    ]
  },
  {
    id: 20,
    name: "Chain Reaction Fishnet Teddy",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 22.99,
    oldPrice: 27.99,
    badge: "sale",
    rating: 4.9,
    reviews: 341,
    sizes: ["XS","S","M","L"],
    description: "Halter-neck fishnet teddy with a liquid-black wetlook bra panel and silver chain accents dangling from hip to thigh. The kind of lingerie that makes jaws drop and rules get broken.",
    img: "assets/images/DG_12495_Black_Front_2022MARCH42936.jpg",
    imgs: [
      "assets/images/DG_12495_Black_Front_2022MARCH42936.jpg",
      "assets/images/DG_12495_Black_Back_2022MARCH42936.jpg"
    ]
  },
  {
    id: 21,
    name: "Blueprint for Desire Lace Teddy",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 19.99,
    oldPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 209,
    sizes: ["XS","S","M","L","XL"],
    description: "Sapphire blue sheer mesh teddy with embroidered underwire lace cups, a lattice cage waist, and scalloped lace hip panels. Royal blue never looked this dangerous.",
    img: "assets/images/ES_8946_SapBlue_Front.jpg",
    imgs: [
      "assets/images/ES_8946_SapBlue_Front.jpg",
      "assets/images/ES_8946_SapBlue_Back.jpg",
      "assets/images/ES_8946_Edito.jpg",
      "assets/images/ES_8946_Edito_2.jpg",
      "assets/images/ES_8946_Edito_3.jpg"
    ]
  },
  {
    id: 22,
    name: "Pearl Drop Cutout Lace Teddy",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 18.99,
    oldPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 176,
    sizes: ["XS","S","M","L"],
    description: "Hot pink floral lace teddy with peekaboo underwire cups separated by a string of faux pearls. Deep V-front, lace-up waist detail, and a barely-there thong bottom. Sinfully gorgeous.",
    img: "assets/images/FA-2637HPK-ProductImages01-hires.jpg",
    imgs: [
      "assets/images/FA-2637HPK-ProductImages01-hires.jpg",
      "assets/images/FA-2637HPK-BackProductImages-hires.jpg"
    ]
  },
  {
    id: 23,
    name: "Midnight Jewel Open Teddy",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 21.99,
    oldPrice: 26.99,
    badge: "sale",
    rating: 4.8,
    reviews: 248,
    sizes: ["XS","S","M","L","XL"],
    description: "Royal blue floral lace open-panel teddy with a rhinestone chain halter neck and jeweled crotch strap. Bold cutouts expose your midriff and thighs — this one is not for the faint-hearted.",
    img: "assets/images/FA-2642BLU-ProductImages01-hires.jpg",
    imgs: [
      "assets/images/FA-2642BLU-ProductImages01-hires.jpg",
      "assets/images/FA-2642BLU-BackProductImages-hires.jpg"
    ]
  },
  {
    id: 25,
    name: "Sweet Spot Polka-Dot Teddy",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 15.99,
    oldPrice: null,
    badge: null,
    rating: 4.7,
    reviews: 314,
    sizes: ["XS","S","M","L","XL"],
    description: "Baby blue sheer polka-dot mesh teddy with delicate lace underwire cups and a flutter ruffle hem. Soft, sweet, and irresistibly seductive — the look that makes hearts race.",
    img: "assets/images/MS_M412_BLU.jpg",
    imgs: [
      "assets/images/MS_M412_BLU.jpg",
      "assets/images/MS_M412_BLU_ALT.jpg",
      "assets/images/MS_M412_BLU_Back.jpg"
    ]
  },
  {
    id: 26,
    name: "Dark Butterfly Lace Bodysuit",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 20.99,
    oldPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 193,
    sizes: ["XS","S","M","L"],
    description: "Midnight navy lace bodysuit with a dramatic cutout butterfly design across the chest. Sheer mesh panels, daring low neckline, and a high-cut thong bottom for a look that owns the room.",
    img: "assets/images/OL_51-12069_EBL_ED1-HR.jpg",
    imgs: [
      "assets/images/OL_51-12069_EBL_ED1-HR.jpg",
      "assets/images/OL_51-12069_EBL-Front-BA_recrop.jpg",
      "assets/images/OL_51-12069_EBL-ALT-BA_recrop.jpg",
      "assets/images/OL_51-12069_EBL-Back-BA_recrop.jpg"
    ]
  },
  {
    id: 32,
    name: "Sapphire Reign Crystal Bodysuit",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 27.99,
    oldPrice: 29.99,
    badge: "sale",
    rating: 4.9,
    reviews: 421,
    sizes: ["XS","S","M","L","XL"],
    description: "Cobalt blue lace bodysuit dripping in rhinestone crystals with gold hardware ring accents and a multi-strap underwire bra. Wickedly glamorous from every angle — this is the one they'll remember.",
    img: "assets/images/RM_LI684_blue-front-1-2026.jpg",
    imgs: [
      "assets/images/RM_LI684_blue-front-1-2026.jpg",
      "assets/images/RM_LI684_blue-front-2-2026.jpg",
      "assets/images/RM_LI684_blue-front-3-2026.jpg",
      "assets/images/RM_LI684_blue-back-2026.jpg"
    ]
  },
  {
    id: 40,
    name: "Scarlet Devotion Halter Garter Set",
    category: "bodysuits",
    categoryLabel: "Bodysuit & Teddy",
    price: 22.99,
    oldPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 267,
    sizes: ["XS","S","M","L","XL"],
    description: "Red lace halter-neck teddy with scalloped trim, attached garter straps, and a matching thong included. Romantic, raw, and completely irresistible. Made for the night you want them on their knees.",
    img: "assets/images/YT_818JT516_RED_xl.jpg",
    imgs: [
      "assets/images/YT_818JT516_RED_xl.jpg",
      "assets/images/YT_818JT516_RED_3_xl.jpg"
    ]
  },

  // ── MATCHING SETS ──────────────────────────────────────────
  {
    id: 18,
    name: "Satin Sin Ruched Babydoll",
    category: "sets",
    categoryLabel: "Matching Set",
    price: 23.99,
    oldPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 312,
    sizes: ["XS","S","M","L","XL"],
    description: "Scarlet satin chemise with an embroidered lace bust, delicate spaghetti straps, and a side-tie ruched skirt that you can pull open with one smooth tug. Effortlessly irresistible.",
    img: "assets/images/CO-26507_RED_01.jpg",
    imgs: [
      "assets/images/CO-26507_RED_01.jpg",
      "assets/images/CO-26507_RED_02.jpg",
      "assets/images/CO-26507_RED_03.jpg",
      "assets/images/CO-26507_RED_04.jpg"
    ]
  },
  {
    id: 19,
    name: "Crimson Confession Open Set",
    category: "sets",
    categoryLabel: "Matching Set",
    price: 26.99,
    oldPrice: 29.99,
    badge: "sale",
    rating: 4.8,
    reviews: 198,
    sizes: ["XS","S","M","L","XL"],
    description: "Red satin open babydoll with an embroidered lace underwire bra, corset lace-up front, and a flared skirt that parts to reveal the matching lace thong. The definition of dangerous elegance.",
    img: "assets/images/CO-26508_RED_01.jpg",
    imgs: [
      "assets/images/CO-26508_RED_01.jpg",
      "assets/images/CO-26508_RED_02.jpg",
      "assets/images/CO-26508_RED-Editorial-01.jpg"
    ]
  },
  {
    id: 24,
    name: "Sealed With a Kiss Babydoll Set",
    category: "sets",
    categoryLabel: "Matching Set",
    price: 24.99,
    oldPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 143,
    sizes: ["XS","S","M","L","XL"],
    description: "Deep red three-piece set: push-up bra with kiss-print lace cups, a sheer chiffon babydoll skirt, matching thong, and red thigh-high stockings with lipstick lace tops. The full package, literally.",
    img: "assets/images/HD-HD07005A-CRPD_21.jpg",
    imgs: [
      "assets/images/HD-HD07005A-CRPD_21.jpg",
      "assets/images/HD-HD07005A-CRPD_22.jpg",
      "assets/images/HD-HD07005A-CRPD_23.jpg",
      "assets/images/HD-HD07005A-CRPD_24.jpg"
    ]
  },
  {
    id: 33,
    name: "Violet Venom Embroidered Set",
    category: "sets",
    categoryLabel: "Matching Set",
    price: 22.99,
    oldPrice: 27.99,
    badge: "sale",
    rating: 4.9,
    reviews: 387,
    sizes: ["XS","S","M","L","XL"],
    description: "Intoxicating purple and teal iridescent floral embroidered lingerie set — underwire bra, garter belt, thong, and matching stocking tops. Otherworldly luxury that belongs on your skin and nowhere else.",
    img: "assets/images/RM_LI1044.jpg",
    imgs: [
      "assets/images/RM_LI1044.jpg",
      "assets/images/RM_LI1044_ED-new-pdp.jpg",
      "assets/images/RM_LI1044_ED-new-pdp (1).jpg",
      "assets/images/RM_LI1044_BACK.jpg",
      "assets/images/RM_LI1044-Back_ED-new.jpg"
    ]
  },
  {
    id: 34,
    name: "Caught Red Handed Fishnet Set",
    category: "sets",
    categoryLabel: "Matching Set",
    price: 18.99,
    oldPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 229,
    sizes: ["XS","S","M","L","XL"],
    description: "Red or white — choose your weapon. Fishnet triangle bra with a bow accent, strappy cage waistband, and matching thong with attached fishnet stockings. A two-colour sin you can't pick just one of.",
    img: "assets/images/YT_818JT161_RED_l_APR2023-a.jpg",
    imgs: [
      "assets/images/YT_818JT161_RED_l_APR2023-a.jpg",
      "assets/images/YT_818JT161_RED_3_l_APR2023.jpg",
      "assets/images/YT_818JT161_WHT_2_XL_2024APRIL.jpg",
      "assets/images/YT_818JT161_WHT_3_XL_2024APRIL.jpg"
    ]
  },
  {
    id: 39,
    name: "Disco Sinner Rhinestone Set",
    category: "sets",
    categoryLabel: "Matching Set",
    price: 24.99,
    oldPrice: 29.99,
    badge: "sale",
    rating: 4.9,
    reviews: 356,
    sizes: ["XS","S","M","L"],
    description: "Crystal-studded off-shoulder lace crop top with a deep fishnet V-cutout and a matching rhinestone mini skirt. Available in blacked-out obsidian or hot fuchsia. You're not just dressed — you're armed.",
    img: "assets/images/YT_818JT396_BLK_2_l_2023MAY.jpg",
    imgs: [
      "assets/images/YT_818JT396_BLK_2_l_2023MAY.jpg",
      "assets/images/YT_818JT396_BLK_3_l_2023MAY.jpg",
      "assets/images/YT_818JT396_FUS_xl_2024APRIL.jpg",
      "assets/images/YT_818JT396_FUS_3_xl_2024APRIL.jpg"
    ]
  },

  // ── MINI DRESSES ───────────────────────────────────────────
  {
    id: 35,
    name: "Red Obsession Crystal Catsuit",
    category: "dresses",
    categoryLabel: "Mini Dress",
    price: 21.99,
    oldPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 441,
    sizes: ["XS","S","M","L","XL"],
    description: "Full-length red fishnet catsuit with an all-over crystal rhinestone pattern and opaque mesh accent zones that trace every curve like they were poured on. Halter neck, backless, unforgettable.",
    img: "assets/images/YT_818JT275_RED_l_2025JAN.jpg",
    imgs: [
      "assets/images/YT_818JT275_RED_l_2025JAN.jpg",
      "assets/images/YT_818JT275_RED_2_l_2025JAN.jpg"
    ]
  },
  {
    id: 36,
    name: "Starfire One-Shoulder Mini Dress",
    category: "dresses",
    categoryLabel: "Mini Dress",
    price: 19.99,
    oldPrice: 24.99,
    badge: "sale",
    rating: 4.8,
    reviews: 278,
    sizes: ["XS","S","M","L","XL"],
    description: "Black one-shoulder mini dress with an asymmetric fishnet panel across one side and rhinestone sparkle scattered from shoulder to hem. Bodycon fit, dangerous length. Wear it once — they'll talk about it forever.",
    img: "assets/images/YT_818JT301_BLK_XL_2022APRIL47992.jpg",
    imgs: [
      "assets/images/YT_818JT301_BLK_XL_2022APRIL47992.jpg",
      "assets/images/YT_818JT301_BLK_2_2022JULY47992.jpg"
    ]
  },
  {
    id: 37,
    name: "No Escape Strappy Bodystocking",
    category: "dresses",
    categoryLabel: "Mini Dress",
    price: 17.99,
    oldPrice: null,
    badge: "new",
    rating: 4.9,
    reviews: 518,
    sizes: ["XS","S","M","L","XL"],
    description: "Full-body fishnet stocking with criss-cross strap detailing across the midriff and wide open cutouts at the hips. Available in deep purple or blood red. One size fits most curves — and all fantasies.",
    img: "assets/images/YT_818JT380_PUR_2_l_2024OCT.jpg",
    imgs: [
      "assets/images/YT_818JT380_PUR_2_l_2024OCT.jpg",
      "assets/images/YT_818JT380_PUR_3_l_2024OCT.jpg",
      "assets/images/YT_818JT380_RED_2_l_2024OCT.jpg",
      "assets/images/YT_818JT380_RED_3_l_2024OCT.jpg"
    ]
  },
  {
    id: 38,
    name: "Web of Desire Open-Knit Bodysuit",
    category: "dresses",
    categoryLabel: "Mini Dress",
    price: 16.99,
    oldPrice: 21.99,
    badge: "sale",
    rating: 4.8,
    reviews: 392,
    sizes: ["XS","S","M","L","XL"],
    description: "Lavender or red open-weave crochet bodysuit with an intricate lattice lace-up V at the chest and organic cut-out pattern throughout. Barely holding it together — and that's entirely the point.",
    img: "assets/images/YT_818JT395_LAV_XL_2023JUNE.jpg",
    imgs: [
      "assets/images/YT_818JT395_LAV_XL_2023JUNE.jpg",
      "assets/images/YT_818JT395_LAV_2_XL_2023JUNE.jpg",
      "assets/images/YT_818JT395_RED_xl_2023AUG.jpg",
      "assets/images/YT_818JT395_RED_2_xl_2023AUG.jpg"
    ]
  },

  // ── HEELS & BOOTS ──────────────────────────────────────────
  {
    id: 27,
    name: "Devil's Lace-Up Platform Heels",
    category: "shoes",
    categoryLabel: "Heels & Boots",
    price: 27.99,
    oldPrice: 29.99,
    badge: "sale",
    rating: 4.8,
    reviews: 267,
    sizes: ["5","6","7","8","9","10","11"],
    description: "Black patent platform heels with a scarlet ribbon lace-up back and matching red eyelet detailing along the platform edge. Two interchangeable ribbon sets included — switch up your sin.",
    img: "assets/images/PR_DELIGHT_600_14FH-DEL600-14FH_B_M.jpg",
    imgs: ["assets/images/PR_DELIGHT_600_14FH-DEL600-14FH_B_M.jpg"]
  },
  {
    id: 28,
    name: "Sinful Cuff Platform Sandal",
    category: "shoes",
    categoryLabel: "Heels & Boots",
    price: 25.99,
    oldPrice: null,
    badge: "new",
    rating: 4.7,
    reviews: 183,
    sizes: ["5","6","7","8","9","10","11"],
    description: "Sleek platform sandal with a broad ankle cuff that means serious business. Open peep-toe, 6-inch stiletto heel, and a 1.75-inch platform. Available in classic black or pure white — both equally dangerous.",
    img: "assets/images/PR_delight-670-3_b_C2013.jpg",
    imgs: [
      "assets/images/PR_delight-670-3_b_C2013.jpg",
      "assets/images/PR_delight-670-3_w_C2013.jpg"
    ]
  },
  {
    id: 41,
    name: "Lace Me Up Ankle Booties",
    category: "shoes",
    categoryLabel: "Heels & Boots",
    price: 28.99,
    oldPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 214,
    sizes: ["5","6","7","8","9","10","11"],
    description: "Open-toe platform ankle booties with a full-front lace-up corset closure and silver eyelet hardware. Available in glossy patent or matte vegan leather — both with a 6-inch stiletto that makes every step a statement.",
    img: "assets/images/delight-1016-b.jpg",
    imgs: [
      "assets/images/delight-1016-b.jpg",
      "assets/images/delight-1016-bpu.jpg"
    ]
  },
  {
    id: 29,
    name: "Thigh-High Obsession Boots",
    category: "shoes",
    categoryLabel: "Heels & Boots",
    price: 29.99,
    oldPrice: null,
    badge: null,
    rating: 4.9,
    reviews: 634,
    sizes: ["5","6","7","8","9","10","11"],
    description: "Jet-black patent leather thigh-high stiletto boots with a pointed toe and a 5-inch heel. They go all the way up — and so does every head in the room when you walk in. The boots that end conversations and start obsessions.",
    img: "assets/images/PR_Seduce-3010_black-2025.jpg",
    imgs: ["assets/images/PR_Seduce-3010_black-2025.jpg"]
  },

  // ── COSTUMES ───────────────────────────────────────────────
  {
    id: 30,
    name: "Officer Danger Cop Costume",
    category: "costumes",
    categoryLabel: "Costume",
    price: 23.99,
    oldPrice: null,
    badge: "new",
    rating: 4.8,
    reviews: 512,
    sizes: ["XS","S","M","L","XL"],
    description: "You have the right to remain irresistible. Black zip-up romper with a police badge, leather-look cuffs, duty belt, fishnet thigh-highs, knee-high strap boots, hat, and handcuffs included. All rise.",
    img: "assets/images/RM_1212_1_2018Halloween.jpg",
    imgs: [
      "assets/images/RM_1212_1_2018Halloween.jpg",
      "assets/images/RM_1212_2_2018Halloween.jpg",
      "assets/images/RM_1212_3_2018Halloween.jpg",
      "assets/images/RM_1212_4_2018Halloween.jpg"
    ]
  },
  {
    id: 31,
    name: "Straight-A's Temptress Costume",
    category: "costumes",
    categoryLabel: "Costume",
    price: 18.99,
    oldPrice: 23.99,
    badge: "sale",
    rating: 4.7,
    reviews: 389,
    sizes: ["XS","S","M","L","XL"],
    description: "Class is officially in session. Deep-plunge white tie-front crop top, plaid mini skirt with black suspenders, white knee socks, and classic Mary-Janes. She studied real hard to look this naughty.",
    img: "assets/images/RM_4753.jpg",
    imgs: [
      "assets/images/RM_4753.jpg",
      "assets/images/RM_4753_Back.jpg"
    ]
  }

];
