import React, { useState } from 'react';
import '../styles/Contact.css';
import { 
  FaLinkedin, FaGithub
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando fetch o axios para enviar a una API

    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      error: false,
      message: '¡Mensaje enviado correctamente! Te contactaré pronto.'
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>Contacto</h2>
        <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>salvador.lopez.970519@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Ubicación</h3>
              <p>Tuxtla Gutierrez, Chiapas</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/SalvadorJL" target="_blank" rel="noopener noreferrer">
              <i className="contact-icon"><FaLinkedin color="#0a66c2" /></i>
            </a>
            <a href="https://linkedin.com/in/sjlg/" target="_blank" rel="noopener noreferrer">
              <i className="contact-icon"><FaGithub color="black" /></i>
            </a>
            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a> */}
          </div>
        </div>
        
        <div className="contact-form">
          {formStatus.submitted ? (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;