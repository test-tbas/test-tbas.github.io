import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { useNavigate } from 'react-router-dom';

/* ========= importing assets ============ */
import {MainParagraph2 as MainParagraph2Template,
  MainHeading2 as MainHeadingTemplate,
  PrimaryButton as PrimaryButtonBase,
  Container as ContainerBase, 
  ContentFormatted2
} from "assets/styles/TailwindComponents.jsx";

import { startJourneyInfo } from "assets/tbas-data/TBas_Info.jsx";
import { ReactComponent as ArrowIcon } from "feather-icons/dist/icons/arrow-right-circle.svg";

const PrimaryBackgroundContainer = styled.div`
  ${tw`text-main-white bg-no-repeat bg-cover bg-left md:bg-center content-center w-full h-96 sm:h-112 md:h-128 lg:h-176 z-10 flex items-center justify-center`}
  background-image: url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

const Container = tw(ContentFormatted2)`w-4/5 md:w-full md:pl-8 xl:pl-0`

const TextColumn = tw.div`text-left self-center`;

const Heading = tw(MainHeadingTemplate)`leading-tight tracking-widest mb-8 md:mb-16`;
const Description = tw(MainParagraph2Template)`tracking-widest font-medium text-left`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-6 md:mt-10 md:p-4 bg-tbasMain-purple900 inline-block hocus:bg-tbasMain-orange rounded-lg`;

var currInfo = startJourneyInfo[0];
var currNavPath = "/";
export default function StartJourneyHero(props) {
  if(props.language === "ENG"){
    currInfo = startJourneyInfo[1];
    currNavPath = "/eng/";
  }
  const navigate = useNavigate();

  return (
    <PrimaryBackgroundContainer>
      <Container>
        <TextColumn>
          <Heading>{currInfo.Heading}</Heading>
          <Description>{currInfo.Description}</Description>
          <PrimaryButton onClick={() => navigate(currNavPath + "tutors")}>
            {currInfo.Button}
            <ArrowIcon tw="w-6 h-6 inline ml-4 mb-2" />
          </PrimaryButton>
        </TextColumn>
      </Container>
    </PrimaryBackgroundContainer>
  );
};
