import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import estore from "../../Assets/Projects/estore.jpg";
import moviezone from "../../Assets/Projects/moviezone.jpg";
import instabook from "../../Assets/Projects/InstaBook.png";
import noteKeeper from "../../Assets/Projects/noteKeeper.jpg";
import pizza from "../../Assets/Projects/pizza-system.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Interactive Credit Card System"
              description="Create, Decorate and View customize credit card through a interactive system using ReactJS and Bootstrap Basics."
              ghLink="https://github.com/MrinalDas007/InteractiveCards"
              demoLink="https://mrinaldas007.github.io/InteractiveCards/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Realtime Pizza App"
              description="Realtime pizza application to order as a customer and manage orders as a pizza company admin as well using Node-express-mongo-socket.io"
              ghLink="https://github.com/MrinalDas007/Pizza-Tracking-System"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estore}
              isBlog={false}
              title="Tour-and-Travel-Website"
              description="A online tour and travel website which provide details about tourism packages as well as about the places. There is a register login system for users who want to book any tour package. Online Payment facility is not yet implemented in this project. Users can contact us through mail and over phone also. This website is very much attractive to the users and very easy to go through the website for any ongoing tour package details."
              ghLink="https://github.com/MrinalDas007/Online-Tour-and-Travel-Website"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviezone}
              isBlog={false}
              title="Online Movie Ticket Booking System"
              description="A website where registered users have to login and then can book various movie tickets. And, the latest movie lists will be displayed automatically with the change of date and time. This website is created using HTML, Java, JSP"
              ghLink="https://github.com/MrinalDas007/Online-Movies-Ticket-Booking"
              demoLink="https://moviezone-34b4e.web.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteKeeper}
              isBlog={false}
              title="Author Search System"
              description="Simple author searching system for any image using Angular JS."
              ghLink="https://github.com/MrinalDas007/Author-Search"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instabook}
              isBlog={false}
              title="Instagram Clone"
              description="React JS Application where logged-in user can create post and view other user's posts. They can also like, unlike and comment on those posts."
              ghLink="https://github.com/MrinalDas007/InstaBook"
              demoLink="#"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
