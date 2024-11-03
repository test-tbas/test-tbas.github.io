import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import AboutUsComponent from 'newComponents/AboutUs/AboutUs.jsx';

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";

export default function AboutPage(props){
  
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />

        <AboutUsComponent language = {props.language}/>
        
        <Footer language = {props.language}/>
      </AnimationRevealPage>
  );
}
