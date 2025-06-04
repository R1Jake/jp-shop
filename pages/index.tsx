import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: "1", name: "Hoodie", price: 55, image: "/hoodie.jpg" },
      { id: "2", name: "Tee", price: 25, image: "/tee.jpg" }
    ]);
  }, []);

  return (
    <>
      <Header />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}