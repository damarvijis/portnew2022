import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import h8kebab from "../assets/img/h8kebab.png";
import letsmeet from "../assets/img/letsmeet.png";
import h8admin from "../assets/img/h8admin.png";
import learnwith from "../assets/img/learnwith.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const reactJs = [
    {
      title: "User H8 Kebab",
      description: "This is a website to see the menu and menu details of H8 Kebab. Tech Stack: PostgreSQL, MongoDB, Express, Node.js, Sequelize, Apollo-Server, Redis, Microservices, React, Docker, Apollo-Client and Bootstrap. Link: https://client-h8kebab.web.app",
      imgUrl: h8kebab,
    },
    {
      title: "Admin H8 Kebab",
      description: "This is a website to create, edit, update or delete the menu and menu details of H8 Kebab. Tech Stack: PostgreSQL, MongoDB, Express, Node.js, Sequelize, Apollo-Server, Redis, Microservices, React, Docker, Apollo-Client and Bootstrap. Link: https://admin-h8kebab.web.app",
      imgUrl: h8admin,
    }
  ];
  const vueJs = [
    {
      title: "Let's Meet App",
      description: "This is a website application used to find events around the user. Tech Stack: Vue, Vuex, Tailwind, Express, Node.JS, Sequelize, PostgreSQL, Axios, Agora.io, Google Maps API. Link:  https://lets-meet-c21c6.web.app",
      imgUrl: letsmeet,
    },
    {
      title: "Learn With Damar",
      description: "This is a website to learn programming. Tech Stack: Vue, VueX, Payment Gateway (Midtrans), Youtube API, nodemailer, Sequelize, NodeJs, and PostgreSQL. Link: https://iprojectp2.web.app",
      imgUrl: learnwith,
    }
  ];
  const mobile = [
    {
      title: "Hacktiv8 Kebab",
      description: "This is a mobile apps to order H8 Kebab. Tech Stack: PostgreSQL, MongoDB, Express, Node.js, Sequelize, Apollo-Server, Redis, Microservices, React-Native, Docker, Apollo-Client. Link: https://expo.dev/@damarvijis/h8kebab-mobile",
      imgUrl: h8kebab,
    }
  ];

  return (
    <section className="project">
      <Container>
        <Row>
          <Col size={12} id="project">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The following are some of the projects I've made. some of them I made using React.js, Vue.js, or React Native.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React.js</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Vue.js</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React Native</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          reactJs.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          vueJs.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          mobile.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
