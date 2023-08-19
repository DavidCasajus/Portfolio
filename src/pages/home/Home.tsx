import avatar from "assets/images/mf-avatar.svg";
import { Grid } from "@mantine/core";

import * as S from "./Home.styled";
import { useState } from "react";
import ExperienciaLaboral from "components/experienciaLaboral/ExperienciaLaboral";

const Home = () => {
  return (
    <>
      <main>
        <Grid>
          <Grid.Col lg={3} md={2} sm={1} xs={1}></Grid.Col>
          <Grid.Col lg={6} md={8} sm={10} xs={10}>
            <S.Presentation id="presentacion">
              <h1>
                Ingeniero Informático, Ingeniero de Software, Desarrollador de
                Applicaciónes multiplataforma
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, impedit voluptatibus eum maxime quis eveniet sed
                fugiat praesentium. Temporibus magnam exercitationem soluta
                impedit ipsum ab consectetur architecto beatae atque deleniti.
              </p>
              <img src={avatar} />
            </S.Presentation>
          </Grid.Col>
          <Grid.Col lg={3} md={2} sm={1} xs={1}></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col>
            <S.SobreMi>
              <S.SobreMiContenido id="sobreMi">
                <h1>David Casajús Calvet</h1>
                <p>
                  Ingeniero informático especializado en ingeniería del
                  software, con experiencia en el ámbito de desarrollo web, pero
                  también con ganas de dar oportunidad a nuevos ámbitos. Soy una
                  persona proactiva y con una mentalidad abierta hacia el
                  aprendizaje continuo. Siempre estoy buscando oportunidades
                  para ampliar mis conocimientos. Estoy dispuesto y preparado
                  para enfrentar nuevos desafíos, crecer profesionalmente y
                  aportar valor acualquier proyecto en el que esté involucrado.
                </p>
              </S.SobreMiContenido>
            </S.SobreMi>
          </Grid.Col>
        </Grid>
        <ExperienciaLaboral />
      </main>
    </>
  );
};

export default Home;
