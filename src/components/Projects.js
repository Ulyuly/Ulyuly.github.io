import { Container, Row, Col, Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

export const Projects = () => {
  const projects = [
    {
      title: "RPGStash",
      description:
        "Commercial project done as a member of a small dev team, made using plain JS, Prestablog and without any big projects",
      imgUrl: projImg1,
      link: "https://rpgstash.com",
    },
    {
      title: "Collegium Da Vinci site",
      description:
        "This project has been done as a part of recruitment process at one company, where my task was to recreate a UI design (sent as a Photoshop project) with plain JS, keeping the site responsive on most devices",
      imgUrl: projImg2,
      link: "https://ulyuly.github.io/projects/davinci/index.html",
    },
    {
      title: "School Project",
      description:
        "Written mostly with JS, Jquery, PHP and using an MySQL database, this CRUD was one of the finishing projects during my web design course. Sadly, it cant work on github hosting (due to no way of implementing MySQL, I've left the source files of second-to-last version in here.",
      imgUrl: projImg3,
      link: "github link",
    },
    {
      title: "Portfolio Site",
      description:
        "Recursion for the win! I've written this project using React, Bootstrap, Node.js and Webpack",
      imgUrl: projImg4,
      link: "#",
    },
    {
      title: "Pizza Calculator",
      description:
        "Little pet project specifically for my own use, since I've started baking pizza lately - I wanted to know more details about them without having to use an Excel sheet.",
      imgUrl: projImg5,
      link: "../projects/pizzacalc/index.html",
    },
    {
      title: "Weather App",
      description: "STILL NOT ADDED!",
      imgUrl: projImg6,
      link: "../projects/weather/index.html",
    },
  ];

  return (
    <section className="project">
      <Container>
        <Row>
          <Col>
            <h2 id="projects">Projects</h2>
            <p>
              Here's some stuff i've worked on before, including commercial and
              pet projects:
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
