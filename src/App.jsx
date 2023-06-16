import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/porfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

const GA_TRACKING_ID = "UA-196441380-1"; //Google analytics TRACKING ID
ReactGA.initialize(GA_TRACKING_ID);

export default function App() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Analytics />
      <Header />
      <Nav />
      <About />
      {/* <Experience/> */}
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
