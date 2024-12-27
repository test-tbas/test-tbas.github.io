import tw from "twin.macro";

/* ===== define some twin / tailwind css for components ===== */

// Button
export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-tbasMain-purple900 hocus:bg-tbasMain-orange 
text-main-white font-YuGothic 
focus:shadow-outline focus:outline-none transition duration-300
text-sm md:text-base lg:text-lg xl:text-xl`;

// Headers
export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
export const Subheading = tw.h5`font-bold text-primary-500`

// Containers / Content
export const Container = tw.div`relative`;
export const ContentWithPaddingXl= tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
export const ContentWithPaddingLg= tw.div`max-w-screen-lg mx-auto py-20 lg:py-24`;
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`;
export const Content2Xl= tw.div`max-w-screen-2xl xl:max-w-screen-3xl mx-auto`;

export const ContentFormatted= tw.div`max-w-screen-xl xl:max-w-screen-2xl mx-auto`;
export const ContentFormatted2= tw.div`max-w-screen-lg xl:max-w-screen-xl mx-auto`;

// Links
export const PrimaryLink = tw.a`cursor-pointer font-bold text-primary-500 border-b-2 border-transparent hocus:border-primary-500 hocus:text-primary-800 transition duration-300`;

// Description 
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed text-secondary-100 max-w-xl`;

// Divs
export const StyledDiv = tw.div`font-display bg-main-lightestBlue min-h-screen text-secondary-500 p-8 overflow-hidden`;

// Used for formatting the website's text better based on common screen size
export const HiddenBr = tw.br`block sm:hidden`;
export const HiddenBrXl = tw.br`hidden xl:block`;
export const HiddenBrLg = tw.br`hidden lg:block xl:hidden`;
export const HiddenBrLgXl = tw.br`hidden lg:block`;
export const HiddenBrSm = tw.br`hidden sm:block`;
export const HiddenBrMd = tw.br`hidden md:block xl:hidden`;
export const HiddenBr_BreakPoint = tw.br`hidden sm:block lg:hidden`;
export const HiddenBr_BreakPoint2 = tw.br`block lg:hidden`;
export const HiddenBr_BreakPoint3 = tw.br`block md:hidden`;
export const HiddenBr_BreakPoint4 = tw.br`block xl:hidden`;
// Used for highlighting certain important text
export const HightlightedText = tw.span`text-primary-500`




// AK related components

export const MainSectionHeading = tw.h1`text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-12xl font-YuGothic font-extrabold`;
export const SubMainSectionHeading = tw.h1`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-YuGothic font-extrabold`;

export const MainHeading = tw.h1`text-6xl sm:text-8xl md:text-11xl lg:text-13xl xl:text-14xl font-YuGothic font-[1000]`;
export const MainHeading2 = tw.h1`text-5xl sm:text-7xl md:text-9xl lg:text-11xl xl:text-13xl font-YuGothic font-extrabold`;
export const MainHeading3 = tw.h1`text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-12xl font-YuGothic font-extrabold`;

export const SubMainHeading = tw.h1`text-3xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-10xl font-YuGothic font-extrabold`;
export const SubMainHeading2 = tw.h1`text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-YuGothic font-extrabold`;
export const SubMainHeading3 = tw.h1`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-YuGothic font-extrabold`;

export const MainParagraph =  tw.p`font-YuGothic font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`;
export const MainParagraph2 = tw.p`font-YuGothic font-light text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`;
export const MainParagraph3 = tw.p`font-YuGothic font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`;
export const MainParagraph4 = tw.p`font-YuGothic font-light text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl`;
