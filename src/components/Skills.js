import { Container, Row, Col } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiMongodb,
  SiC, SiCplusplus,
  SiPostman, SiJupyter,
} from 'react-icons/si';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaPython,
  FaCss3,
  FaGithub,
  FaGit,
} from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from 'react-icons/bs'; // Generic icons // Icon for AI
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const skills1 = [
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C', icon: <SiC /> },
    { name: 'JavaScript', icon: <FaJs /> },
  ];

  const skills2 = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'NodeJS', icon: <FaNodeJs /> },
    { name: 'MERN', icon: <SiMongodb /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'VS Code', icon: <SiVisualstudiocode /> },
    { name: 'Postman', icon: <SiPostman /> },
  { name: 'Matplotlib', icon: <BsFillGrid3X3GapFill /> }, // Using a generic graph icon
  { name: 'Jupyter Notebook', icon: <SiJupyter /> },
  ];

  const skills3 = [
    { name: 'Data Structures', icon: <BsFillGrid3X3GapFill /> },
    { name: 'Web Dev', icon: <BsFillGrid3X3GapFill /> },
    { name: 'Data Science', icon: <BsFillGrid3X3GapFill /> },
    { name: 'Machine Learning', icon: <BsFillGrid3X3GapFill /> },
  
  ];

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>Here is a list of my technical skills.</p>
              <div className='skills-grid'>
                <div className='skills-group'>
                  {skills1.map((skill, index) => (
                    <div key={index} className='skill-item'>
                      <div className='skill-icon'>{skill.icon}</div>
                      <h5>{skill.name}</h5>
                    </div>
                  ))}
                </div>
                <div className='skills-group'>
                  {skills2.map((skill, index) => (
                    <div key={index} className='skill-item'>
                      <div className='skill-icon'>{skill.icon}</div>
                      <h5>{skill.name}</h5>
                    </div>
                  ))}
                </div>
                <div className='skills-group'>
                  {skills3.map((skill, index) => (
                    <div key={index} className='skill-item'>
                      <div className='skill-icon'>{skill.icon}</div>
                      <h5>{skill.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};
