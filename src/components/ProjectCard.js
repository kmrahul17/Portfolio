import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col md={12}>
      <div className='project-card'>
        <div className='project-image'>
          <img src={imgUrl} alt={title} />
        </div>
        <div className='project-details'>
          <h3>{title}</h3>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};
