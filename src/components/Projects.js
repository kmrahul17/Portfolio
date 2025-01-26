import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.jpeg'; // New image for Vishwapath
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Vishwapath: Space Travel Booking Platform',
      description: [
        'Developed an innovative space travel booking platform, Vishwapath, using the MERN stack, Three.js, and AI features.',
        'Integrated a dynamic 3D space map for route visualization, with animated vehicles like space shuttles and taxis, providing a realistic user experience.',
        'Incorporated AI for price optimization and personalized recommendations, ensuring seamless booking for Earth, Mars, Moon, and more.',
        'Implemented secure JWT-based authentication, payment integration via Instamojo API, and boarding pass generation with QR codes.',
      ],
      imgUrl: projImg4,
    },
    {
      title: 'TaskPro Web Application: A Smart Productivity Tool',
      description: [
        'Developed a MERN Stack web application, TaskPro, designed to enhance task management and productivity for over 1,000 users.',
        'Created the frontend using React and Node.js for the backend, with MongoDB for database management.',
        'Integrated an AI-driven feature using a fine-tuned BERT model to predict task completion times, improving productivity by 20%.',
        'Deployed the full-stack web application on Render, providing reliable uptime and scalability for handling 5,000+ monthly tasks. Task-Pro.com',
      ],
      imgUrl: projImg1,
    },
    {
      title:
        'Hyderabad House Price Prediction: Machine Learning Insights',
      description: [
        'Built a machine learning model to predict house prices in Hyderabad using a dataset of 200,000 entries.',
        'Preprocessed and cleaned the data using Python, Pandas, and Scikit-learn to enhance the model’s performance.',
        'Improved prediction accuracy by 15% using Linear Regression and Random Forest models, achieving 76% accuracy.',
        'Deployed the project to demonstrate the prediction capability for potential buyers and real estate analysts. Hyd-House-Pred',
      ],
      imgUrl: projImg2,
    },
    {
      title: 'KnowMe - Showcase Your Journey',
      description: [
        'Developed a full-stack web application, KnowMe, designed to simplify portfolio management and help users present their skills and experiences by signing up and showcasing their professional journey to potential recruiters.',
        'The frontend is built using the React framework, and the backend is developed with Node.js to handle server-side logic and API requests.',
        'Integrated the app with Email.js to facilitate direct communication between users and recruiters.',
      ],
      imgUrl: projImg3,
    },
    {
      title: 'AI Chat Application: Intelligent User Interaction',
      description: [
        'Developed a dynamic AI chat application using React and the Gemini API to handle 500+ user queries daily.',
        'Built the frontend with React.js, creating an intuitive and user-friendly interface that led to a 25% increase in user engagement.',
        'Deployed the application on Render, providing secure access and uptime for over 1,000 users. AI-Chat.com',
      ],
      imgUrl: projImg3,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Vishwapath</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>TaskPro</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>House Prediction</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='fourth'>KnowMe</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='fifth'>AI Chat</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          <ProjectCard {...projects[0]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row>
                          <ProjectCard {...projects[1]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <Row>
                          <ProjectCard {...projects[2]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fourth'>
                        <Row>
                          <ProjectCard {...projects[3]} />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='fifth'>
                        <Row>
                          <ProjectCard {...projects[4]} />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='Background'
      />
    </section>
  );
};
