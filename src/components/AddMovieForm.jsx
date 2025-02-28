// src/components/AddMovieForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovieForm.css'; // Import the CSS file for styling

const AddMovieForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterImageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hypothetical submission logic (no actual functionality required)
    console.log('Movie Data:', formData);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="add-movie-form-container">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className="form-group">
          <label>Release Year:</label>
          <input
            type="number"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Synopsis:</label>
          <textarea
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Poster Image URL:</label>
          <input
            type="url"
            name="posterImageUrl"
            value={formData.posterImageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;