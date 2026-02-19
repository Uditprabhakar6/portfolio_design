export default function Footer({ profile }) {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    © {year} {profile?.name || 'Udit Prabhakar'}. Crafted with precision.
                </div>
                <div className="footer-socials">
                    {profile?.linkedin && (
                        <a href={profile.linkedin} className="footer-social-link" target="_blank" rel="noreferrer" title="LinkedIn">
                            in
                        </a>
                    )}
                    {profile?.email && (
                        <a href={`mailto:${profile.email}`} className="footer-social-link" title="Email">
                            ✉
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
}
