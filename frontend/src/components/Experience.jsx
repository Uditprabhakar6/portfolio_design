import useFadeIn from '../hooks/useFadeIn';

export default function Experience({ experience }) {
    const ref = useFadeIn();

    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="section">
            <div className="container" ref={ref}>
                <span className="section-label">Career</span>
                <h2 className="section-title">
                    Professional <span className="gradient-text">Experience</span>
                </h2>

                <div className="experience-timeline">
                    {experience.map((exp) => (
                        <div key={exp.id} className="experience-item fade-in visible">
                            <div className="glass-card experience-card">
                                <div className="experience-header">
                                    <div>
                                        <div className="experience-company">{exp.company}</div>
                                        <div className="experience-role">{exp.role}</div>
                                    </div>
                                    <div className="experience-meta">
                                        <div className="experience-date">{exp.start_date} — {exp.end_date}</div>
                                        <div>{exp.location}</div>
                                    </div>
                                </div>

                                {exp.highlights && exp.highlights.length > 0 && (
                                    <ul className="experience-highlights">
                                        {exp.highlights.map((h) => (
                                            <li key={h.id}>{h.text}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
