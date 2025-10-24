// Contact.js
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './contact.css';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const handleContact = () => {
  window.location.href = 'tel:0603123065';
};

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_USER_ID;
    if (publicKey) {
      emailjs.init({ publicKey });
    } else {
      console.error('❌ PUBLIC_KEY EmailJS manquant (.env)');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !publicKey) {
      setErrorMessage("❌ Config EmailJS incomplète (SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY).");
      setSending(false);
      return;
    }

    try {
      // 👉 sendForm lit automatiquement les <input name="..."> et les envoie au template
      await emailjs.sendForm(serviceID, templateID, formRef.current, { publicKey });
      setSuccessMessage('✅ Votre message a été envoyé avec succès !');
      // reset du formulaire (et donc des champs envoyés)
      formRef.current.reset();
    } catch (err) {
      console.error('❌ Erreur EmailJS :', err);
      setErrorMessage(
        /invalid_grant/i.test(err?.text || '')
          ? "❌ Autorisation Gmail expirée. Reconnectez Gmail dans EmailJS (Dashboard → Email Services)."
          : "❌ Échec de l\'envoi. Réessayez plus tard."
      );
    } finally {
      setSending(false);
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

      {/* IMPORTANT : les name ci-dessous MATCHENT EXACTEMENT le template EmailJS: {{name}} {{email}} {{phone}} {{message}} */}
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          className="contact-input"
          required
          autoComplete="name"
        />

        <input
          type="email"
          name="email"
          placeholder="Mail"
          className="contact-input"
          required
          autoComplete="email"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Numéro de téléphone (optionnel)"
          className="contact-input"
          autoComplete="tel"
        />

        <textarea
          name="message"
          placeholder="Message"
          className="contact-textarea"
          required
        />

        <button type="submit" className="bouton" disabled={sending}>
          {sending ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>

      {successMessage && <p className="contact-thankyou">{successMessage}</p>}
      {errorMessage && <p className="contact-error">{errorMessage}</p>}

      <div className="contact-info">
        <p>Denis Dussert</p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> 06.03.12.30.65</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> luminescence.carrelage@gmail.com</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 302 Chemin des Vannades, 04100 Manosque</p>
      </div>
    </div>
  );
};

export default Contact;
