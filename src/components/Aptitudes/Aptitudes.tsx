// ... (código existente)

import { Grid, Card, Text, Title, Container } from "@mantine/core";
import { Code, Zap } from "react-feather";

const Aptitudes = () => {
  const aptitudesTecnicas = [
    "C#, Java, PHP",
    "HTML, CSS, Javascript, Typescript",
    "Angular, React",
    "ArcGisJS, WebAppBuilder, ExperienceBuilder",
    "ASP.NET, linq",
    "Git: github, gitlab, bitbucket",
    "BBDD: MySQL, Postgres, SQL Server",
    "AWS, Docker, Terraform",
  ];

  const softSkills = [
    "Colaboración efectiva en equipos multidisciplinarios",
    "Comunicación clara de ideas técnicas",
    "Resolución eficiente de problemas",
    "Adaptabilidad a entornos dinámicos",
  ];

  const listStyle = {
    fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
  };

  const titleContainerStyle: any = {
    backgroundColor: "#F1F5F9",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    marginRight: "8px",
  };

  return (
    <div style={{ padding: "50px" }}>
      <Grid grow>
        <Grid.Col xs={12} sm={6}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Card.Section>
              <Container style={titleContainerStyle}>
                <Code size={24} style={iconStyle} />{" "}
                <Title order={3} align="center">
                  Aptitudes Técnicas
                </Title>
              </Container>
              <ul style={{ ...listStyle, columnCount: 2 }}>
                {aptitudesTecnicas.map((aptitud, index) => (
                  <li>
                    <Text key={index}>{aptitud}</Text>
                  </li>
                ))}
              </ul>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Card.Section>
              <Container style={titleContainerStyle}>
                <Zap size={24} style={iconStyle} />{" "}
                <Title order={3} align="center">
                  Soft Skills
                </Title>
              </Container>
              <ul style={{ ...listStyle, columnCount: 1 }}>
                {softSkills.map((softSkill, index) => (
                  <li>
                    <Text key={index}>{softSkill}</Text>
                  </li>
                ))}
              </ul>
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export { Aptitudes };
