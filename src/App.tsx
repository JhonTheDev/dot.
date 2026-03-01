import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/about';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );

}
export default App
