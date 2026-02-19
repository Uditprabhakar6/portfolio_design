import useFadeIn from '../hooks/useFadeIn';

export default function Skills({ skills }) {
    const ref = useFadeIn();

    if (!skills || skills.length === 0) return null;

    return (
        <section id="skills" className="section">
            <div className="container" ref={ref}>
                <span className="section-label">Expertise</span>
                <h2 className="section-title">
                    Technical <span className="gradient-text">Skills</span>
                </h2>

                <div className="skills-grid">
                    {skills.map((cat) => (
                        <div key={cat.id} className="glass-card skill-category-card">
                            <div className="skill-category-name">{cat.name}</div>
                            <div className="skill-pills">
                                {cat.skills.map((skill) => (
                                    <span key={skill.id} className="skill-pill">{skill.name}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
