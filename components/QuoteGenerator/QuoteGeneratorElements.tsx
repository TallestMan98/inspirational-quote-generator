import styled from "styled-components";
//import Link from "next/link";
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
  width: 0.25vw;
  height: 80vh;
  position: fixed;
  right: 90%;
  top: 15%;
`;

export const Pipe2 = styled.div`
  background-color: #000050;
  width: 0.25vw;
  height: 60vh;
  position: fixed;
  right: 85%;
  top: 25%;
`;

export const Pipe3 = styled.div`
  background-color: #000050;
  width: 0.25vw;
  height: 80vh;
  position: fixed;
  right: 10%;
  top: 15%;
`;

export const Pipe4 = styled.div`
  background-color: #000050;
  width: 0.25vw;
  height: 60vh;
  position: fixed;
  right: 15%;
  top: 25%;
`;

export const HorizontalPipe1 = styled.div`
  background-color: #000050;
  width: 81.3vw;
  height: 0.25vw;
  position: absolute;
  right: 9.5vw;
  top: 94vh;
  
`;
export const HorizontalPipe2 = styled.div`
  background-color: #000050;
  width: 71vw;
  height: 0.25vw;
  position: absolute;
  right: 14.7vw;
  top: 84vh;
`;

export const PipeTop = styled.div`
  background-color: white;
  border-radius: 20%;
  width: 2vw;
  height: 2vw;
  position: absolute;
  left: -0.9vw;
  z-index: 10;
`;

export const PipeBottom = styled.div`
  background-color: white;
  border-radius: 20%;
  width: 2vw;
  height: 2vw;
  position: absolute;
  left: -0.9vw;
  z-index: 10;
  bottom: 0;
`;

export const PipeMiddle = styled.div`
  background-color: white;
  border-radius: 20%;
  width: 2vw;
  height: 2vw;
  position: absolute;
  z-index: 10;
  right: 48.7%;
  bottom: -300%;

`;

export const PipeFlow = styled.div`
  background: linear-gradient(to bottom, black, white, white, white, black);
  width: 100%;
  height: 10%;
  position: relative;
  animation: flow 10s ease-in-out infinite alternate;
  @keyframes flow {
    0% {
      top: 0%;
    }
    100% {
      top: 90%;
    }
  }
`;

export const HorizontalFlowRight = styled.div`
  background: linear-gradient(to right, black, white, white, white, black);
  width: 7%;
  height: 100%;
  position: absolute;
  animation: flowRight 10s ease-in-out infinite alternate;
  @keyframes flowRight {
    0% {
      left: 44%;
    }
    100% {
      left: 0%;
    }
  }
`;
export const HorizontalFlowLeft = styled.div`
  background: linear-gradient(to left, black, white, white, white, black);
  width: 7%;
  height: 100%;
  position: absolute;
  animation: flowLeft 10s ease-in-out infinite alternate;
  @keyframes flowLeft {
    0% {
      right: 44%;
    }

    100% {
      right: 0%;
    }
  }
`;