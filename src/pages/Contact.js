import React, { useEffect, useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const handleContact = () => {
  window.location.href = 'tel:0622765751';
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_camhlpp', 'template_giqz67p', formData, '9xVMw8Nc_snDpmRjR')
      .then((response) => {
        console.log('Email sent successfully', response);
        setSuccessMessage('Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email', err);
        setSuccessMessage('Échec de l\'envoi du message. Veuillez réessayer.');
      });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1><span className="highlight">Contactez-nous</span></h1>
        <p className="contact-subtitle">
          Pour une information ou un devis, veuillez remplir le formulaire ci-dessous
          ou nous contacter par téléphone.
        </p>
        <button className="contact-button" onClick={handleContact}>
          Nous contacter par téléphone <FontAwesomeIcon icon={faPhoneAlt} />
        </button>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Nom" 
          className="contact-input" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Mail" 
          className="contact-input" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Numéro de téléphone" 
          className="contact-input" 
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          className="contact-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>

      {successMessage && <p className="contact-thankyou">{successMessage}</p>}

      <div className="contact-info">
        <p>Laurent Dussert</p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> 06.22.75.87.51</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> provencecarrelage.pro@gmail.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 302 Chemin des Vannades, 04100 Manosque</p>
      </div>
    </div>
  );
};

export default Contact;
