import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

function Connect() {
    const { sid } = useParams();

    const [message, setMessage] = useState("");
    const [copied, setCopied] =useState(false);

    useEffect(() => {
        axios.post("https://system-paster.onrender.com/get-message", {
            sid,
        })
        .then((response) => {
            setMessage(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [sid]);

    const handleCopy = () => {
        navigator.clipboard.writeText(message);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    text: message,
                });
            } catch (err) {
                console.log("Share cancelled");
            }
        } else {
            window.open(
                `https://wa.me/?text=${encodeURIComponent(message)}`,
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

                    <div className="success-badge">
                        <svg
                            className="success-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span>Transferred Successfully</span>
                    </div>

                    <div className="action-buttons">
                        <button
                            className="copy-btn"
                            onClick={handleCopy}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>

                        <button
                            className="share-btn"
                            onClick={handleShare}
                        >
                            Share
                        </button>
                    </div>

                </div>

                <div className="content-box">
                    <p className="actual-text">
                        {message}
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Connect;