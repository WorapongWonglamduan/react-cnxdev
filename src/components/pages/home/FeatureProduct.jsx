import React, { useEffect, useState } from "react";
import "./Home.css";
import "./FeatureProduct.css";
import Filter from "../../utils/filter-motion/Filter";
import { motion, AnimatePresence } from "framer-motion";
import Movie from "../../utils/filter-motion/Movie";
const FeatureProduct = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=1dfcce0b8c5b9ce64123438b04c4e865&language=en-US"
    );
    const movies = await data.json();
    console.log("====================================");
    console.log("movies-<>", movies);
    console.log("====================================");
    console.log(movies);
    setPopularMovies(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <>
      <div
        style={{
          // background:
          //   "linear-gradient(45.21deg, rgba(0, 0, 0,0.8) 70.01%, #4a2fbd 100.59%)",
          // minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="wrap-page">
            <Filter
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
              popular={popularMovies}
              setFiltered={setFiltered}
            />
            <motion.div layout className="popular-movies">
              <AnimatePresence>
                {filtered &&
                  filtered.map((movie) => {
                    return <Movie movie={movie} key={movie.id} />;
                  })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
