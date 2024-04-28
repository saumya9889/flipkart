import "./assets/style/global.scss";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MegaMenuCard from "./components/MegaMenuCard";
import { ElectroMenu } from "./components/ElectroMenu";
import { MobileCategory } from "./components/MobileCategory";
import React from "react";
import BannerCarousel from "./components/BannerCarousel";
import Footer from "./components/Footer";
import FooterCard from "./components/footerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OtherItem } from "./components/OtherItem";
function App() {
  return (
    <>
      <Navbar />
      <MegaMenuCard />
      <ElectroMenu />
      <BannerCarousel />
      <MobileCategory />
      <OtherItem />
      <Footer />
      <FooterCard />
    </>
  );
}

export default App;
