import React, { useState } from "react";
import Hero from "../components/HeroSection/Index";
import Navbar from "../components/Navbar/Index";
import SideBar from "../components/Sidebars/Index";
import DataSection from "../components/DataSection/Index";
import {
  homeObjectOne,
  homeObjectTwo,
  homeObjectThree
  
} from "../components/DataSection/Info";
import Service from "../components/Services/Index";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <SideBar isOpen={isOpen} toggle={toggle} />                                                                                           
      <Navbar toggle={toggle} />
      <Hero />
      <DataSection {...homeObjectOne} />
      <DataSection {...homeObjectTwo} />
      <Service/>
      <DataSection {...homeObjectThree} />
      <Footer/>
      
    </>
  );
};

export default Home;
