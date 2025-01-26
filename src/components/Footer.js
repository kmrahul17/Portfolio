import { Container, Row, Col } from 'react-bootstrap';

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';

import navIcon3 from '../assets/img/nav-icon3.svg';
import navIconGitHub from '../assets/img/github-icon.png'; // Add GitHub icon here

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/karanam-mohan-rahul-637b202a5'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={navIcon1} alt='LinkedIn' />
              </a>

              <a
                href='https://www.instagram.com/k.m.rahul?igsh=MTA2NWpyZ2puZG16Yw=='
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={navIcon3} alt='Instagram' />
              </a>

              <a
                href='https://github.com/kmrahul17' // Replace with your GitHub link
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={navIconGitHub} alt='GitHub' /> {/* GitHub Icon */}
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
