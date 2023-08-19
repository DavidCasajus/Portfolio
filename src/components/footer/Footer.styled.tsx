import { styled } from "styled-components";
/* Footer.css */
export const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  height: 100px; /* Puedes ajustar la altura según tus necesidades */
  position: absolute;
  animation-name: FA;
  animation-duration: 2s;
  width: 100%;

  @keyframes FA {
    0% {
      right: -200%;
    }
    100% {
      right: 0px;
    }
  }

  .footer-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px; /* Ajusta el tamaño del círculo según tus preferencias */
    height: 60px; /* Ajusta el tamaño del círculo según tus preferencias */
    background-color: #6e07f3; /* Color de fondo del círculo */
    border-radius: 50%; /* Hace que el elemento sea un círculo */
    margin: 10px; /* Espacio entre los círculos */
  }

  .icon-circle a {
    color: #fff; /* Color del icono dentro del círculo */
    text-decoration: none;
  }
`;
