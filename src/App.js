import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Login} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
