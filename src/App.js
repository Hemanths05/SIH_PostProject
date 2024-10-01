import './App.css';
import Home from './components/Home';
import LoginPage from './components/Login';
import MainContent from './components/MainContent';
import EmailVerification from './components/EmailVerification'; // Import EmailVerification component
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main-content" element={<MainContent />} />
        <Route path="/email-verification" element={<EmailVerification />} /> {/* Add EmailVerification route */}
      </Routes>
    </div>
  );
}

export default App;
