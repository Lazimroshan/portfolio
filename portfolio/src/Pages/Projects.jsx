import React from "react";
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; 
import './Projects.css';
import { FaGithubAlt } from "react-icons/fa";

function Projects() {
 return (
    <Container >
      <div className="projects">
        <motion.div className="First"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0, exit: { opacity: 0, x: -100 } }} 
        >
          <h1>Car-Rental</h1>
          <p>
            A car rental website is an online platform that allows user to rent
            cars for personal or business use. It has an admin module to control cars and users
          </p>
          <a href="https://github.com/Lazimroshan/car-rental"><p><FaGithubAlt className="icons" /> Git Hub  </p></a>
        </motion.div>
        <motion.div className="Second"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, exit: { opacity: 0, x: -100 } }} 
        >
          <h1>Weather app</h1>
          <p>
            A weather application that not only provides real-time weather updates
            but also offers a comprehensive forecasting feature. It stands out
            with its innovative search option, allowing users to easily find and
            view weather information for any city.
          </p>
          <a href="https://github.com/Lazimroshan/weather-app"><p><FaGithubAlt className="icons" /> Git Hub</p></a>
        </motion.div>
        <motion.div className="Third"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1, exit: { opacity: 0, x: -100 } }} // Animation duration with delay and exit animation
        >
          <h1>To-Do app</h1>
          <p>
            A simple to-do list application that helps users manage their tasks efficiently.
          </p>
          <a href="https://github.com/Lazimroshan/reactbasics/tree/master/my-app/src/TO-DO"><p><FaGithubAlt className="icons" />  Git Hub</p></a>
        </motion.div>
      </div>
    </Container>
 );
}

export default Projects;
