import { styled } from "styled-components";

export const NavBarStyled = styled.nav`
  color: black;

  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    padding: 10px 20px;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  a:hover {
    color: #ff6600;
  }
`;
