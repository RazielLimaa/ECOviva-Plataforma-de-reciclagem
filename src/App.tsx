import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initAuth, useAuthStore } from './store/authStore';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CheckInPage from './pages/CheckInPage';
import ForumPage from './pages/ForumPage';
import AboutUs from './pages/AboutUs';

function App() {
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route 
              path="/checkin" 
              element={
                isAuthenticated ? <CheckInPage /> : <Navigate to="/login" />
              } 
            />
            <Route path="/forum" element={<ForumPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;