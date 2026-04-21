import { Routes, Route } from "react-router";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Skills } from "./pages/Skills/Skills";
import { Experience } from "./pages/Experience/Experience";
import { Work } from "./pages/Work/Work";
import { Contact } from "./pages/Contact/Contact";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/*<Footer />*/}
    </>
  );
}

export default App;
