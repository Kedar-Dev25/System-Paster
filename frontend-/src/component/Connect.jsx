import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";

import { useState } from "react";

function Connect() {
    const [message, setMessage] = useState("");

    const { sid } = useParams();
    useEffect(() => {
    axios.post("http://localhost:8080/get-message", {
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
        <h1>{message}</h1>
    );
}
export default Connect;