import useFadeIn from '../hooks/useFadeIn';

export default function Achievements({ certifications, patent }) {
    const ref = useFadeIn();

    return (
        <section id="achievements" className="section">
            <div className="container" ref={ref}>
                <span className="section-label">Achievements</span>
                <h2 className="section-title">
                    Certifications & <span className="gradient-text">Patent</span>
                </h2>

                {certifications && certifications.length > 0 && (
                    <div className="certs-grid">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="glass-card cert-card">
                                <div className="cert-name">🏅 {cert.name}</div>
                                {cert.issuer && <div className="cert-issuer">{cert.issuer}</div>}
                            </div>
                        ))}
                    </div>
                )}

                {patent && (
                    <div className="glass-card patent-card">
                        <div className="patent-badge">🔬 Patent Granted</div>
                        <div className="patent-title">{patent.title}</div>
                        <div className="patent-number">{patent.number}</div>
                        <div className="patent-date">Granted: {patent.date}</div>
                        <div className="patent-description">{patent.description}</div>
                    </div>
                )}
            </div>
        </section>
    );
}
