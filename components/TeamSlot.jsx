// components/TeamSlot.js
import React from 'react';

const TeamSlot = ({ slot, onDrop, onDragOver }) => {
  return (
    <div
      className={`team-slot ${slot.isEmpty ? 'empty-slot' : ''}`}
      style={{
        backgroundImage: slot.flag ? `url(${slot.flag})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        margin: '10px'
      }}
      onDrop={onDrop}
      onDragOver={onDragOver}
    ></div>
  );
};

export default TeamSlot;
