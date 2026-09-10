
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
        </nav>
    );
}

export default Navbar;
