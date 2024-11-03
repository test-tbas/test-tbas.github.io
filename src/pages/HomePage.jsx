import React from 'react';

import Hero from "newComponents/Home/Hero.jsx";
import Concerns from 'newComponents/Home/Concerns';
import TrialLesson from 'newComponents/Home/TrialLesson';
import KeyAspects from 'newComponents/Home/KeyAspects';
import CoursePlans from 'newComponents/Home/CoursePlans';
import StartJourneyHero from 'newComponents/Home/StartJourney';
import TestimonialComponent from "newComponents/Home/Testimonial.jsx";
import Header from "newComponents/Header/Header.jsx";
import Footer from "newComponents/Footer/Footer.jsx";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";


export default function HomePage(props){
  
  return (
      <AnimationRevealPage>
        <Header language = {props.language} />
        <Hero language = {props.language}/>
        <Concerns language = {props.language}/>
        <TrialLesson language = {props.language}/>
        <KeyAspects language = {props.language}/>
        <StartJourneyHero language = {props.language}/>

        <CoursePlans language = {props.language}/>
        <TestimonialComponent language = {props.language} isHome={true}/>
        <Footer language = {props.language}/>
      </AnimationRevealPage>
    
  );
}
