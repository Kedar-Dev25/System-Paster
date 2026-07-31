import axios from "axios";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import "../App.css";

function Home() {
    const [text, setText] = useState("");
    const [showQR, setShowQR] = useState(false);
    const [qrUrl, setQrUrl] = useState("");

    useEffect(() => {
        console.log(qrUrl);
    }, [qrUrl]);

    const handleOnClick = () => {
        if (!text.trim()) {
            alert("Please enter some text.");
            return;
        }

        if (text.length <= 500) {
            setQrUrl(`system-paster.vercel.app/${encodeURIComponent(text)}`);
            setShowQR(true);
            return;
        }

        axios.post("https://system-paster.onrender.com/session")
            .then((response) => {
                const sid = response.data;
                const data = {
                    sid: sid,
                    message: text
                };

                return axios.post("https://system-paster.onrender.com/save", data)
                    .then(() => {
                        setQrUrl(`system-paster.vercel.app/connect/${sid}`);
                        setShowQR(true);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleReset = () => {
        setShowQR(false);
        setText("");
    };

    return (
        <div className="page-wrapper">
            <header className="app-header">
                <h1>System Paster</h1>
                <p>Transfer text instantly via QR code. No login.</p>
            </header>

            <main className="container">
                <textarea
                    className="text-area"
                    placeholder="Type or paste text here..."
                    value={text}
                    disabled={showQR}
                    onChange={(e) => setText(e.target.value)}
                />

<button
    className="send-btn"
    onClick={handleOnClick}
>
    <span>Send</span> 
    <svg 
        className="btn-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "20px", height: "20px", flexShrink: 0 }}
    >
        <path 
            d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
    </svg>
</button>
        </main>
    <footer className="footer">
        <p>🔐 No Login Required • ⚡ Instant Sharing • 📱 Cross Device</p>
    </footer>

            {showQR && (
                <div className="modal-backdrop">
                    <div className="qr-modal">
                        <h3>Scan to Access</h3>
                        <div className="qr-box">
                            <QRCode
                                className="qr-code"
                                value={qrUrl}
                                size={180}
                            />
                        </div>
                        <p className="qr-hint">Scan with your mobile camera</p>
                        <button className="close-btn" onClick={handleReset}>
                            Paste New Text
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;