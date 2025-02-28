import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovieForm from './components/AddMovieForm'; // Import the AddMovieForm component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the Dashboard */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Route for the Add Movie form */}
        <Route path="/add-movie" element={<AddMovieForm />} />
      </Routes>
    </Router>
  );
};

export default App;