import { createGlobalStyle } from 'styled-components';
import BentonRegular from "../assets/fonts/Benton/BentonSansCondensed Regular.otf";
import BentonMedium from "../assets/fonts/Benton/BentonSansCondensed Medium.otf";
import BentonBold from "../assets/fonts/Benton/BentonSansCondensed Bold.otf";
import BentonItalic from "../assets/fonts/Benton/BentonSansCondensed Italic.otf";
import BentonBlack from "../assets/fonts/Benton/BentonSansCondensed Black.otf";


export default createGlobalStyle`

@font-face {
    font-family: 'Benton Sans';
    src: url(${BentonRegular}) format('otf'),
         url(${BentonMedium}) format('otf'),
         url(${BentonItalic}) format('otf'),
         url(${BentonBold}) format('otf'),
         url(${BentonBlack}) format('otf');
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: #FFFFFF;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #006437;
    border-radius: 20px;
  }

  body {
    font-family: 'Benton Sans', sans-serif;
  }
`;
