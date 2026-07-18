import { useParams } from "react-router-dom";
import axios from "axios"

function Connect() {
    const { sid } = useParams();
    console.log(sid);
    axios.post("http://localhost:8080/get-message")
        .then((response) => {
            console.log(response.data)
        })

    return (
        <h1>{sid}</h1>
    );
}
export default Connect;