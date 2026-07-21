import { useParams } from "react-router-dom";

function ShowText() {

    const { text } = useParams();

    return (
        <h1>{decodeURIComponent(text)}</h1>
    );
}

export default ShowText;