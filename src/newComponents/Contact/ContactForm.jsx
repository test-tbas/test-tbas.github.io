import React, {useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    ContentFormatted as BaseContainer,
    SubMainHeading3 as SubMainHeading3Template,
    MainParagraph as MainParagraphTemplate,
    MainParagraph2 as SectionDescriptionBase,
    MainParagraph3 as MainParagraph3Base,
    ContentFormatted2, HiddenBr_BreakPoint3
  } from "assets/styles/TailwindComponents.jsx";

import { contactForm } from "assets/tbas-data/TBas_Info.jsx";

import lineLogo from "assets/tbas-images/logo/Line_logo.png";
import lineQR from "assets/tbas-images/logo/line_contact_qr.png";


const Container = tw(BaseContainer)`lg:py-12`;

const Heading = tw(MainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest font-black pl-4 md:pl-8 2xl:pl-0 pt-8 pb-6`;
const HorizontalLine = tw.div`text-main-black bg-main-black border h-[3px]`;

const SubHeading = tw(SectionDescriptionBase)`text-left mt-4 text-main-black font-normal py-6`;

const Banner = tw(SubMainHeadingTemplate)`bg-tbasMain-purple500 text-main-white p-6 rounded-2xl`;

const FlowHeading = tw(SubMainHeading3Template)`text-main-black font-black`;

const Row = tw.div`flex flex-row`;
const FlowContainer = tw.div`pt-6`;

const Arrow = tw.div`flex flex-row`;
const ArrowText = tw(SectionDescriptionBase)`text-main-white bg-main-red flex items-center justify-center h-full pl-1 md:pl-4 font-black`;
const Triangle = tw.div`inline flex justify-center w-0 h-0 
border-t-[25px] sm:border-t-[50px] border-t-tbasMain-purple500
border-b-[25px] sm:border-b-[50px] border-b-tbasMain-purple500
border-l-[20px] sm:border-l-[30px] lg:border-l-[40px] border-l-transparent`;
const RightTriangle = tw.div`inline flex justify-center w-0 h-0 
border-t-[25px] sm:border-t-[50px] border-t-tbasMain-purple700
border-b-[25px] sm:border-b-[50px] border-b-tbasMain-purple700
border-r-[20px] sm:border-r-[30px] lg:border-r-[40px] border-r-transparent`;

const SmallerTriangle = tw.div`inline flex justify-center w-0 h-0 
border-t-[20px] border-t-tbasMain-purple500
border-b-[20px] border-b-tbasMain-purple500
border-l-[25px] border-l-transparent`;

const FlexTriangle = tw.div`flex flex-col`

const Bullets = tw.ul`list-disc font-YuGothic font-light text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
pl-8`;
const BulletItems = tw.li`font-YuGothic font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
text-left text-main-black`;

const BoldBullet = tw.span`font-YuGothic font-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
text-left text-main-black`;

const ImageColumn = tw.div`w-full md:w-1/3 h-24 md:h-32 flex flex-row items-center justify-center`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-contain bg-no-repeat bg-center object-center m-auto w-full h-full rounded-r-3xl`
]);
const SocialLink = tw.a`cursor-pointer inline-block mx-4 w-full h-full`;

var currInfo = contactForm[0];
export default function ContactForm(props) {
  if(props.language === "ENG"){
    currInfo = contactForm[1];
  }

  return (
    <Container>
      <Heading>{currInfo.heading}</Heading>
      <HorizontalLine />
      <HiddenBr_BreakPoint3 />
      <ContentFormatted2 tw="px-4 lg:px-0">
        <SubHeading>{currInfo.subHeading}</SubHeading>
        <Banner>{currInfo.flowHeading}</Banner>
        <FlowHeading tw="pt-8 lg:pt-16">{currInfo.flowSubHeading}</FlowHeading>
        <FlowContainer>
          <Row tw="hidden md:flex">
            <Arrow>
              <ArrowText>{currInfo.flow[0]}</ArrowText>
              <Triangle tw="border-l-main-red border-b-transparent border-t-transparent"/>
            </Arrow>
            <FlexTriangle>
              <Arrow>
                <SmallerTriangle />
                <ArrowText tw="bg-tbasMain-purple500 h-full">{currInfo.flow[1]}</ArrowText>
                <SmallerTriangle tw="border-l-tbasMain-purple500 border-t-transparent border-b-transparent"/>
              </Arrow>
              <Arrow tw="pt-4 ">
                <SmallerTriangle />
                <ArrowText tw="bg-tbasMain-purple500 h-full w-full">{currInfo.flow[2]}</ArrowText>
                <SmallerTriangle tw="border-l-tbasMain-purple500 border-t-transparent border-b-transparent"/>
              </Arrow>
            </FlexTriangle>
            <Arrow>
              <Triangle />
              <ArrowText tw="bg-tbasMain-purple500">{currInfo.flow[3]}</ArrowText>
              <Triangle tw="border-l-tbasMain-purple500 border-t-transparent border-b-transparent"/>
            </Arrow>
            <Arrow>
              <Triangle tw="border-l-transparent border-t-tbasMain-purple700 border-b-tbasMain-purple700"/>
              <ArrowText tw="bg-tbasMain-purple700 px-4">{currInfo.flow[4]}</ArrowText>
              <RightTriangle/>
            </Arrow>
          </Row>
          <Row tw="flex flex-col md:hidden">
            <Row>
              <Arrow tw="basis-1/3">
                <ArrowText>{currInfo.flow[0]}</ArrowText>
                <Triangle tw="border-l-main-red border-b-transparent border-t-transparent border-t-[50px] border-b-[50px] "/>
              </Arrow>
              <FlexTriangle>
                <Arrow>
                  <SmallerTriangle />
                  <ArrowText tw="bg-tbasMain-purple500 h-full">{currInfo.flow[1]}</ArrowText>
                  <SmallerTriangle tw="border-l-tbasMain-purple500 border-t-transparent border-b-transparent"/>
                </Arrow>
                <Arrow tw="pt-4 ">
                  <SmallerTriangle />
                  <ArrowText tw="bg-tbasMain-purple500 h-full w-full">{currInfo.flow[2]}</ArrowText>
                  <SmallerTriangle tw="border-l-tbasMain-purple500 border-t-transparent border-b-transparent"/>
                </Arrow>
              </FlexTriangle>
            </Row>
            <Row tw="pt-6 pl-12 md:pl-20">
              <Arrow>
                <Triangle />
                <ArrowText tw="bg-tbasMain-purple500">{currInfo.flow[3]}</ArrowText>
                <Triangle tw="border-l-tbasMain-purple500 border-t-transparent border-b-transparent"/>
              </Arrow>
              <Arrow>
                <Triangle tw="border-l-transparent border-t-tbasMain-purple700 border-b-tbasMain-purple700"/>
                <ArrowText tw="bg-tbasMain-purple700 px-4">{currInfo.flow[4]}</ArrowText>
                <RightTriangle/>
              </Arrow>
            </Row>
          </Row>
        </FlowContainer>
        <SubHeading tw="underline">{currInfo.lineHeading}</SubHeading>
        <Row tw="gap-x-6 md:gap-x-24">
          <Bullets>
            <BulletItems>
              {currInfo.lineBullets[0][0]}
              <BoldBullet>{currInfo.lineBullets[0][1]}</BoldBullet>
              {currInfo.lineBullets[0][2]}
            </BulletItems>
            <BulletItems>{currInfo.lineBullets[1]}</BulletItems>
            <BulletItems>{currInfo.lineBullets[2]}</BulletItems>
          </Bullets>
          <ImageColumn tw="md:pl-16 gap-x-2">
            <Image imageSrc={lineQR} />
            <SocialLink href="https://lin.ee/Gi1y1hz" target="_blank" >
              <Image imageSrc={lineLogo} />
            </SocialLink>
            
          </ImageColumn>
          <lineLogo/>
        </Row>
        <SubHeading tw="pb-0">{currInfo.keyPoints[0]}</SubHeading>
        <SubHeading tw="mt-0 py-2">{currInfo.keyPoints[1]}</SubHeading>
        <SubHeading tw="mt-0 py-2 pb-6">{currInfo.keyPoints[2]}</SubHeading>
      </ContentFormatted2>
    </Container>
  );
};
