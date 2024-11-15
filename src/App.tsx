import "./App.css";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import works from "./assets/experience";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <TopNav />
      <Hero />
      <About />
      <Experience works={works} />
      <Projects />
    </>
  );
}

export default App;
