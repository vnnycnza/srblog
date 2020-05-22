import React from 'react';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full mr-4 object-cover"
        alt={name}
      />
      <div className="text-xl md:text-2xl">{name}</div>
    </div>
  );
}
