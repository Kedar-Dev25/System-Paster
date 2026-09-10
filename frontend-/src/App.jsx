import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Connect from "./page/Connect";
import ShowText from "./page/ShowText";
import Blog from "./page/Blog";
import Navbar from "./components/NavBar";
import BlogArticle from "./page/BlogArticle";
function App() {
    return (
        <>
            <Navbar />

            <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route
        path="/blog/transfer-text-between-devices-without-whatsapp"
        element={<BlogArticle />}
    />
    <Route path="/connect/:sid" element={<Connect />} />
    <Route path="/:text" element={<ShowText />} />
</Routes>
        </>
    );
}

export default App;