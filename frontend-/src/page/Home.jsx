import axios from "axios";
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

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
        <>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <br />

            <button onClick={handleOnClick}>
                Send
            </button>

            {showQR && (
                <QRCode
                    value={qrUrl}
                    size={220}
                />
            )}
        </>
    );
}

export default Home;