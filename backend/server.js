import express from "express";
import cors from "cors";

const app=express();

app.use(cors());
app.get("/",(req, res)=>{
res.send("shopsphere backend is runing!");
});
app.listen(5001, () => {
  console.log("ShopSphere backend running on port 5000");
});
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 1999,
    category: "Fashion",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 3499,
    category: "Electronics",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: 1499,
    category: "Accessories",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
];
app.get("/api/products", (req, res) => {
  res.json(products);
});