import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function App() {

    const [text, setText] = useState("");
    const [sid,setSid] = useState("");

    useEffect(() => {

        axios.post("http://localhost:8080/session")
        .then((response)=> {
            setSid(response.data.sid)
            console.log(response.data)
            console.log(response.data.sid)
        })
        .catch((error)=>{
            console.log(error)
        })
    // Send request to backend

}, []);
    return (
        <>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <br />

            <button onClick={() =>{console.log(text)}}>Send</button>
        </>
    );
}

export default App;