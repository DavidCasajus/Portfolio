import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaFilePdf } from "react-icons/fa";
import * as S from "./Footer.styled";

function Footer() {
  return (
    <S.Footer className="footer-container">
      <S.FooterDiv>
        <a
          href="https://www.linkedin.com/in/david-casajús-calvet-a42830208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle">
            <FaLinkedin size={32} color="white" />
          </div>
        </a>
        <a href="mailto:david.casajus@gmail.com">
          <div className="icon-circle">
            <FaEnvelope size={32} color="white" />
          </div>
        </a>
        <a
          href="https://github.com/DavidCasajus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle">
            <FaGithub size={32} color="white" />
          </div>
        </a>
        <a
          href="CV-DavidCasajusCalvet.pdf"
          download="CV-DavidCasajusCalvet.pdf"
          rel="Descargar CV"
        >
          <div className="icon-circle">
            <FaFilePdf size={32} color="white" />
          </div>
        </a>
      </S.FooterDiv>
    </S.Footer>
  );
}

export default Footer;
