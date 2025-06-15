import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Home from './Pages/Home';
import ProductList from './components/ProductList';
import NavBar from './components/Navbar';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';
import Cart from './Pages/Cart';

function App() {
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {/* Show NavBar only if not on Home page */}
      {location.pathname !== '/' && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />

        {/* ✅ Protect Admin route using Redux */}
        <Route
          path="/admin"
          element={
            isAuthenticated && user?.role === 'admin' ? (
              <Admin />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
