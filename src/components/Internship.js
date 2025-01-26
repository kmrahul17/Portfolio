import colorSharp from '../assets/img/color-sharp.png';

export const Internship = () => {
  return (
    <section className='internship' id='internship'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='internship-bx wow zoomIn'>
              <h2>Internship Experience</h2>
              <div className='internship-details'>
                <h3>Project Intern | IISER Kolkata</h3>
                <p>
                  <strong>Nov ’24 - Present</strong>
                </p>
                <ul>
                  <li>
                    Developed a MERN-based AI application with over 80% accuracy, delivering personalized health prescriptions for 500+ users, enhancing patient care with tailored insights.
                  </li>
                  <li>
                    Built a Type 2 diabetes module, enabling users to input 10+ health metrics and receive customized prescriptions.
                  </li>
                  <li>
                    Configured Python deployment and integrated JWT authentication to secure 1,000+ monthly user sessions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className='background-image-left'
        src={colorSharp}
        alt='Background'
      />
    </section>
  );
};
