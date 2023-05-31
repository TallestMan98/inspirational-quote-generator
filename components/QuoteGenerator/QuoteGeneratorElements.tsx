import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
  background: linear-gradient(to bottom,#e66465, #9198e5);
  background-size: 300% 300%;
  height: 100vh;
  width: 100vw;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
        background-position: 50% 0%;
    }
    50% {
        background-position: 50% 100%;
    }
    100% {
        background-position: 50% 0%;
    }
  }
`;