import React, { useState } from 'react';

const Bracket = () => {
  const [bracket, setBracket] = useState(Array(8).fill(null)); // Array of winners

  const handleDrop = (e, index) => {
    e.preventDefault();
    const flag = e.dataTransfer.getData('flag');
    const newBracket = [...bracket];
    newBracket[index] = flag;
    setBracket(newBracket);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const renderColumn = (start, end) => {
    return (
      <div className="flex flex-col gap-28 m-10">
        {bracket.slice(start, end).map((winner, index) => (
          <div
            key={start + index}
            onDrop={(e) => handleDrop(e, start + index)}
            onDragOver={handleDragOver}
            className="w-20 h-14 border border-dashed border-white flex items-center justify-center"
          >
            {winner ? (
              <img
                src={`https://flagcdn.com/w80/${winner}.png`}
                alt={winner}
                className="w-full h-full"
              />
            ) : (
              <div className="text-white"></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex gap-10">
      {renderColumn(0, 4)}
      {renderColumn(4, 8)}
    </div>
  );
};

export default Bracket;
