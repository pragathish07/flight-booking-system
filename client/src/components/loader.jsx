import React from 'react';
import '../App.css'; // Import the CSS file for styling

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Fetching Flight details...</p>
    </div>
  );
}

export default Loader;
