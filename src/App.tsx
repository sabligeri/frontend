import {Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Header from './components/header/Header';
import StorageList from './components/storage/StorageList';

function App() {

  const location = useLocation();

  const hideHeaderLocations = ['/login', '/register'];

  return (
    <>
    {!hideHeaderLocations.includes(location.pathname) && <Header />}
    <Routes>
      <Route path="/" element={<Navigate replace to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/storage"
        element={
          <PrivateRoute>
            <StorageList />
          </PrivateRoute>
        }
      />
    </Routes>
    </>
  )
}

export default App
