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
        background-position: 50% 80%;
    }
    100% {
        background-position: 50% 10%;
    }
  }
`;

export const Pipe1 = styled.div`
  background-color: #000050;
  width: 2px;
  height: 80vh;
  position: fixed;
  right: 95vw;
  top: 10vh;
`;

export const Pipe2 = styled.div`
  background-color: #000050;
  width: 2px;
  height: 60vh;
  position: fixed;
  right: 90vw;
  top: 20vh;
`;

export const Pipe3 = styled.div`
  background-color: #000050;
  width: 2px;
  height: 60vh;
  position: fixed;
  right: 10vw;
  top: 20vh;
`;

export const Pipe4 = styled.div`
  background-color: #000050;
  width: 2px;
  height: 80vh;
  position: fixed;
  right: 5vw;
  top: 10vh;
`;

export const PipeFlow = styled.div`
  background: linear-gradient(to bottom, #000050, white, white, white, #000050);
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
  height: 15%;
  text-align: center;
  font-family: 'Source Code Pro';
  font-size: 20px;
  position: absolute;
  bottom: 0;
  color: white;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-family: 'Comfortaa';
`;