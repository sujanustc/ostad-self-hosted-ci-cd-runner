import React, { useEffect, useState } from 'react';
import './index.css';

const dummyProjects = [
  {
    id: 1,
    title: 'Awesome Project One',
    description: 'A brief description of the first awesome project.',
    image: 'https://picsum.photos/seed/p1/400/300',
    link: '#',
  },
  {
    id: 2,
    title: 'Cool App Two',
    description: 'An innovative app that solves many problems.',
    image: 'https://picsum.photos/seed/p2/400/300',
    link: '#',
  },
  {
    id: 3,
    title: 'Creative Site Three',
    description: 'A creative website showcasing modern design.',
    image: 'https://picsum.photos/seed/p3/400/300',
    link: '#',
  },
];

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching from a public dummy API
    // In real scenario replace with fetch('https://api.example.com/projects')
    setTimeout(() => setProjects(dummyProjects), 500);
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>My Portfolio</h1>
        <p>Welcome to my showcase of projects.</p>
      </header>
      <section className="projects">
        {projects.map((proj) => (
          <a key={proj.id} href={proj.link} className="card" target="_blank" rel="noopener noreferrer">
            <img src={proj.image} alt={proj.title} loading="lazy" />
            <div className="card-content">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
            </div>
          </a>
        ))}
      </section>
      <footer className="footer">
        <p>© {new Date().getFullYear()} My Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
