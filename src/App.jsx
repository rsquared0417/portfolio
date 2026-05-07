import { Routes, Route } from "react-router";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Experience } from "./pages/Experience/Experience";
import { ExperienceSingle } from "./pages/Experience/ExperienceSingle";
import { Contact } from "./pages/Contact/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:slug" element={<ExperienceSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
