import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import About from './Pages/About';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './Pages/Admin';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Admin route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

