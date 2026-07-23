import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

function Connect() {
    const [message, setMessage] = useState("");

    const [copied, setCopied] = useState(false);

const handleCopy = async () => {
    try {
        await navigator.clipboard.writeText(message);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1200);
    } catch (err) {
        console.error("Copy failed:", err);
    }
};


    const { sid } = useParams();
    useEffect(() => {
    axios.post("https://system-paster.onrender.com/get-message", {
        sid: sid
    })
    .then((response) => {
        setMessage(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

}, [sid]);

    return (
        <>
        <h1>{message}</h1>
        <button onClick={handleCopy}>
    {copied ? <Check size={18} /> : <Copy size={18} />}
</button>
</>
    );
}
export default Connect;