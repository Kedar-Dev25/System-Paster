
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
                </div>

                <button
                    ref={buttonRef}
                    className="navbar-menu-button"
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <svg
                        className="navbar-menu-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        {menuOpen ? (
                            <path
                                d="M6 6L18 18M18 6L6 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        ) : (
                            <path
                                d="M4 7H20M4 12H20M4 17H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        )}
                    </svg>
                </button>

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
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;
