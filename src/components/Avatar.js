import React from 'react';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 object-cover"
        alt={name}
      />
      <div className="text-base sm:text-xl">{name}</div>
    </div>
  );
}
