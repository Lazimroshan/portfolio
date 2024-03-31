
import "./Portfolio.css";
import image from "../assets/Lasimimg.jpg";
import handemo from "../assets/hand-emoji.png";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from'../assets/react.png'
import Mongo from '../assets/mongodb.png'
import Exp from '../assets/express.png'
import node from '../assets/node.png'
import bootstrap from '../assets/bootstrap.png'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (

    <div>
          <div className="Home">
          <div className="Abouttext">
          {" "}
          <div>
            <div className="Abouttext-child">
              <div style={{ display: "flex" }}>
                <h1>Hello</h1>
                <img src={handemo} alt="" className="Handemo" />
                <br />
              </div>
              <div>
                <h3>I'm Lasim Roshan </h3>
                <h2>
                  I'm a{" "}
                  <span>
                    <Typewriter
                      words={["Full Stack-Developer", "Web-Developer"]}
                      loop={Infinity}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />{" "}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="Profilephotodiv">
            <img src={image} alt="" className="Profilephoto" />
          </div>
        </div>

        <div className="Tech">
          <h2>Tech Stack | {" "}</h2>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={react} alt="" />
          <img src={Mongo} alt="" />
          <img src={Exp} alt="" />
          <img src={node} alt="" />
          <img src={bootstrap} alt="" />
        </div>
          </div>  
          <div className="contact">
          <h3 >Contact Me</h3>
          <span> <a href="" className="a-text"><MdEmail className="icon" />lasimroshan@gmail.com</a></span> 
          <span>  <a href="https://www.linkedin.com/in/lasim-roshan-72b3a52a9/"><FaLinkedin className="icon" /> Lasim Roshan </a></span>
          <span><a href="https://github.com/Lazimroshan"><FaGithubAlt className="icon" /> lazimroshan</a></span>
        </div>    
    </div>
  );
}

export default Portfolio;
