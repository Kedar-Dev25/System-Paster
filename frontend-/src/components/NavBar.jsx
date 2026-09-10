import { useEffect, useRef, useState } from "react";
import "../App.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                menuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [menuOpen]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="navbar-inner">
                <a href="/" className="navbar-logo">
    <img src="/favicon.png" alt="System Paster" />
    <span>System Paster</span>
</a>


                {/* Desktop navigation */}
                <div className="navbar-links">
                    <a
                        href="/#move-your-text"
                        className="navbar-link"
                    >
                        Move Your Text
                    </a>

                    <a
                        href="/#how-it-works"
                        className="navbar-link"
                    >
                        How It Works
                    </a>

                    <a
                        href="/#faqs"
                        className="navbar-link"
                    >
                        FAQs
                    </a>

                    <a
                        href="/blog"
                        className="navbar-link"
                    >
                        Blog
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    ref={buttonRef}
                    className="navbar-menu-button"
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="navbar-menu-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                    >
                        {menuOpen ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </>
                        )}
                    </svg>
                </button>

                {/* Mobile navigation */}
                {menuOpen && (
                    <div
                        ref={menuRef}
                        className="navbar-mobile-menu"
                    >
                        <a
                            href="/#move-your-text"
                            className="navbar-link"
                            onClick={handleLinkClick}
                        >
                            Move Your Text
                        </a>

                        <a
                            href="/#how-it-works"
                            className="navbar-link"
                            onClick={handleLinkClick}
                        >
                            How It Works
                        </a>

                        <a
                            href="/#faqs"
                            className="navbar-link"
                            onClick={handleLinkClick}
                        >
                            FAQs
                        </a>

                        <a
                            href="/blog"
                            className="navbar-link"
                            onClick={handleLinkClick}
                        >
                            Blog
                        </a>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;