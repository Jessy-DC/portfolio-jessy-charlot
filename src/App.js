import './App.css';
import './index.scss'
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import FormContact from "./components/form/form";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <About />
        <FormContact />
        <Footer />
    </div>
  );
}

export default App;
