import { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function ShowText() {
    const { text } = useParams();
    const decodedText = decodeURIComponent(text || "");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(decodedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const handleShare = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                text: decodedText,
            });
        } catch (err) {
            console.log("Share cancelled");
        }
    } else {
        window.open(
            `https://wa.me/?text=${encodeURIComponent(decodedText)}`,
            "_blank"
        );
    }
};

    return (
        <div className="page-wrapper">
            <header className="app-header">
                <h1>System Paster</h1>
                <p>Instantly Transferred Text</p>
            </header>

            <main className="container text-display-container">
                <div className="text-header-bar">
                    {/* Green Success Badge with Check Icon */}
                    <div className="success-badge">
                        <svg className="success-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Transferred Successfully</span>
                    </div>
<div className="action-buttons">
    <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
    </button>

    <button className="share-btn" onClick={handleShare}>
        Share
    </button>
</div>
                </div>
                
                <div className="content-box">
                    <p className="actual-text">{decodedText}</p>
                </div>
            </main>
        </div>
    );
}

export default ShowText;