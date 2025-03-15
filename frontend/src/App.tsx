import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouterComponent from './Router';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <RouterComponent />
    </Router>
  );
};

export default App;