import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import ApplyForm from "newComponents/Apply/ApplyForm.jsx";

export default function ApplyPage(props){
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <ApplyForm language = {props.language} />
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
