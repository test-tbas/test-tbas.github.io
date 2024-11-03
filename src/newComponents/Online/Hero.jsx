import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/* ========= importing assets ============ */
import {MainHeading as HeadingTitleTemplate, 
  Container as ContainerTemplate,
  ContentFormatted
} from "assets/styles/TailwindComponents.jsx";

/* ======== importing some data for text =========== */
import { lessons } from "assets/tbas-data/TBas_Info.jsx";

import background from "assets/tbas-images/background/laptop.jpeg";

const Container = styled(ContainerTemplate)(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`px-8 bg-no-repeat bg-cover bg-center content-center rounded-xl
  w-full h-56 md:h-112`
]);
const HeroContainer = tw.div`z-20 relative py-6 lg:py-0 mx-auto h-full flex flex-col`;
const Content = tw.div`py-8 flex flex-1 justify-center items-center`;

const Heading = styled(HeadingTitleTemplate)`
${tw`text-left text-main-white leading-snug mt-0 lg:ml-2 xl:ml-4 w-full `}
span {
  ${tw`inline-block mt-2`}
}`;

var currInfo = lessons[0];
export default function WhatCS(props) {
  if(props.language === "ENG"){
      currInfo = lessons[1];
  }

  return (
    <ContentFormatted tw="mt-6">
      <Container imageSrc={background}>
        <HeroContainer>
          <Content>
            <Heading>{currInfo.OnlineHeading}</Heading>
          </Content>
        </HeroContainer>
      </Container>
    </ContentFormatted>
  );
};
