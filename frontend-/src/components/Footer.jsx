import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">

                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        System Paster
                    </Link>

                    <p>
                        A simple way to move text between your devices.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="/#move-your-text">
                        Move Your Text
                    </a>

                    <a href="/#how-it-works">
                        How It Works
                    </a>

                    <a href="/#faqs">
                        FAQs
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <span>© 2026 System Paster</span>
                <span className="footer-dot">•</span>
                <span>No Login Required</span>
            </div>
        </footer>
    );
}

export default Footer;
