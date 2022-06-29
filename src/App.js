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
import SeoPage from './ServicesPages/Seo/Seo';
import Web from './ServicesPages/Web/Web';
import Vedios from './ServicesPages/Vedios/Vedios';
import Spons from './ServicesPages/Spons/Spons';
import SocialMedia from './ServicesPages/SocialMedia/SocialMedia';
import Reports from './ServicesPages/Reports/Reports';
import Graphic from './ServicesPages/Graphic/Graphic';
import Content from './ServicesPages/Content/Content';
import Admin from './BlogsPages/Admin/Admin';
import Podcast from './BlogsPages/Podcast/Podcast';
import Investment from './BlogsPages/Investment/Investment';
import Procedures from './BlogsPages/Procedures/Procedures';
import Market from './BlogsPages/Marketing/Marketing';
import Design from './BlogsPages/Design/Design';
import Policy from './FooterPages/PolicyPage/Policy';
import Question from './FooterPages/QuestionPage/Question';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/works" element={<Works />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services/seo" element={<SeoPage />} />
        <Route exact path="/services/web-apps-development" element={<Web />} />
        <Route exact path="/services/vedios" element={<Vedios />} />
        <Route exact path="/services/sponsored" element={<Spons />} />
        <Route exact path="/services/social-media" element={<SocialMedia />} />
        <Route exact path="/services/reporting" element={<Reports />} />
        <Route exact path="/services/grahpic-design" element={<Graphic />} />
        <Route exact path="/services/content-writing" element={<Content />} />
        <Route exact path="/blog/marketing" element={<Market />} />
        <Route exact path="/blog/podcast" element={<Podcast />} />
        <Route exact path="/blog/investment" element={<Investment />} />
        <Route exact path="/blog/procedures" element={<Procedures />} />
        <Route exact path="/blog/adminstrative" element={<Admin />} />
        <Route exact path="/blog/design" element={<Design />} />
        <Route exact path="/home/policy" element={<Policy />} />
        <Route exact path="/home/questions" element={<Question />} />
      </Routes>
      <Footer />
    </div>    
  );
}

export default App;
