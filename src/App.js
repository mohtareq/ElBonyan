import './App.css';
import Home from './Pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About/About';
import Nav from './Sections/Navbar/Navbar';
import Footer from './Sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      
    </div>    
  );
}

export default App;
