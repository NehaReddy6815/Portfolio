import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"; // optional: App-specific styles

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>© 2025 Neha. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
