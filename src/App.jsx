// // App.jsx
// import { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaHeart, FaInstagram, FaFacebook } from 'react-icons/fa';
// import './App.css';

// import { FaPlay, FaPause } from 'react-icons/fa';
// import { useEffect, useRef } from 'react';

// const App = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="valentine-container">
//       {/* Header */}
//       <header className="header">
//         <nav className="navbar">
//           <div className="logo">💘 Be My Valentine</div>
//           <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
//             <li><a href="#inicio">Inicio</a></li>
//             <li><a href="#detalles">Detalles</a></li>
//             <li><a href="#galeria">Galería</a></li>
//             <li><a href="#contacto">Contacto</a></li>
//           </ul>
//           <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section id="inicio" className="hero">
//         <div className="hero-content">
//           <h1>¿Serás mi San Valentín?</h1>
//           <button className="cta-button">¡Dí que sí!</button>
//         </div>
//       </section>

//       {/* Detalles */}
//       <section id="detalles" className="details">
//         <h2>Nuestra Noche Especial</h2>
//         <div className="plans-grid">
//           {[1, 2, 3].map((item) => (
//             <div key={item} className="plan-card">
//               <FaHeart className="heart-icon" />
//               <h3>Cena Romántica</h3>
//               <p>Menú especial con velas y música en vivo</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Galería */}
//       <section id="galeria" className="gallery">
//         <h2>Nuestros Momentos</h2>
//         <div className="image-grid">
//           {[1, 2, 3, 4, 5, 6].map((item) => (
//             <div key={item} className="gallery-item"></div>
//           ))}
//         </div>
//       </section>

//       {/* Contacto */}
//       <section id="contacto" className="contact">
//         <h2>Envía tu Mensaje</h2>
//         <form className="contact-form">
//           <input type="text" placeholder="Tu nombre" />
//           <input type="email" placeholder="Tu correo" />
//           <textarea placeholder="Tu mensaje especial..."></textarea>
//           <button type="submit">Enviar mi mensaje de amor</button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="social-icons">
//           <FaInstagram />
//           <FaFacebook />
//         </div>
//         <p>Hecho con ❤️ para ti | © 2024 Be My Valentine</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import { FaHeart, FaStar, FaUtensils, FaEnvelope } from "react-icons/fa";
import ChocolateRains from "./ChocolateRains";
import larolita from "./assets/larolita.mp3";

function App() {
  return (
    <div className="App">
      <ChocolateRains />
      <Header />
      <HeroSection />
      <DetailsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <audio controls autoPlay loop>
        <source src={larolita} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="#hero">Inicio</a>
          </li>
          <li>
            <a href="#details">Detalles</a>
          </li>
          <li>
            <a href="#gallery">Galería</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  const mensaje = "Sí quiero ser tu Valentín BB.";

  const abrirWhatsApp = () => {
    const url = `https://wa.me/+529381448996?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="hero" className="hero">
      <h1>¿Serás mi San Valentín?</h1>
      <button className="cta-button" onClick={abrirWhatsApp}>
        ¡Dí que sí!
      </button>
    </section>
  );
}

function DetailsSection() {
  return (
    <section id="details" className="details">
      <h2>Planes para San Valentín</h2>
      <div className="plans-container">
        <div className="plan">
          <FaUtensils className="icon" />
          <h3>Cena Romántica</h3>
          <p>Disfruta de una cena bajo las estrellas</p>
        </div>
        <div className="plan">
          <FaStar className="icon" />
          <h3>Paseo Bajo las Estrellas</h3>
          <p>Una caminata inolvidable bajo el cielo estrellado</p>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="gallery">
      <h2>Galería Romántica</h2>
      <div className="image-grid">
        <div className="image-item image1"></div>
        <div className="image-item image2"></div>
        <div className="image-item image3"></div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Tu mensaje personalizado" required></textarea>
        <button type="submit">Enviar mi mensaje de amor</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Hecho con <FaHeart className="footer-icon" /> para ti
      </p>
      <p>&copy; 2025 Derechos reservados</p>
    </footer>
  );
}

export default App;
