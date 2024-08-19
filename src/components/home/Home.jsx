import React from 'react';
import './home.css'
function Home() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome our school</h1>
      </header>
      <main className="main-content">
        <section className="intro">
          <h2>About Us</h2>
          <p>
            Welcome to our school you get the formation here with profetionel teachers and the best program ,
             there are many fields the fameuse in the world
          </p>
        </section>
        <section className="features">
          <h2>Our Features</h2>
          <ul>
            <li>High Quality Uducation</li>
            <li>Exceptional teachers</li>
            <li>Best programms</li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

