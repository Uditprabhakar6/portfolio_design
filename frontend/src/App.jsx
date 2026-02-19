import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const API_URL = 'http://localhost:8000/api/portfolio/';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch portfolio data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="skeleton">
        <div style={{ textAlign: 'center' }}>
          <div className="loading-spinner" style={{ margin: '0 auto 16px' }} />
          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="skeleton">
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#ff4466', marginBottom: 8 }}>Failed to load data</p>
          <p style={{ fontSize: '0.9rem', color: '#556178' }}>
            Make sure the Django server is running on port 8000
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero profile={data.profile} />
      <About profile={data.profile} />
      <Experience experience={data.experience} />
      <Skills skills={data.skills} />
      <Education education={data.education} />
      <Achievements certifications={data.certifications} patent={data.patent} />
      <Contact profile={data.profile} />
      <Footer profile={data.profile} />
    </>
  );
}
