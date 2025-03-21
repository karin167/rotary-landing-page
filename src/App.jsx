import React from "react";
import "./App.css";
import logo from "/public/rotary-logo.png"; // ודא שהלוגו נמצא בתיקיית `public`

function App() {
  return (
    <div>
      {/* ניווט */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Rotary Mérignac" className="logo" />
        </div>
        <div className="navbar-right">
          <button className="btn-primary">Join</button>
          <button className="btn-secondary">Contact Us</button>
        </div>
      </nav>

      {/* אזור ראשי - Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">Rotary Mérignac</span>
          </h1>
          <p>
            Rotary Mérignac is a dynamic and engaged community club, dedicated
            to humanitarian service, ethical leadership, and impactful projects.
          </p>
          <p>
            Our mission is to bring positive change to our local and global
            community through events, networking, and fundraising initiatives.
          </p>
          <button className="btn-primary">Join Us Now</button>
        </div>
      </header>

      {/* אזור - מה אנחנו עושים */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p>
          We organize impactful events, such as the
          <strong> "CHAMPIONNAT DU MONDE DE LANCER D’AVIONS EN PAPIER"</strong>,
          bringing people together for a good cause while supporting local and
          international projects.
        </p>
        <ul>
          <li>📢 Content Marketing & Social Media campaigns</li>
          <li>💡 Lead Generation & CRM setup for outreach</li>
          <li>📬 Newsletter & Community Management</li>
          <li>🌐 Website Development & UX Optimization</li>
        </ul>
      </section>

      {/* כרטיסים של חדשות ואירועים */}
      <section className="news-updates">
        <h2>News & Updates</h2>
        <div className="cards-container">
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Event 1" />
            <h3>Upcoming Event: Championship</h3>
            <p>Join us for the world paper airplane championship!</p>
            <button className="btn-secondary">Learn More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Event 2" />
            <h3>Community Project</h3>
            <p>Helping our local community through volunteering.</p>
            <button className="btn-secondary">Learn More</button>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Event 3" />
            <h3>Growth & Impact</h3>
            <p>How we’re making a difference worldwide.</p>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* אזור יצירת קשר */}
      <footer className="footer">
        <h2>Join Us & Make a Difference</h2>
        <button className="btn-primary">Join Now</button>
        <button className="btn-secondary">Contact Us</button>
      </footer>
    </div>
  );
}

export default App;
