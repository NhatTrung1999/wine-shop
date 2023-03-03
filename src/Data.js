let allProducts = [
    {
        id: 1,
        title: "Andre Brut Champagne Sparkling Wine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOs8zMiY9D4nOdAyFOcy3Vipt1t4sEf0l-pw&usqp=CAU",
        price: 10000,
        count: 1,
        isInterest: false,
        category: "Champagne",
    },
    {
        id: 2,
        title: "Iqos Iluma Kit Oasis Limited Edition",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmHdqYYM9JMQwk_USFZbhpBjmbZbHtNGVqw&usqp=CAU",
        price: 13000,
        count: 1,
        isInterest: false,
        category: "IQOS",
    },
    {
        id: 3,
        title: "IQOS Originals DUO - Silver",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSH4J1Tq6t42URiHYYRDmwi8ESosNAxQF1Q&usqp=CAU",
        price: 15000,
        count: 1,
        isInterest: false,
        category: "IQOS",
    },
    {
        id: 4,
        title: "IQOS Originals DUO - Slate",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Zsgy6nLuMCIbIu5aA6uxALWVkdNqouTh7Q&usqp=CAU",
        price: 12500,
        count: 1,
        isInterest: false,
        category: "IQOS",
    },
    {
        id: 5,
        title: "IQOS Lil Sold Cover - Souq Jeddah",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj5_CPwjslc_uyVa_zNniYLYnIaX9s0jd3g&usqp=CAU",
        price: 8500,
        count: 1,
        isInterest: false,
        category: "IQOS",
    },
    {
        id: 7,
        title: "IQOS Kit - (3.0 Multi Grey)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTI_mlzV2HXY09wfTyectL248U7oEibj_Lg&usqp=CAU",
        price: 12000,
        count: 1,
        isInterest: false,
        category: "IQOS",
    },
    {
        id: 8,
        title: "Fucoidan AF Premium",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqRMt4bOWEv1QKzDH-os_vo1ZSGXRqffCvQ&usqp=CAU",
        price: 8000,
        count: 1,
        isInterest: false,
        category: "FUCOIDAN",
    },
    {
        id: 9,
        title: "Fucoidan Okinawa Mozuku",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLd6In_o3ZKk_vhxp0fxCXWVCqG3uDf1n4Kw&usqp=CAU",
        price: 4000,
        count: 1,
        isInterest: false,
        category: "FUCOIDAN",
    },
    {
        id: 10,
        title: "Okinawa Fucoidan Drink",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8IdrszIyAZdKTBcH7rHkae6G8AMEaXr75w&usqp=CAU",
        price: 16500,
        count: 1,
        isInterest: false,
        category: "FUCOIDAN",
    },
    {
        id: 11,
        title: "Vang Freixenet Italian Rosé Sparkling",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBJHbJNUOmQ_lQJXXZz6lLPy99aseP4ZJfQ&usqp=CAU",
        price: 7000,
        count: 1,
        isInterest: false,
        category: "Vang",
    },
    {
        id: 12,
        title: "Rượu Vang Chile Blue Valley",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiz83iC01_OgL8LwHNyyWORvAph1I1ncT9fA&usqp=CAU",
        price: 18000,
        count: 1,
        isInterest: false,
        category: "Vang",
    },
    {
        id: 13,
        title: "Rượu Vang Đà Lạt Superior Red Wine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHc4Qc0c8Qbbc8WOdj-_txq5oayeoGLUji6Q&usqp=CAU",
        price: 20000,
        count: 1,
        isInterest: false,
        category: "Vang",
    },
    {
        id: 14,
        title: "Champagne Cattier Brut Blanc de Blancs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1CkBX-JUd2VHIXDiOQOltOwGpieONPs-Jw&usqp=CAU",
        price: 8000,
        count: 1,
        isInterest: false,
        category: "Champagne",
    },
    {
        id: 15,
        title: "Rượu Vang EXCELLENCE Đỏ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuhx-06HJ00lydDTsmqcp-Vpu7hotu3SNBg&usqp=CAU",
        price: 25000,
        count: 1,
        isInterest: false,
        category: "Vang",
    },
    {
        id: 16,
        title: "Champagne Moet Chandon Ice Imperial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhQMwMxw8ln5qi0PADzcWvLMa1uEtQ1CmTA&usqp=CAU",
        price: 47000,
        count: 1,
        isInterest: false,
        category: "Champagne",
    },
    {
        id: 17,
        title: "Rượu Vang Mỹ Random Sweet Red Wine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MnX6HCbwxZgflkzavDs2ON2kHWtL_xsWkA&usqp=CAU",
        price: 13500,
        count: 1,
        isInterest: false,
        category: "Vang",
    },
    {
        id: 18,
        title: "Champagne Piper - Heidsieck Cuvee Brut",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0rjkYLdH_LzRkdBQXKbF8rZJYJh3Vv-flg&usqp=CAU",
        price: 25500,
        count: 1,
        isInterest: false,
        category: "Champagne",
    },
    {
        id: 19,
        title: "Ozeki Sake Premium Junmai",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsfEBqN6TJUrI7rrPbJWn2N0zzEJoO7XSyg&usqp=CAU",
        price: 55000,
        count: 1,
        isInterest: false,
        category: "Sake",
    },
    {
        id: 20,
        title: "Champagne Nicolas Feuillatte Brut",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSZoyqaTqLvKye3dsJeUahrg2R0GQZOo2q-u0tL7H1Ae_IkjZ-oCRBPcpc2y1299faoY&usqp=CAU",
        price: 12500,
        count: 1,
        isInterest: false,
        category: "Champagne",
    },
    {
        id: 21,
        title: "Sake Nishinoseki Nigorizake",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2nk34NbSkJRL3kqt183dGuNCYqbxUZuycQ&usqp=CAU",
        price: 45000,
        count: 1,
        isInterest: false,
        category: "Sake",
    },
    {
        id: 22,
        title: "Sho Chiku Bai Sake Wine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qzMXFaDWDtWHqiZ14mZILinPTIjGlu_ecA&usqp=CAU",
        price: 150000,
        count: 1,
        isInterest: false,
        category: "Sake",
    },
    {
        id: 23,
        title: "Whisky White Horse",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmeGVmw2NF4ItLstYsBarsaLRp3P8hbrzfw&usqp=CAU",
        price: 12000,
        count: 1,
        isInterest: false,
        category: "Whisky",
    },
    {
        id: 24,
        title: "Japanese sake",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0H7yPAAdamMSfT41tcFVIT_PoV0b449tgQ&usqp=CAU",
        price: 40000,
        count: 1,
        isInterest: false,
        category: "Sake",
    },
    {
        id: 25,
        title: "Ozeki Junmai Sake",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSke2AcywwVVS0yziUfN_k8eCXpBtYcbMbmCg&usqp=CAU",
        price: 50000,
        count: 1,
        isInterest: false,
        category: "Sake",
    },
    {
        id: 26,
        title: "Walton Blended Scotch Whisky",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHVjK0eEge1wmZsJD8FEfhQuLOJFscLaH0Bg&usqp=CAU",
        price: 60000,
        count: 1,
        isInterest: false,
        category: "Whisky",
    },
    {
        id: 27,
        title: "Whisky Waitrose & Partners",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_aj1yRIW6uoBcL_yNqPtRHaiXUfSj8PVIA&usqp=CAU",
        price: 55000,
        count: 1,
        isInterest: false,
        category: "Whisky",
    },
    {
        id: 28,
        title: "Quady's 'Essensia' Orange Muscat - Soho",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0rfM_6TKE3v58GgWsIBpeH3yjTDCw-SDFQ&usqp=CAU",
        price: 30000,
        count: 1,
        isInterest: false,
        category: "ESS",
    },
    {
        id: 29,
        title: "Fucoidan Original",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvK4XaVH59Hzarc6sdddAjhhWzWxTzn47RA&usqp=CAU",
        price: 20000,
        count: 1,
        isInterest: false,
        category: "FUCOIDAN",
    },
    {
        id: 30,
        title: "Pajzos Tokaji Esszencia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXxq36n_7b5xkD7vw8pv-KdNTXZAR7tC08Q&usqp=CAU",
        price: 17000,
        count: 1,
        isInterest: false,
        category: "ESS",
    },
    {
        id: 31,
        title: "Chateau Pajzos Tokaji Esszencia 1993",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfgScsAcvb-7IHbsuXGqSNOsI-NVy7c-03g&usqp=CAU",
        price: 22000,
        count: 1,
        isInterest: false,
        category: "ESS",
    },
    {
        id: 32,
        title: "Monkey Shoulder Scotch Whisky",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jJt_CV-346BtMrZXPh-YIQ-HvpjLjhYIuQ&usqp=CAU",
        price: 24000,
        count: 1,
        isInterest: false,
        category: "Whisky",
    },
    {
        id: 33,
        title: "Blended Scotch Whisky",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ878tefIPSLIqRYDMA4jJOm6exmwWNTi8jgw&usqp=CAU",
        price: 55000,
        count: 1,
        isInterest: false,
        category: "Whisky",
    },
    {
        id: 34,
        title: "Scotch Whisky The Macallan Sherry Oak",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDxC5_8d2-K_MpyHSOMpc3V_Qcs57w_eslg&usqp=CAU",
        price: 8000,
        count: 1,
        isInterest: false,
        category: "Whisky",
    },
    {
        id: 35,
        title: "Ess & See Shiraz 2014 Adelaide Hills",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRucQClGZrwVe5Se09HyGrtcx5mAE28sdWg&usqp=CAU",
        price: 13000,
        count: 1,
        isInterest: false,
        category: "ESS",
    },
    {
        id: 36,
        title: "IQOS Lil Solid Black Kit",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLiQ1c3-tQYMzUKyvBk3iM6Cy7EQsPLHEHOw&usqp=CAU",
        price: 4000,
        count: 1,
        isInterest: false,
        category: "IQOS",
    },
    {
        id: 37,
        title: "IQOS ILUMA Kit Pebble Grey cheaply",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpkXZ3eRhnOOoJ68X2llYu_ZaMikggG8nTA&usqp=CAU",
        price: 12000,
        count: 1,
        isInterest: false,
        category: "IQOS",
    },
];

export default allProducts;
