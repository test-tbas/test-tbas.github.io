import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import AccessInfo from "newComponents/Access/AccessInfo.jsx"

export default function AccessPage(props){
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <AccessInfo language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
