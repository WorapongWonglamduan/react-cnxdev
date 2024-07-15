import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";

const CardFilter = ({ product }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="popular-movies--mod"
    >
      <motion.img
        src={product.image}
        alt={product.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="text-center pt-2"
      >
        <Button> {product.title}</Button>
      </motion.p>
    </motion.div>
  );
};

export default CardFilter;
