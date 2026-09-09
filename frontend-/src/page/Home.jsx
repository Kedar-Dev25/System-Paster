import { useState } from "react";
import QRCode from "react-qr-code";
import "../App.css";

function Home() {
    const [text, setText] = useState("");
    const [showQR, setShowQR] = useState(false);
    const [qrUrl, setQrUrl] = useState("");
    const [showLimitMessage, setShowLimitMessage] = useState(false);

    const handleOnClick = () => {
        if (!text.trim()) {
            alert("Please enter some text.");
            return;
        }

        if (text.length > 500) {
            setShowLimitMessage(true);
            return;
        }

        setShowLimitMessage(false);

        const encodedText = encodeURIComponent(text);
        setQrUrl(`https://system-paster.vercel.app/${encodedText}`);
        setShowQR(true);
    };

    const handleReset = () => {
        setShowQR(false);
        setText("");
        setShowLimitMessage(false);
        setQrUrl("");
    };

    return (
        <div className="page-wrapper">

            <header className="app-header">
                {/* H1 Tag Optimized for High-Volume Search Keywords */}
                <h1>Transfer Text Between Devices</h1>

                <p>
                    Move text from laptop to phone, phone to laptop, or between 
                    devices using a QR code. Free, instant, and no login required.
                </p>
            </header>

            <main className="container">

                <section
                    id="move-your-text"
                    className="tool-section"
                    aria-labelledby="tool-heading"
                >
                    <h2 id="tool-heading">
                        Move Your Text with a QR Code
                    </h2>

                    <p>
                        Paste your text, generate a QR code, and scan it with
                        your other device to open the same text instantly.
                    </p>

                    <div className="steps" aria-label="How System Paster works">
                        <div className="step-item">
                            <span className="step-number">1</span>
                            <span>Paste</span>
                        </div>

                        <span className="step-arrow" aria-hidden="true">→</span>

                        <div className="step-item">
                            <span className="step-number">2</span>
                            <span>Scan</span>
                        </div>

                        <span className="step-arrow" aria-hidden="true">→</span>

                        <div className="step-item">
                            <span className="step-number">3</span>
                            <span>Copy</span>
                        </div>
                    </div>

                    <textarea
                        className="text-area"
                        placeholder="Type or paste text here..."
                        value={text}
                        disabled={showQR}
                        maxLength={500}
                        aria-label="Text to transfer"
                        onChange={(e) => {
                            setText(e.target.value);
                            setShowLimitMessage(false);
                        }}
                    />

                    <p className="character-count">
                        {text.length}/500 characters
                    </p>

                    <button
                        className="send-btn"
                        onClick={handleOnClick}
                        type="button"
                    >
                        <span>Generate QR Code</span>

                        <svg
                            className="btn-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                width: "20px",
                                height: "20px",
                                flexShrink: 0
                            }}
                            aria-hidden="true"
                        >
                            <path
                                d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 14.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3358C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9732 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {showLimitMessage && (
                        <div className="limit-message">
                            <p>
                                System Paster currently supports text up to 500 characters.
                            </p>
                            <p>
                                Longer text transfer will be supported in a future version.
                            </p>
                        </div>
                    )}
                </section>

                <section className="info-section">
                    <h2>📱 Transfer Text from Laptop to Phone</h2>
                    <p>
                        Need to move something you copied on your computer to your phone? 
                        System Paster lets you paste the text, create a QR code, and scan 
                        it with your phone camera to access the text instantly.
                    </p>
                    <p>
                        You can also move text from your phone to your laptop or share short text 
                        snippets between two smartphones without logging in.
                    </p>
                </section>

                <section className="info-section">
                    <h2>A Simple Way to Move Text Between Devices</h2>
                    <p>
                        Instead of emailing links to yourself or messaging through 3rd party apps, 
                        System Paster provides a direct browser-to-browser solution using QR codes.
                    </p>
                </section>

                <section id="how-it-works" className="info-section">
                    <h2>How It Works</h2>
                    <ol>
                        <li>
                            <strong>📋 Paste your text:</strong> Enter or paste your copied snippet into the input box.
                        </li>
                        <li>
                            <strong>▣ Generate QR Code:</strong> System Paster generates a dynamic QR code matrix.
                        </li>
                        <li>
                            <strong>📷 Scan on target device:</strong> Point your phone or laptop camera at the QR code to open the text.
                        </li>
                    </ol>
                </section>

                <section className="info-section">
                    <h2>Why Use System Paster?</h2>
                    <ul>
                        <li>✅ 100% Free & No Account Required</li>
                        <li>📱 No Mobile App or Extension Installation Needed</li>
                        <li>💻 Works across iOS, Android, Windows, macOS, & Linux</li>
                        <li>🔐 Secure direct QR encoding strategy</li>
                        <li>⚡ Perfect for links, passwords, notes, and code snippets</li>
                    </ul>
                </section>

                <section id="faqs" className="faq-section">
                    <h2>Frequently Asked Questions</h2>

                    <details>
                        <summary>How can I transfer text from my laptop to my phone?</summary>
                        <p>
                            Paste your text into System Paster on your laptop, click "Generate QR Code", and scan it using your phone's camera. The text will open on your phone screen ready to copy.
                        </p>
                    </details>

                    <details>
                        <summary>How can I transfer text from my phone to my laptop?</summary>
                        <p>
                            Open System Paster on your phone, paste the text, and generate a QR code. Scan the code using your laptop’s camera or scanner to retrieve the text instantly.
                        </p>
                    </details>

                    <details>
                        <summary>Can I transfer text between two phones?</summary>
                        <p>
                            Yes. Paste the text on the sender phone, generate the QR code, and scan it with the receiving phone's camera to share text instantly.
                        </p>
                    </details>

                    <details>
                        <summary>Can I transfer text without logging in?</summary>
                        <p>
                            Yes. System Paster requires no user registration, email, or account creation.
                        </p>
                    </details>

                    <details>
                        <summary>Do I need an app to transfer text?</summary>
                        <p>
                            No app installation is needed. System Paster works entirely inside any browser.
                        </p>
                    </details>

                    <details>
                        <summary>How much text can I transfer?</summary>
                        <p>
                            You can transfer up to 500 characters per QR code, ideal for links, wifi passwords, notes, and code snippets.
                        </p>
                    </details>

                    <details>
                        <summary>How does System Paster transfer text?</summary>
                        <p>
                            It encodes your text into a URL matrix displayed as a QR code. Scanning reads the encoded data instantly without relying on account pairings.
                        </p>
                    </details>
                </section>

            </main>

            <div className="final-cta">
                <a href="#move-your-text">Transfer Text Now →</a>
            </div>

            <footer className="site-footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo">
                            System Paster
                        </a>
                        <p>A simple way to move text between your devices.</p>
                    </div>

                    <div className="footer-links">
                        <a href="/#move-your-text">Move Your Text</a>
                        <a href="/#how-it-works">How It Works</a>
                        <a href="/#faqs">FAQs</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 System Paster</span>
                    <span className="footer-dot">•</span>
                    <span>No Login Required</span>
                </div>
            </footer>

            {showQR && (
                <div className="modal-backdrop">
                    <div
                        className="qr-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="qr-title"
                    >
                        <h3 id="qr-title">Scan to Access Your Text</h3>

                        <div className="qr-box">
                            <QRCode
                                className="qr-code"
                                value={qrUrl}
                                size={180}
                            />
                        </div>

                        <p className="qr-hint">
                            Scan this QR code with your other device camera.
                        </p>

                        <button
                            className="close-btn"
                            onClick={handleReset}
                            type="button"
                        >
                            Paste New Text
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;