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

        // Small text -> No backend required
        if (text.length <= 500) {

            setQrUrl(`system-paster.vercel.app/${encodeURIComponent(text)}`);
            setShowQR(true);
            return;
        }

        // Large text -> Save on backend
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

        return (
    <div className="container">

        <textarea
            className="text-area"
            value={text}
            disabled={showQR}
            onChange={(e) => setText(e.target.value)}
        />

        <button
            className="send-btn"
            onClick={handleOnClick}
        >
            Send
        </button>

        {showQR && (
            <div className="qr-container">
                <QRCode
                    className="qr-code"
                    value={qrUrl}
                    size={220}
                />
            </div>
        )}

    </div>

    );
}

export default Home;