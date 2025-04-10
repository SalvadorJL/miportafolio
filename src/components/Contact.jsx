import React, { useState } from 'react';
import '../styles/Contact.css';
import { 
  FaLinkedin, FaGithub
} from 'react-icons/fa';

const Contact = ({ text }) => {
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

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://apiportafolio-one.vercel.app/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          asunto: formData.subject,
          mensaje: formData.message
        })         
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
  
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
  
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Hubo un error al enviar el mensaje. Intentalo más tarde.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>{text.title}</h2>
        <p>{text.subtitle}</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>{text.contact[0]}</h3>
              <p>salvador.lopez.970519@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>{text.contact[1]}</h3>
              <p>+52 961-196-7594</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>{text.contact[2]}</h3>
              <p>Tuxtla Gutierrez, Chiapas</p>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/SalvadorJL" target="_blank" rel="noopener noreferrer">
              <i className="contact-icon"><FaGithub color="#0a66c2" /></i>
            </a>
            <a href="https://linkedin.com/in/sjlg/" target="_blank" rel="noopener noreferrer">
              <i className="contact-icon"><FaLinkedin color="black" /></i>
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
                  placeholder={text.form.name}
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
                  placeholder={text.form.email}
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
                  placeholder={text.form.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder={text.form.message}
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    {text.form.sending}
                    <span className="loader"></span>
                  </>
                ) : text.form.button}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;