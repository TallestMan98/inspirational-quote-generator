import styled from "styled-components";
import Link from "next/link";
//import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to bottom,#e66465, #9198e5);
  background-size: 300% 300%;
  height: 100vh;
  width: 100vw;
  animation: gradient 20s ease infinite;
  @keyframes gradient {
    0% {
        background-position: 50% 10%;
    }
    50% {
        background-position: 50% 90%;
    }
    100% {
        background-position: 50% 10%;
    }
  }
`;

export const Block1 = styled.div`
  background-color: #9198e5;
  height: 30vh;
  width: 30vh;
  top: 20%;
  left: 20%;
  transform: translate(-50%,-50%);
  position: absolute;
  border: 5px solid black;
  border-radius: 15px;
`;

export const Block2 = styled.div`
  background-color: #e66465;
  height: 30vh;
  width: 30vh;
  top: 80%;
  left: 80%;
  transform: translate(-50%,-50%);
  position: absolute;
  border: 5px solid black;
  border-radius: 15px;
`;

export const Pipe1 = styled.div`
  background-color: #000050;
  border-radius: 15px;
  border: 1px solid rgba( 255, 255, 255, 0.5 );
  width: 8px;
  height: 80vh;
  position: fixed;
  right: 95vw;
  top: 10vh;
  @media only screen and (max-width: 600px) {
    border: 1px solid rgba( 255, 255, 255, 0.7 );
    width: 10px;
    right: 90vw;
  }
`;

export const Pipe2 = styled.div`
  background-color: #000050;
  border-radius: 15px;
  border: 1px solid rgba( 255, 255, 255, 0.5 );
  width: 8px;
  height: 60vh;
  position: fixed;
  right: 90vw;
  top: 20vh;
  @media only screen and (max-width: 600px) {
    width: 0px;
    height: 0px;
    border: 0px;
  }
`;

export const Pipe3 = styled.div`
  background-color: #000050;
  border-radius: 15px;
  border: 1px solid rgba( 255, 255, 255, 0.5 );
  width: 8px;
  height: 60vh;
  position: fixed;
  left: 90vw;
  top: 20vh;
  @media only screen and (max-width: 600px) {
    width: 0px;
    height: 0px;
    border: 0px;
  }
`;

export const Pipe4 = styled.div`
  background-color: #000050;
  border-radius: 15px;
  border: 1px solid rgba( 255, 255, 255, 0.5 );
  width: 8px;
  height: 80vh;
  position: fixed;
  left: 95vw;
  top: 10vh;
  @media only screen and (max-width: 600px) {
    border: 1px solid rgba( 255, 255, 255, 0.7 );
    width: 10px;
    right: 10vw;
  }
`;

export const PipeFlow = styled.div`
  background: linear-gradient(to bottom, #000050, white, white, white, #000050);
  border-radius: 15px;
  border: 1px solid rgba( 255, 255, 255, 0.1 );
  width: 100%;
  height: 10%;
  background-size: 130% 130%;
  position: relative;
  animation: flow 10s ease-in-out infinite alternate, colourChange 10s ease-in-out infinite alternate;
  @keyframes colourChange {
    0% {
        background-position: 50% 100%;
    }
    20% {
      background-position: 50% 50%;
      background-size: 100% 100%;
    }
    80% {
      background-position: 50% 50%;
      background-size: 100% 100%;
    }
    100% {
        background-position: 50% 0%;
    }
  }

  @keyframes flow {
    0% {
      top: 0%;
    }
    100% {
      top: 90%;
    }
  }
`;

export const FooterContainer = styled.div`
  width: 100vw;
  text-align: center;
  font-family: 'Source Code Pro';
  font-size: 20px;
  position: absolute;
  bottom: 5px;
  color: white;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-family: 'Comfortaa';
`;

export const QuoteGeneratorContainer = styled.div`
  min-height: 350px;
  min-width: 350px;
  height: 65vh;
  width: 70vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
  z-index: 2;

  background: rgba( 0, 0, 50, 0.5 );
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 50, 0.3 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 15px;
  border: 2px solid whitesmoke;
`;

export const QuoteGeneratorInnerContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
  height: 70%;
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const QuoteGeneratorTitle = styled.div`
  font-family: 'Shadows Into Light';
  font-size: 80px;
  color: white;
  padding: 0px 20px 0px 20px;
  text-align: center;
  position: relative;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const QuoteGeneratorSubTitle = styled.div`
  font-family: 'Source Code Pro';
  font-size: 30px;
  color: white;
  padding: 20px 20px 20px 20px;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding: 20px 5px 20px 5px;
  }
`;

export const GenerateQuoteButton = styled.div`
  height: 100px;
  width: 300px;
  border: 2px solid whitesmoke;
  border-radius: 15px;
  position: relative;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  margin: auto;
  transform-origin: center;
  top: 50px;
  @media only screen and (max-width: 600px) {
    top: 50px;
  }

  background: rgba( 0, 0, 50, 0.8 );
  box-shadow: 0 8px 32px 0 rgba( 0, 0, 50, 0.5 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );

  &:hover {
    filter: brightness(3);
    transition: 0.2s all ease-in-out;
    transform: scale(1.1);
    transform-origin: center;
  }
`;

export const GenerateQuoteButtonText = styled.div`
  font-family: 'Shadows Into Light';
  font-size: 45px;
  color: white;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  position: absolute;
  width: 100%;
`;