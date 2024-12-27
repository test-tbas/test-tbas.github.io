import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "helpers/useAnimatedNavToggler.js";

import { useNavigate, useLocation } from 'react-router-dom';

import logo from "assets/tbas-images/logo/TBAS-purple-logo.svg";

import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as GlobeIcon } from "feather-icons/dist/icons/globe.svg";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";

import { header_footer } from "assets/tbas-data/TBas_Info.jsx";

const HeaderComponent = tw.header`
  flex justify-between items-center max-w-screen-3xl mx-auto
`;

const NavLinks = tw.div`inline-block flex cursor-pointer`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw.a`
  text-sm md:text-base xl:text-lg 
  lg:mx-2 xl:mx-4 2xl:mx-6 my-2 lg:my-0
  py-2 
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent 
  text-tbasMain-purple900
  hocus:text-tbasMain-orange
`;

const LanguageChangeContainer = tw.div`cursor-pointer w-full m-auto flex justify-end`;
const LanguageChange = tw(NavLink)`text-main-lightBlue flex items-end`

const LogoLink = styled(NavLink)`
  ${tw`pl-4 pt-4 lg:pl-0 lg:pt-0 cursor-pointer flex items-center`};
  img {
    ${tw`w-48 sm:w-64 md:w-80 lg:w-48 xl:w-64 2xl:w-80`}
  }
`;

const PrimaryLink = tw(NavLink)`
  lg:mx-0 p-4 lg:mb-2
  rounded-xl bg-tbasMain-purple900 text-gray-100
  hocus:bg-tbasMain-orange hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
const NavToggle = tw.button`
  lg:hidden pr-8 z-70 focus:outline-none hocus:text-main-blue transition duration-300
`;
const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-60 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-main-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;
const LgDesktopNav = tw(DesktopNavLinks)`hidden lg:flex lg:flex-wrap lg:pt-8 lg:px-0 justify-center`;

const DropdownContainer = tw.div`relative`;
const Dropdown = tw.div`select-none cursor-pointer hover:border-primary-500 transition-colors duration-300`;
const DropdownParent = tw.div`flex justify-between items-center`;
const DropdownParentText = tw.div`text-sm md:text-base xl:text-lg 
my-2 lg:my-0 py-2 
  font-semibold tracking-wide transition duration-300
  border-b-2 border-transparent 
  text-tbasMain-purple900
  hocus:text-tbasMain-orange`;
const DropdownParentToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const DropdownLinkContainer = tw(motion.div)`hidden absolute 
left-0 z-40 font-normal mt-4 text-gray-300 bg-white lg:w-[12.5rem] xl:w-[13.5rem]`;
const DropdownLink = tw(NavLink)`block lg:mx-0 px-4 py-2 w-full`;
const DropdownLinks = tw.div`flex flex-wrap cursor-pointer`;

var currPath = "/";
var currInfo = header_footer[0];

export default function Header(props) {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const navigate = useNavigate();
  let location = useLocation();
  const [dropdownActive, setDropdownActive] = useState(false);

  currPath = (location.pathname);
  let pathArr = currPath.split("/").slice(1);
  let currNavPath = "/";
  if(pathArr[0] === "eng"){
    pathArr = pathArr.slice(1);
    currNavPath = "/eng/";
    currInfo = header_footer[1];
  }
  currPath = pathArr.join("/");

  const globeLinkJap = (
    <LanguageChangeContainer>
      <LanguageChange onClick={() => {
          navigate("/eng/" + currPath);
          window.location.reload();
        }}>
        <GlobeIcon tw="w-6 h-6" />
        &nbsp;English
      </LanguageChange>
    </LanguageChangeContainer>
  );
  const globeLinkEng = (
    <LanguageChangeContainer>
      <LanguageChange onClick={() => {
          navigate("/" + currPath);
          window.location.reload();
        }}>
        <GlobeIcon tw="w-6 h-6" />
        &nbsp;日本語
      </LanguageChange>
    </LanguageChangeContainer>
  );

  const coursesDropdown = (
    <DropdownContainer>
      <Dropdown onClick={() => setDropdownActive(!dropdownActive)}>
        <DropdownParent>
          <DropdownParentText>{currInfo.links[1]}</DropdownParentText>
          <DropdownParentToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 }
            }}
            initial="collapsed"
            animate={dropdownActive ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </DropdownParentToggleIcon>
        </DropdownParent>
        <DropdownLinkContainer
          variants={{
            open: { opacity: 1, height: "auto", marginTop: "10px", display: "block" },
            collapsed: { opacity: 0, height: 0, marginTop: "0px", display: "none" }
          }}
          initial="collapsed"
          animate={dropdownActive ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <DropdownLinks>
            <DropdownLink onClick={() => navigate(currNavPath+currInfo.endpoints[1])}>{currInfo.links[2]}</DropdownLink>
            <DropdownLink onClick={() => navigate(currNavPath+currInfo.endpoints[2])}>{currInfo.links[3]}</DropdownLink>
          </DropdownLinks>
        </DropdownLinkContainer>
      </Dropdown>
    </DropdownContainer>
  );

  const tbasLogoLink = (
    <LogoLink onClick={() => navigate(currNavPath)}>
      <img src={logo} alt="logo" />
    </LogoLink>
  );
  const tbasNavLinks = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[0])}>{currInfo.links[0]}</NavLink>
      {coursesDropdown}
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[3])}>{currInfo.links[4]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[4])}>{currInfo.links[5]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[5])}>{currInfo.links[6]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[6])}>{currInfo.links[7]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[7])}>{currInfo.links[8]}</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink onClick={() => navigate(currNavPath+currInfo.endpoints[8])}>
        <EmailIcon tw="w-6 h-6 inline mr-4" />
        {currInfo.links[9]}
      </PrimaryLink>
    </NavLinks>
  ];
  const tbasMobileNavLinks = [
    <NavLinks key = {1}>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[0])}>{currInfo.links[0]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[1])}>{currInfo.links[2]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[2])}>{currInfo.links[3]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[3])}>{currInfo.links[4]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[4])}>{currInfo.links[5]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[5])}>{currInfo.links[6]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[6])}>{currInfo.links[7]}</NavLink>
      <NavLink onClick={() => navigate(currNavPath+currInfo.endpoints[7])}>{currInfo.links[8]}</NavLink>

    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink onClick={() => navigate(currNavPath+currInfo.endpoints[8])}>
        {currInfo.links[9]}
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <HeaderComponent>
      <LgDesktopNav css={collapseBreakPointCssMap['lg'].desktopNavLinks}>
        {props.language === "JP" ? globeLinkJap : globeLinkEng}
        <DesktopNavLinks>
          {tbasLogoLink}
          {tbasNavLinks}
        </DesktopNavLinks>
      </LgDesktopNav>

      <MobileNavLinksContainer css={collapseBreakPointCssMap['lg'].mobileNavLinksContainer}>
        {tbasLogoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakPointCssMap['lg'].mobileNavLinks}>
          {tbasMobileNavLinks}
          <br/>
          {props.language === "JP" ? globeLinkJap : globeLinkEng}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </HeaderComponent>
  );
};


/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
