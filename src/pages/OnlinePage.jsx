import React from 'react';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";
import OnlineHeader from 'newComponents/Online/Hero.jsx';
import CoursePlans from 'newComponents/Home/CoursePlans';

import ImportanceHero from 'newComponents/Online/Importance.jsx';
import TrialLesson from 'newComponents/Home/TrialLesson';

export default function AboutPage(props){
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <OnlineHeader language = {props.language} />
      <CoursePlans language = {props.language} removeButton = {true} removeMYP = {true} isOnline = {true}/>

      <ImportanceHero language = {props.language} />
      
      <TrialLesson language = {props.language}/>
      
      <Footer language = {props.language}/>
    </AnimationRevealPage>
  );
}
