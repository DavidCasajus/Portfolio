import { Grid, Card, Image, Text, Badge, Button, Group } from "@mantine/core";

interface Trabajo {
  imagen: string;
  nombre: string;
  tareas: string[];
  enlace: string;
  fecha: string;
}

const ExperienciaLaboral = () => {
  const trabajos: Trabajo[] = [
    {
      imagen:
        "https://www.cistec.es/wp-content/uploads/2019/06/logo-cistec-horizontal-firmas.png",
      nombre: "Cistec Technology",
      tareas: [
        "Desarrollo Front-End de una aplicación web dinámica e interactiva utilizando el framework Angular",
        "Documentación durante el proceso de desarrollo",
        "Identificación y solución de problemas en una aplicación de software desarrollada en C# .net, tanto servidor web como cliente con interfaz Windows Forms",
      ],
      enlace: "",
      fecha: "03/2019 - 09/19",
    },
    {
      imagen:
        "https://www.grupocajarural.es/sites/default/files/2020-06/unnamed.jpg",
      nombre: "Caja Rural",
      tareas: [
        "Desarrollo de una aplicación web para la gestióncompleta de un cementerio partiendo de un modelo debases de datos, en .net core, ASP.NET Web Forms.",
      ],
      enlace: "",
      fecha: "01/2019 - 08/19",
    },
    {
      imagen:
        "https://tracasa.es/wp-content/uploads/2022/03/PPT-Logo-Tracasa-Global-1200x675.jpg",
      nombre: "Tracasa global",
      tareas: [
        "Desarrollar aplicaciones Web GIS con Javascritpt/TypeScript/React",
      ],
      enlace: "",
      fecha: "07/2023 - Actualidad",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <Grid grow>
        {/* Primera Carta */}
        {trabajos.map((trabajo: Trabajo) => {
          return (
            <Grid.Col xs={12} sm={6}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={trabajo.imagen}
                    height={160}
                    alt="Norway"
                    fit="contain"
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{trabajo.nombre}</Text>
                  <Badge
                    color={
                      trabajo.fecha.includes("Actualidad") ? "green" : "blue"
                    }
                    variant="light"
                  >
                    {trabajo.fecha}
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  <ul>
                    {trabajo.tareas.map((t: string) => {
                      return <li>{t}</li>;
                    })}
                  </ul>
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Book classic tour now
                </Button>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default ExperienciaLaboral;
