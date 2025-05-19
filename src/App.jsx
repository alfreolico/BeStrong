// // App.jsx

import React from 'react';
import './App.css';
import { FaHeart, FaStar, FaUtensils, FaEnvelope } from 'react-icons/fa';
import ChocolateRains from './ChocolateRains';
import larolita from './assets/larolita.mp3';

function App() {
	return (
		<div className="App">
			<ChocolateRains />
			<Header />
			<HeroSection />
			<DetailsSection />
			<GallerySection />
			{/* <ContactSection /> */}
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
					{/* <li>
            <a href="#contact">Contacto</a>
          </li> */}
				</ul>
			</nav>
		</header>
	);
}

function HeroSection() {
	const mensaje = 'Sí quiero ser tu Valentín BB.';

	const abrirWhatsApp = () => {
		const url = `https://wa.me/+529381448996?text=${encodeURIComponent(
			mensaje,
		)}`;
		window.open(url, '_blank');
	};

	return (
		<section id="hero" className="hero">
			<h1>Me encataria tener mi propia pagina de SAN VALENTIN</h1>
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
