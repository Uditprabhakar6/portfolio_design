import { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';

export default function Contact({ profile }) {
    const ref = useFadeIn();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    if (!profile) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section">
            <div className="container" ref={ref}>
                <span className="section-label">Contact</span>
                <h2 className="section-title">
                    Let&apos;s <span className="gradient-text">Connect</span>
                </h2>

                <div className="contact-grid">
                    <div className="contact-info-items">
                        <div className="contact-info-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <div className="contact-label">Email</div>
                                <div className="contact-value">
                                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-icon">📱</div>
                            <div>
                                <div className="contact-label">Phone</div>
                                <div className="contact-value">{profile.phone}</div>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <div className="contact-label">Location</div>
                                <div className="contact-value">{profile.location}</div>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-icon">💼</div>
                            <div>
                                <div className="contact-label">LinkedIn</div>
                                <div className="contact-value">
                                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                                        View Profile →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell me about your project..."
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            {submitted ? '✓ Message Sent!' : 'Send Message →'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
