// import React from 'react';

const TrailerModal = ({ isOpen, handleClose, trailerUrl }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <iframe title="trailer" width="560" height="315" src={trailerUrl} frameBorder={0} allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
