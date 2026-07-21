import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Connect from "./page/Connect";
import ShowText from "./page/ShowText";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect/:sid" element={<Connect />} />
            <Route path="/:text" element={<ShowText />} />
        </Routes>
    );
}

export default App;