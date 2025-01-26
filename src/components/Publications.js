// src/components/Publications.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Publications = () => {
  const publications = [
    {
      title:
        '"Seizure Type Classification Using CWT Spectrogram of EEG and 3D Convolutional Neural Network"',
      event: 'International Conference on Experimental Mechanics 2024',
      abstractId: 'T3S260255',
      status: 'Abstract accepted',
    },
  ];

  return (
    <section className='publications' id='publications'>
      <Container>
        <Row>
          <Col size={12} className='publications-container'>
            <h2>List of Publications</h2>
            <ul className='publication-list'>
              {publications.map((pub, index) => (
                <li key={index} className='publication-item'>
                  <p className='publication-title'>{pub.title}</p>
                  <p className='publication-details'>
                    {pub.event} - Abstract ID: {pub.abstractId} ({pub.status})
                  </p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
