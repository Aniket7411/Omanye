import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './components/footer';
import GreenBuilding from './components/greenconstruction';
import BMCServicePage from './components/Bmccomponent';
import ConstructionServicePage from './components/constructionservices';
import HassleFreeProcurementPage from './components/hassleFreeProcurementPage';
import OmanyePage from './components/homepage';
import PostConstruction from './components/postconstruction';
import TurnkeyProjects from './components/turnkeyprojects';
import ContactUs from './components/contactus';
import ConstructionProducts from './components/products';
import ServicesPage from './components/services';
import ProductsPage from './components/productdetails';
import Termsandcondition from './components/tnc';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<OmanyePage />} />
        <Route path="/green-construction" element={<GreenBuilding />} />
        <Route path="/bmc-services" element={<BMCServicePage />} />
        <Route path="/construction-services" element={<ConstructionServicePage />} />
        <Route path="/hassle-free-procurement" element={<HassleFreeProcurementPage />} />
        <Route path="/post-construction" element={<PostConstruction />} />
        <Route path="/turnkey-projects" element={<TurnkeyProjects />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-products" element={<ConstructionProducts />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/products-detail" element={<ProductsPage />} />
        <Route path="/terms_conditions" element={<Termsandcondition />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
