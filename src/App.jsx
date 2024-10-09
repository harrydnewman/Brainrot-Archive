import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Controller from './pages/Controller';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Router path='/controller' element={<Controller/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
