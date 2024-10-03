import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import LoginPage from "./components/Login";
import MainContent from "./components/MainContent";
import EmailVerification from "./components/EmailVerification";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopulationStatisticsDashboard from "./PopulationStatisticsDashboard";
import DisplaySchemes from "./consumer-pages/DisplaySchemes";
import FindSchemes from "./consumer-pages/FindSchemes";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/get-started-main-content"
            element={
              <>
                <SideBar />
                <MainContent />
              </>
            }
          />
          <Route
            path="/email-verification"
            element={
              <>
                <SideBar />
                <EmailVerification />
              </>
            }
          />
          <Route
            path="/population-statistics-dashboard"
            element={<PopulationStatisticsDashboard />}
          />
          <Route path="/find-schemes" element={<FindSchemes />} />
          <Route path="/display-schemes" element={<DisplaySchemes />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
