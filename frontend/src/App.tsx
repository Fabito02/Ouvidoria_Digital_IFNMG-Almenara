import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Header from './components/Header';
import RouterComponent from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <RouterComponent />
    </Router>
  );
};

export default App;