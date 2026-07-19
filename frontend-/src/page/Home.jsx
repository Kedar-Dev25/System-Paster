import axios from "axios";
import { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import { Routes, Route } from "react-router-dom";

function Home() {

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
                .then((response)=>{
                    console.log(response);
                })
            if (!text.trim()) {
                alert("Please enter some text.");
                return;
            }

            console.log(text);

            setShowQR(true);
        }



    
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

                    {showQR && sid && (
                        <QRCode
                            value={qrUrl}
                            size={220}
                        />
                    )}
                </>
               
);
}

export default Home;