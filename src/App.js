
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './pages/kontakt';
import NotFound from './pages/404';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontakt" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
