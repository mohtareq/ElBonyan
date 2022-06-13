import './App.css';
import Home from './Pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About/About';
import Nav from './Main/Navbar/Navbar';
import Footer from './Main/Footer/Footer';
import Services from './Pages/ServicesPage/ServicesPage';
import Works from './Pages/Works/Works';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="works" element={<Works />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>    
  );
}

export default App;
