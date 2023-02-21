import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Greeting from './screens/Greeting';
import NoMatch from './screens/NoMatch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
