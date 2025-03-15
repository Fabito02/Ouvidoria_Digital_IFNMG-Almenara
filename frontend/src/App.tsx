import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import RouterComponent from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <RouterComponent />
    </Router>
  );
};

export default App;