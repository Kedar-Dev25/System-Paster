import axios from "axios";
import { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import Connect from "./component/Connect";
import { Routes, Route } from "react-router-dom";

function App() {

    const [text, setText] = useState("");
    const [sid,setSid] = useState("");
    const [showQR,setShowQR] = useState(false);

    const hasRequested = useRef(false);

    const qrUrl = `http://localhost:5173/connect/${sid}`;
    const data = {
        sid : sid,
        message : text,
    }

    useEffect(() => {

    if (hasRequested.current) {
        return;
    }

    hasRequested.current = true;

    axios.post("http://localhost:8080/session")
        .then((response) => {
            setSid(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

}, []);
        const handleOnClick = () => {
            axios.post("http://localhost:8080/save",data)
            if (!text.trim()) {
                alert("Please enter some text.");
                return;
            }

            console.log(text);

            setShowQR(true);
        }


console.log("SID:", sid);
console.log("showQR:", showQR);
console.log("QR URL:", qrUrl);
    
    return (
    <Routes>

        <Route
            path="/"
            element={
                <>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <br />

                    <button onClick={handleOnClick}>
                        Send
                    </button>

                    {showQR && sid && (
                        <QRCode
                            value={qrUrl}
                            size={220}
                        />
                    )}
                </>
            }
        />

        <Route
            path="/connect/:sid"
            element={<Connect />}
        />

    </Routes>
);
}

export default App;