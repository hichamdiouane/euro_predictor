// FlagItem.jsx
import React from 'react';

const FlagItem = ({ flag, onDragStart }) => {
  return (
    <img
      src={flag.url}
      alt={flag.id}
      data-flag={flag.id}
      draggable="true"
      onDragStart={onDragStart}
      className="w-20 h-14 m-2"
    />
  );
};

export default FlagItem;
