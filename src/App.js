import "./App.css";
import AboutMe from "./components/AboutMe";
import HeroBanner from "./components/HeroBanner";
import Header from "./components/Navbar";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
