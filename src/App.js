import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Circles from "./pages/Circles";
import Lines from "./pages/Lines";
import Cobweb from "./pages/Cobweb";
import RandomParticles from "./pages/RandomParticles";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter basename="/my-app/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="circles" element={<Circles />} />
          <Route path="lines" element={<Lines />} />
          <Route path="cobweb" element={<Cobweb />} />
          <Route path="random" element={<RandomParticles />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
