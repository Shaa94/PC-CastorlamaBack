const furnitures = [
  {
    id: 1,
    name: "Chaise en bois",
    type: "chaise",
    price: 10,
    description: "Superbe chaise en bois HYPER confortable",
    material: ["bois"],
    color: "marron",
    size:  "h:90cm l:45cm p:47cm",
    accepted: false ,
    image_url:"https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409611/cld-sample-5.jpg",
    created_at: new Date(),
    edited_at: new Date(),
  },
  {
    id: 2,
    name: "Super lit",
    type: "lit",
    price: 50,
    description: "Superbe lit en bois HYPER confortable",
    material: ["bois"],
    color: "bleu",
    size: "h:60cm l:180cm p:200cm",
    accepted: true,
    image_url: "https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409586/sample.jpg",
    created_at: new Date(),
    edited_at: new Date(),
  }
];

module.exports = furnitures
