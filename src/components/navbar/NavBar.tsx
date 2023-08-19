import * as S from "./NavBar.styled";

const NavBar = () => {
  return (
    <S.NavBarStyled>
      <ul>
        <li>
          <a href="#presentacion">Seccion1</a>
        </li>
        <li>
          <a href="#sobreMi">Seccion2</a>
        </li>
        <li>
          <a href="#presentacion2">Seccion3</a>
        </li>
        <li>
          <a href="#sobreMi2">Seccion4</a>
        </li>
      </ul>
    </S.NavBarStyled>
  );
};

export default NavBar;
