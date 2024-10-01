import './App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import LoginPage from './components/Login';
import MainContent from './components/MainContent';
import EmailVerification from './components/EmailVerification'; 
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main-content" element={
          <>
            <SideBar />
            <MainContent />
          </>
        } />
        <Route path="/email-verification" element={
          <>
            <SideBar />
            <EmailVerification />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
