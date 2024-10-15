import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Controller from './pages/Controller';
import GridTester from './pages/GridTester';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/controller' element={<Controller/>}/>
          <Route path='/gridtest' element={<GridTester/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
