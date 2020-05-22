import React from 'react';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-16 h-16 rounded-full mr-4 object-cover"
        alt={name}
      />
      <div className="text-lg">{name}</div>
    </div>
  );
}
