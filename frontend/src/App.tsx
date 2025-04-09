import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterComponent from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './form.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <RouterComponent />
      <Footer />
    </Router>
  );
};

export default App;