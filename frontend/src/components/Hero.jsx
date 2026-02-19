export default function Hero({ profile }) {
    if (!profile) return null;

    return (
        <section id="hero" className="hero">
            <div className="container hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="status-dot" />
                        Available for opportunities
                    </div>

                    <h1>{profile.name}</h1>

                    <p className="hero-subtitle">
                        I&apos;m a <span className="gradient-text">{profile.title}</span>
                    </p>

                    <p className="hero-description">
                        {profile.summary}
                    </p>

                    <div className="hero-cta">
                        <a href="#contact" className="btn-primary">
                            Get In Touch →
                        </a>
                        <a href="#experience" className="btn-secondary">
                            View Experience
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-value">3.5+</div>
                            <div className="hero-stat-label">Years Experience</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">10K+</div>
                            <div className="hero-stat-label">Daily Transactions</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">99.9%</div>
                            <div className="hero-stat-label">Uptime Delivered</div>
                        </div>
                    </div>
                </div>

                <div className="hero-photo-wrapper">
                    <div className="hero-photo-ring">
                        <img
                            src="/profile-pic.jpg"
                            alt={profile.name}
                            className="hero-photo"
                        />
                    </div>
                </div>
            </div>

            <div className="hero-orb" aria-hidden="true" />
        </section>
    );
}
