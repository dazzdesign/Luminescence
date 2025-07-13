import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './contact.css';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const handleContact = () => {
  window.location.href = 'tel:0603123065';
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadRecaptchaScript = async () => {
      const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

      if (!recaptchaKey) {
        console.error("❌ Clé reCAPTCHA manquante dans .env");
        return;
      }

      if (!window.grecaptcha) {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => console.log("✅ reCAPTCHA chargé");
        document.body.appendChild(script);
      } else {
        console.log("✅ reCAPTCHA déjà chargé");
      }
    };

    loadRecaptchaScript();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    try {
      if (!window.grecaptcha || !recaptchaKey) {
        throw new Error("reCAPTCHA non disponible");
      }

      const token = await window.grecaptcha.execute(recaptchaKey, { action: 'submit' });

      const fullForm = {
        ...formData,
        'g-recaptcha-response': token,
      };

      await emailjs.send(serviceID, templateID, fullForm, userID);

      setSuccessMessage('✅ Votre message a été envoyé avec succès !');
      setErrorMessage('');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Erreur EmailJS ou reCAPTCHA :', error);
      setSuccessMessage('');
      setErrorMessage("❌ Échec de l'envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact – Carrelage lumineux à Manosque | Luminescence Carrelage</title>
        <meta
          name="description"
          content="Contactez Denis Dussert, artisan spécialiste du carrelage lumineux à Manosque. Devis, infos ou accompagnement personnalisé en Provence."
        />
        <meta
          name="keywords"
          content="contact carrelage lumineux, artisan Manosque, devis fibre optique carrelage, Denis Dussert, Luminescence Carrelage"
        />
        <meta name="author" content="Denis Dussert" />
        <meta property="og:title" content="Contact – Luminescence Carrelage à Manosque" />
        <meta property="og:description" content="Besoin d'un devis ou d'une info ? Contactez Luminescence Carrelage, expert du carrelage lumineux en Provence." />
        <meta property="og:url" content="https://luminescence-carrelage.fr/contact" />
        <meta property="og:image" content="https://luminescence-carrelage.fr/logo512.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://luminescence-carrelage.fr/contact" />
      </Helmet>

      <header className="contact-header">
        <h1>Contactez-nous</h1>
        <p className="contact-subtitle">
          Pour une information ou un devis, veuillez remplir le formulaire ci-dessous
          ou nous contacter par téléphone.
        </p>

        <button className="bouton bouton-tel" onClick={handleContact}>
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
        <button type="submit" className="bouton">Envoyer</button>
      </form>

      {successMessage && <p className="contact-thankyou">{successMessage}</p>}
      {errorMessage && <p className="contact-error">{errorMessage}</p>}

      <div className="contact-info">
        <p>Denis Dussert</p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> 06.03.12.30.65</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> contact@luminescence-carrelage.fr</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 302 Chemin des Vannades, 04100 Manosque</p>
      </div>
    </div>
  );
};

export default Contact;
