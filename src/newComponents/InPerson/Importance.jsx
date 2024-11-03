import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as MainHeadingTemplate,
  MainHeading3 as MainHeading3Template,
  MainParagraph3 as MainParagraphTemplate,
  ContentFormatted
} from "assets/styles/TailwindComponents.jsx";

import { inPerson_WhySelect } from "assets/tbas-data/TBas_Info.jsx";
import svgDotPattern from "assets/tbas-images/background/dotBackground.svg";

const Container = tw(ContentFormatted)`relative py-12`;

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const MainHeading = tw(MainHeadingTemplate)`w-full tracking-wide text-center text-tbasMain-purple900`;

const Row = tw.div`flex flex-col md:flex-row justify-between items-center mx-auto py-8 sm:py-16`;

const BaseTextColumn = tw.div`w-4/5 md:w-1/2 text-main-black`;
const TextColumn = styled(BaseTextColumn)(({ isRight }) => [
  isRight ? tw`md:mr-12 justify-start`
  : tw`md:ml-12 justify-end`
]);
const HeadingRow = tw.div`flex flex-row justify-center items-center mb-10`;
const NumberCol = tw.div`mt-3 md:mt-0 w-1/4 flex justify-center items-center`;
const KeyNumber = tw.h1`text-6xl sm:text-8xl lg:text-10xl xl:text-[7.5rem] font-YuGothic font-black tracking-widest`;

const HeaderCol = tw.div`flex w-3/4 h-full mt-4`
const Heading = tw(MainHeading3Template)`text-left tracking-widest`;
const Description = tw(MainParagraphTemplate)`px-6 md:px-0 mt-4 text-main-black leading-relaxed`;

const BaseImageColumn = tw.div`mt-0 mb-12 sm:mb-8 md:mb-0 w-3/5 md:w-1/2 relative h-48 md:h-112 flex hidden md:inline`;
const ImageColumn = styled(BaseImageColumn)(({ isRight }) => [
  isRight ? tw`md:ml-12 justify-end`
  : tw`md:mr-12 justify-start`
]);
const MobileImageColumn = tw(ImageColumn)`inline md:hidden`;

const ImageContainer = tw.div`relative z-40 h-full w-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center object-center m-auto w-full h-full`
]);

const Offsetbackground = tw.div`absolute inset-0 bg-tbasMain-purple500 w-full h-full right-0 
-translate-x-4 translate-y-4
md:-translate-x-8 md:translate-y-8`;

const OffsetSvg = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`absolute inset-0 bg-cover bg-center m-auto w-full h-full left-0 
  translate-x-4 translate-y-4
  md:translate-x-8 md:translate-y-8`
]);

var currInfo = inPerson_WhySelect[0];
export default function ImportanceHero(props) {
  if(props.language === "ENG"){
    currInfo = inPerson_WhySelect[1];
  }
  return (
    <Container>
      <HeaderContainer>
        <MainHeading>{currInfo.Heading}</MainHeading>
      </HeaderContainer>
      {currInfo.Reasons.map((reason, index) => (
        <Row key={index}>
          {(index % 2) == 0 ? 
          <>
            <MobileImageColumn isRight={true}>
              <ImageContainer>
                <Image imageSrc={reason.ImageUrl} />
              </ImageContainer>
              <Offsetbackground />
            </MobileImageColumn>
            <TextColumn isRight={true}>
              <HeadingRow>
                <NumberCol>
                  <KeyNumber>0{index + 1}</KeyNumber>
                </NumberCol>
                <HeaderCol>
                  <Heading>{reason.SubHeading}</Heading>
                </HeaderCol>
              </HeadingRow>
              <Description>{reason.Description}</Description>
            </TextColumn>
            <ImageColumn isRight={true}>
              <ImageContainer>
                <Image imageSrc={reason.ImageUrl} />
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </>
          : 
          <>
            <ImageColumn tw="inline">
              <ImageContainer>
                <Image imageSrc={reason.ImageUrl} />
              </ImageContainer>
              <OffsetSvg imageSrc={svgDotPattern} />
            </ImageColumn>
            <TextColumn>
              <HeadingRow>
                <NumberCol>
                  <KeyNumber>0{index + 1}</KeyNumber>
                </NumberCol>
                <HeaderCol>
                  <Heading>{reason.SubHeading}</Heading>
                </HeaderCol>
              </HeadingRow>
              <Description>{reason.Description}</Description>
            </TextColumn>
          </>}
        </Row>
      ))}
    </Container>
  );
};
