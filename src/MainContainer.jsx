import React from "react";
import Head from "./Head";
import Header from "./Header";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import PlatformSection from "./PlatformSection";
import ExploreSection from "./ExploreSection";
import Footer from "./Footer";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <main className={styles.mainContainer}>
      <Head />
      <Header />
      <HeroSection />
      <InfoSection />
      <PlatformSection />
      <ExploreSection />
      <Footer />
    </main>
  );
};

export default MainContainer;
