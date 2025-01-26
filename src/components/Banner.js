import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    'Full Stack Web Developer',
    'Artificial Intelligence Engineer',
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h2>
                    {`Hi! I'm Karanam Mohan Rahul`}{' '}
                    <span
                      className='txt-rotate'
                      dataPeriod='1000'
                      data-rotate='[ "Full Stack Web Developer", "Artificial Intelligence Engineer" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h2>
                  <p>
                  I am currently pursuing a Bachelor of Engineering in Computer Science at Neil Gogte Institute of Technology, Hyderabad. As an intern at IISER Kolkata, I am developing a MERN-based AI application for personalized health prescriptions. I have worked on projects like TaskPro, Hyderabad House Price Prediction, and AI Chat Application, showcasing my expertise in Full Stack Development, Data Science, and Machine Learning. My passion for photography earned me first place at the Nexus Event, and I also serve as the Photography Club Head at my college. I excel in adapting to challenges with a 'never give up' attitude.


                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
