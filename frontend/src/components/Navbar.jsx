import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sectionEls = sections.map(s => document.getElementById(s.id));
            for (let i = sectionEls.length - 1; i >= 0; i--) {
                const el = sectionEls[i];
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    UP.
                </div>

                <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>

                <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
                    {sections.map(s => (
                        <li key={s.id}>
                            <a
                                href={`#${s.id}`}
                                className={activeSection === s.id ? 'active' : ''}
                                onClick={() => setMobileOpen(false)}
                            >
                                {s.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
