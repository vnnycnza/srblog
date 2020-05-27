import React, { useState } from 'react';
import CountUp from 'react-countup';

import PrayerList from './PrayerList';

export default function Count({ requests }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container mx-auto px-5 min-h-full min-w-full">
      <div className="flex justify-center items-center py-6">
        {isVisible ? (
          <div className="flex-row flex items-center justify-center">
            <CountUp
              end={requests.length}
              duration={5}
              className={
                'text-10xl font-bold text-center md:text-left tracking-tighter leading-tight px-4'
              }
            />
            <span
              className="hover:underline text-4xl md:text-6xl font-bold text-center md:text-left tracking-tighter leading-tight"
              onClick={toggleVisible}
            >
              {' '}
              answered prayers.{' '}
            </span>
          </div>
        ) : (
          <PrayerList requests={requests} />
        )}
      </div>
    </div>
  );
}
