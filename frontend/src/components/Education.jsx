import useFadeIn from '../hooks/useFadeIn';

export default function Education({ education }) {
    const ref = useFadeIn();

    if (!education || education.length === 0) return null;

    return (
        <section id="education" className="section">
            <div className="container" ref={ref}>
                <span className="section-label">Education</span>
                <h2 className="section-title">
                    Academic <span className="gradient-text">Background</span>
                </h2>

                {education.map((edu) => (
                    <div key={edu.id} className="glass-card education-card">
                        <div className="education-degree">{edu.degree}</div>
                        <div className="education-institution">{edu.institution}</div>
                        <div className="education-details">
                            <div className="education-detail">
                                <span className="icon">📅</span>
                                {edu.dates}
                            </div>
                            {edu.gpa && (
                                <div className="education-detail">
                                    <span className="icon">🎓</span>
                                    {edu.gpa}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
