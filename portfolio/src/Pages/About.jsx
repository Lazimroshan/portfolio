import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
 
  const fadeUpAnimation = {
    hidden: { opacity: 0, scale: 0.9, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
  };

  return (
    <div>
      <motion.div
        className="About"
        animate="visible" 
        initial="hidden"
        variants={fadeUpAnimation}
      >
        <h2>About me</h2>
        <p>I'm Lasim Roshan, a MERN stack developer specializing in crafting scalable web applications using MongoDB, Express.js, React.js, and Node.js. With expertise in both frontend and backend development, I focus on creating efficient solutions that prioritize user experience and performance. Passionate about staying updated with the latest technologies, I'm committed to delivering innovative and impactful projects.</p>
      </motion.div>
    </div>
  );
}

export default About;
