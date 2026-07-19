import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Connect from "./page/Connect";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect/:sid" element={<Connect />} />
        </Routes>
    );
}

export default App;