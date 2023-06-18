import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import moviezone from '../../Assets/Projects/moviezone.jpg';
import instabook from '../../Assets/Projects/InstaBook.png';
import pizza from '../../Assets/Projects/pizza-system.png';

function Home3() {
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
                            imgPath={moviezone}
                            isBlog={false}
                            title="Online Movie Ticket Booking System"
                            description="A website where registered users have to login and then can book various movie tickets. And, the latest movie lists will be displayed automatically with the change of date and time."
                            ghLink="https://github.com/MrinalDas007/Online-Movies-Ticket-Booking"
                            demoLink="https://moviezone-34b4e.web.app//"
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

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pizza}
                            isBlog={false}
                            title="Realtime Pizza App"
                            description="Realtime pizza app using Node-express-mongo-socket.io"
                            ghLink="https://github.com/MrinalDas007/Pizza-Tracking-System"
                            demoLink="#"
                        />
                    </Col>

                </Row>
                <Button variant="outline-info" className='text-light text-bold'>
                    <Link to='/projects' className="text-light font-weight-bold text-decoration-none ">View more</Link>
                </Button>
            </Container>
        </Container>
    )
}

export default Home3