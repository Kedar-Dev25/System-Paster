import { useParams } from "react-router-dom";

function Connect() {

    const { sid } = useParams();

    console.log(sid);

    return (
        <h1>{sid}</h1>
    );
}

export default Connect;