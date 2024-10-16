import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Controller from './pages/Controller';
import Grid from './pages/Grid';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/controller' element={<Controller/>}/>
          <Route path='/gridtest' element={<Grid/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
