import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (

    <Container fluid className="footer text-center">
      <Row>


        <div className="footer-body">
          <li className="social-icons">
            <a
              href="https://github.com/MrinalDas007"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="display-6"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="display-6"
            >
              <AiFillTwitterCircle />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/mrinal007"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
              className="display-6"
            >
              <AiFillLinkedin />
            </a>
          </li>

        </div>

      </Row>

      <Row>
        <p className="mt-4 pt-2 h2">Copyright © {year} <Link to='/contact' className="display-7 text-light">Mrinal Das</Link></p>
      </Row>
    </Container>

  );
}

export default Footer;
