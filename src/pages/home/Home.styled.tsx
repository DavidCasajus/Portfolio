import { styled } from "styled-components";

export const Presentation = styled.section`
  justify-content: center;
  text-align: center;
  animation-name: PrAn;
  animation-duration: 2s;
  position: relative;

  @keyframes PrAn {
    0% {
      right: -200%;
    }
    100% {
      right: 0px;
    }
  }
`;

export const SobreMi = styled.section`
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
  background-color: #6e07f3;
`;

export const SobreMiContenido = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  margin: 0 auto;
  color: white;
  width: 60%;
  animation-name: SBA;
  animation-duration: 2s;
  position: relative;

  @keyframes SBA {
    0% {
      left: -100%;
    }
    100% {
      left: 0px;
    }
  }
`;
