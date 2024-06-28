"use client"

import React from 'react';
import FlagItem from './FlagItem';
import Bracket from './Bracket';

const flags1 = [
  { id: 'es', url: 'https://flagcdn.com/w80/es.png' },
  { id: 'ge', url: 'https://flagcdn.com/w80/ge.png' },
  { id: 'de', url: 'https://flagcdn.com/w80/de.png' },
  { id: 'dk', url: 'https://flagcdn.com/w80/dk.png' },
  { id: 'pt', url: 'https://flagcdn.com/w80/pt.png' },
  { id: 'si', url: 'https://flagcdn.com/w80/si.png' },
  { id: 'fr', url: 'https://flagcdn.com/w80/fr.png' },
  { id: 'be', url: 'https://flagcdn.com/w80/be.png' },
];

const flags2 = [
  { id: 'ro', url: 'https://flagcdn.com/w80/ro.png' },
  { id: 'nl', url: 'https://flagcdn.com/w80/nl.png' },
  { id: 'at', url: 'https://flagcdn.com/w80/at.png' },
  { id: 'tr', url: 'https://flagcdn.com/w80/tr.png' },
  { id: 'gb-eng', url: 'https://flagcdn.com/w80/gb-eng.png' },
  { id: 'sk', url: 'https://flagcdn.com/w80/sk.png' },
  { id: 'ch', url: 'https://flagcdn.com/w80/ch.png' },
  { id: 'it', url: 'https://flagcdn.com/w80/it.png' },
];

const FlagsContainer = () => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('flag', e.target.dataset.flag);
  };

  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-3">
        {flags1.map((flag) => (
          <FlagItem key={flag.id} flag={flag} onDragStart={handleDragStart} />
        ))}
      </div>
      <Bracket />
      <div className="flex flex-col gap-3">
        {flags2.map((flag) => (
          <FlagItem key={flag.id} flag={flag} onDragStart={handleDragStart} />
        ))}
      </div>
    </div>
  );
};

export default FlagsContainer;
