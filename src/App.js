import './App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import LoginPage from './components/Login';
import MainContent from './components/MainContent'; // Import MainContent component
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main-content" element={<MainContent />} /> {/* Add MainContent route */}
      </Routes>
    </div>
  );
}

export default App;
