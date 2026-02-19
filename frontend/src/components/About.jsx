import useFadeIn from '../hooks/useFadeIn';

export default function About({ profile }) {
    const ref = useFadeIn();

    if (!profile) return null;

    return (
        <section id="about" className="section">
            <div className="container" ref={ref}>
                <span className="section-label">About Me</span>
                <h2 className="section-title">
                    Crafting <span className="gradient-text">Scalable</span> Solutions
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            {profile.summary}
                        </p>
                        <p>
                            Based in <strong>{profile.location}</strong>, I specialize in building high-performance
                            backend systems and APIs that power enterprise applications serving thousands of users daily.
                        </p>
                    </div>

                    <div className="about-highlights">
                        <div className="about-highlight-card">
                            <div className="about-highlight-icon">🛡️</div>
                            <div className="about-highlight-text">
                                <h4>Cybersecurity</h4>
                                <p>NDR solutions, MITRE ATT&CK mapping, OT security</p>
                            </div>
                        </div>
                        <div className="about-highlight-card">
                            <div className="about-highlight-icon">⚡</div>
                            <div className="about-highlight-text">
                                <h4>High Performance</h4>
                                <p>10K+ daily transactions, 99.9% uptime, 40% latency reduction</p>
                            </div>
                        </div>
                        <div className="about-highlight-card">
                            <div className="about-highlight-icon">☁️</div>
                            <div className="about-highlight-text">
                                <h4>Cloud & DevOps</h4>
                                <p>AWS infrastructure, Docker, CI/CD pipelines</p>
                            </div>
                        </div>
                        <div className="about-highlight-card">
                            <div className="about-highlight-icon">🔬</div>
                            <div className="about-highlight-text">
                                <h4>Patent Holder</h4>
                                <p>Drone security & threat mitigation invention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
