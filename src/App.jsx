import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Controller from './pages/Controller';
import ScrollHolder from './pages/ScrollHolder'; // Adjust path if needed
import Grid from './pages/Grid';
import About from './pages/About'; // Adjust path if needed

function App() {
  return (
    <div className="App">
      <Router basename="/brainrot">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/controller" element={<Controller />} />
          <Route path="/scroll" element={<Controller showNavbar={true}><ScrollHolder /></Controller>} />
          <Route path="/grid" element={<Controller showNavbar={true}><Grid /></Controller>} />
          <Route path="/about" element={<Controller showNavbar={true}><About /></Controller>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
