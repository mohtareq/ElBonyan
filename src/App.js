import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Nav from './Sections/MainSections/Navbar/Navbar';
import Footer from './Sections/MainSections/Footer/Footer';

import Home from './Pages/MainPages/HomePage/Home';
import About from './Pages/MainPages/AboutPage/About';
import Services from './Pages/MainPages/ServicesPage/ServicesPage';
import Blog from './Pages/MainPages/BlogPage/Blog';
import Contact from './Pages/MainPages/ContactPage/Contact';

import SeoPage from './Pages/OtherPages/ServicesPages/Seo/Seo';
import Web from './Pages/OtherPages/ServicesPages/Web/Web';
import Vedios from './Pages/OtherPages/ServicesPages/Vedios/Vedios';
import Spons from './Pages/OtherPages/ServicesPages/Spons/Spons';
import SocialMedia from './Pages/OtherPages/ServicesPages/SocialMedia/SocialMedia';
import Reports from './Pages/OtherPages/ServicesPages/Reports/Reports';
import Graphic from './Pages/OtherPages/ServicesPages/Graphic/Graphic';
import Content from './Pages/OtherPages/ServicesPages/Content/Content';

import Admin from './Pages/OtherPages/BlogsPages/Admin/Admin';
import Podcast from './Pages/OtherPages/BlogsPages/Podcast/Podcast';
import Investment from './Pages/OtherPages/BlogsPages/Investment/Investment';
import Procedures from './Pages/OtherPages/BlogsPages/Procedures/Procedures';
import Market from './Pages/OtherPages/BlogsPages/Marketing/Marketing';
import Design from './Pages/OtherPages/BlogsPages/Design/Design';

import Policy from './Pages/OtherPages/FooterPages/PolicyPage/Policy';
import Question from './Pages/OtherPages/FooterPages/QuestionPage/Question';
import Price from './Pages/OtherPages/PricePage/Price';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
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
        <Route exact path="/price" element={<Price />} />
      </Routes>
      <Footer />
    </div>    
  );
}

export default App;
