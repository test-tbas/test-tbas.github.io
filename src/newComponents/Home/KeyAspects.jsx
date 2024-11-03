import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {
    MainHeading as MainHeadingTemplate,
    SubMainHeading as SubMainHeadingTemplate,
    MainParagraph3 as MainParagraphTemplate,
    ContentFormatted2 as RowTemplate
  } from "assets/styles/TailwindComponents.jsx";

import { home_keyAspects } from "assets/tbas-data/TBas_Info.jsx";

const Container = tw(RowTemplate)`py-16`;
const Wrapper = tw.div`md:divide-y`;
const Row = tw(RowTemplate)`flex flex-col md:flex-row justify-between items-center 
mb-12 lg:mb-32 mx-auto md:h-112`;

const TextColumn = tw.div`w-3/5 md:w-1/2 h-full flex flex-col md:pl-20 md:pl-24 lg:pl-16`;

const MainHeading = tw(MainHeadingTemplate)`tracking-widest text-tbasMain-purple900 font-extrabold`;
const HeadingInfoContainer = tw.div`flex flex-col items-center pb-8`;

const Heading = tw(SubMainHeadingTemplate)`text-left text-tbasMain-purple900 tracking-widest pt-8`;
const Description = tw(MainParagraphTemplate)`mt-4 text-main-black font-light 
lg:max-w-lg`;

const KeyNumber = tw.h1`text-8xl sm:text-9xl md:text-3xxl lg:text-8xxl xl:text-10xxl font-YuGothic font-extrabold tracking-widest text-tbasMain-orange`;

const ImageColumn = tw.div`w-full md:w-1/2 h-40 md:h-full flex flex-col items-center justify-center mt-8 lg:mt-12 md:px-8 lg:px-12 xl:px-24`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-contain bg-no-repeat bg-center object-center m-auto w-full h-full rounded-r-3xl`
]);

var currInfo = home_keyAspects[0];

export default function KeyAspects(props) {
  if(props.language === "ENG"){
    currInfo = home_keyAspects[1];
  }

  return (
    <Container>
      <HeadingInfoContainer>
        <MainHeading>{currInfo.Heading}</MainHeading>
      </HeadingInfoContainer>
      <Wrapper>
        {currInfo.KeyAspects.map((keyaspect, index) => (
          <Row key={index}>
            <TextColumn>
              {index !== 1 ? <KeyNumber>0{index + 1}</KeyNumber>: <KeyNumber tw="text-tbasMain-lightBlue">0{index + 1}</KeyNumber>}
              <Heading>{keyaspect.SubHeading}</Heading>
              <Description>{keyaspect.Description}</Description>
            </TextColumn>
            {index !== 1 ? 
              <ImageColumn>
                <Image imageSrc={keyaspect.ImageUrl} />
              </ImageColumn>
              : <ImageColumn tw="md:px-12 lg:px-20 xl:px-32">
                <Image imageSrc={keyaspect.ImageUrl} />
              </ImageColumn>
            }
          </Row>
        ))}
      </Wrapper>
    </Container>
  );
};
