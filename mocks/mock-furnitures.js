const furnitures = [
  {
    id: 1,
    name: "Tabouret de bar",
    type: "chaise",
    price: 150,
    description: "Chic et contemporain, avec son alliance de cuir blanc et de chêne naturel travaillé artisanalement, il bénéficie d'une assise rembourrée pour un confort incomparable.",
    material: ["bois", "cuir"],
    color: "marron",
    size:  "h:87cm l:40cm p:46cm",
    accepted: false ,
    image_url:"https://res.cloudinary.com/shaa94/image/upload/v1656941030/Tabouret_de_bar_tuneyp.jpg",
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 2,
    name: "Lit enfant",
    type: "lit",
    price: 100,
    description: "Le lit enfant en bois gris est un lit de transition utilisable à partir de 2 ans. Un sommier rabaissé, une taille adaptée au petit enfant de 2-3 ans, il est pourvu de barrières anti-chute sur les côtés.",
    material: ["bois"],
    color: "gris",
    size: "h:60cm l:76cm p:50cm",
    accepted: true,
    image_url: "https://res.cloudinary.com/shaa94/image/upload/v1656941375/lit_enfant_snkdi3.jpg",
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 3,
    name: "Table en verre",
    type: "Table",
    price: 150,
    description: "La table verre Spyder  est supportée par une  base en acier.",
    material: ["verre"],
    color: "marron",
    size: "h:80cm l:70cm p:50cm",
    accepted: true,
    image_url: "https://res.cloudinary.com/shaa94/image/upload/v1656942393/Table_en_verre_rlyyvm.jpg",
    created_at: new Date(),
    edited_at: new Date(),
  }

];

module.exports = furnitures
