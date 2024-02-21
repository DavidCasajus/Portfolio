import { Grid, Card, Image, Text, Badge, Button, Group } from "@mantine/core";

interface Trabajo {
  imagen: string;
  nombre: string;
  tareas: string[];
  enlace?: string;
  fecha: string;
  puesto: string;
}

const ExperienciaLaboral = () => {
  const trabajos: Trabajo[] = [
    {
      imagen:
        "https://tracasa.es/wp-content/uploads/2022/03/PPT-Logo-Tracasa-Global-1200x675.jpg",
      nombre: "Tracasa global",
      puesto: "Ingeniero de software en Sistemas de Información Geográfica",
      tareas: [
        "Desarrollo de widgets, visores y aplicaciones utilizando tecnología ArcGIS.",
        "Especialización en la creación de soluciones geoespaciales utilizando Web App Builder, Experience Builder y React.",
        "Creación de APIs utilizando el framework .NET para facilitar la integración de datos y funcionalidades en aplicaciones geoespaciales.",
        "Servicios inteligentes para la gestión de redes de agua.",
      ],
      enlace: "https://geosas.es/",
      fecha: "07/2023 - Actualidad",
    },

    {
      imagen:
        "https://www.cistec.es/wp-content/uploads/2019/06/logo-cistec-horizontal-firmas.png",
      nombre: "Cistec Technology",
      puesto: "Desarrollador de aplicaciones web",
      tareas: [
        "Desarrollo Front-End con Angular.",
        "Desarrollo Back-End con .net core",
        "Identificación, rastreo y resolución eficiente de bugs, contribuyendo al mantenimiento y mejora continua de la calidad del software en entornos de desarrollo dinámicos.",
      ],
      enlace: "https://www.cistec.es/",
      fecha: "03/2019 - 09/2019",
    },
    {
      imagen:
        "https://horixe.com/wordpress/wp-content/uploads/2016/03/JERONIMO-DE-AYANZ.jpg",
      nombre: "Centro de I+D Jerónimo de Ayanz",
      puesto: "Trabajo fin de grado",
      tareas: [
        "Despliegue automático de infraestructura en la nube para el procesado de imágenes mediante redes neuronales.",
      ],
      enlace:
        "https://www.unavarra.es/sites/research-institutes/home.html?languageId=100000",
      fecha: "09/2022 - 01/2023",
    },
    {
      imagen:
        "https://www.grupocajarural.es/sites/default/files/2020-06/unnamed.jpg",
      nombre: "Caja Rural Navarra",
      puesto: "Proyecto becado",
      tareas: [
        "Desarrollo de una aplicación web para la gestión completa de un cementerio partiendo de un modelo debases de datos, en .net core, ASP.NET Web Forms.",
      ],
      enlace: "",
      fecha: "01/2019 - 08/2019",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      <Grid
        grow
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {/* Todas las Cartas */}
        {trabajos.map((trabajo: Trabajo) => {
          return (
            <Grid.Col xs={12} sm={6} key={trabajo.nombre}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Card.Section
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    src={trabajo.imagen}
                    height={160}
                    width={300}
                    alt="Norway"
                    fit="contain"
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>
                    {trabajo.nombre} - {trabajo.puesto}
                  </Text>
                  <Badge
                    color={
                      trabajo.fecha.includes("Actualidad") ? "green" : "blue"
                    }
                    variant="light"
                  >
                    {trabajo.fecha}
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed" style={{ flex: 1 }}>
                  <ul>
                    {trabajo.tareas.map((t: string, index) => (
                      <li key={index}>{t}</li>
                    ))}
                  </ul>
                </Text>

                {trabajo.enlace && (
                  <Button
                    variant="light"
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    onClick={() => {
                      window.open(trabajo.enlace, "_blank");
                    }}
                  >
                    Visitar web
                  </Button>
                )}
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default ExperienciaLaboral;
