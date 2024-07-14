import React from "react";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opactiy: 0 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
    </motion.div>
  );
};

export default Movie;
