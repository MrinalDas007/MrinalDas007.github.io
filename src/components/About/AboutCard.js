import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineCheck } from 'react-icons/ai'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hell Everyone, I am <span className="purple">Mrinal Das </span>
            from <span className="purple"> Kasba, Kolkata.</span>
            <br />I am Computer Science Engineering graduate🎓 
            currently working in a MNC Tata Consultancy Services looking for opportunities and 
            collabaration in projects related to Full Stack Development. I'm a passionate learner 
            who's always willing to learn and work across technologies and domains 💡. 
            I love to explore new technologies and leverage them to solve real-life problems.
            <br />
            Apart from that I also love to guide and mentor newbies 👨🏻‍💻. 
            I'm currently into Web Development 🕸️ and working on my Data Structures and Algorithms 🤓. 
            Although A computer science engineer working with Devlopment tools and looking 
            forward to Share and Gain knowledgeable stuff☘️ .
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineCheck /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineCheck /> Explore Everything
            </li>
            <li className="about-activity">
              <AiOutlineCheck /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning something new everyday take you mile far than a lazy genius"{" "}
          </p>
          <footer className="blockquote-footer">Mrinal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
