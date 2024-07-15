import React, { useEffect, useState } from "react";
import HomeSlider from "./HomeSlider";
import FeatureProduct from "./FeatureProduct";

import JsonData from "../../../data/data.json";
import Service from "./Service";
import About from "./About";
import Footer from "../../layouts/Footer";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <HomeSlider />
      <About data={landingPageData.About} />
      <Service data={landingPageData.Services} />
      <FeatureProduct />
      <Footer />
    </>
  );
};

export default Home;
