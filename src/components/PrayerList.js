import React from 'react';
import groupBy from 'lodash/groupBy';

export default function PrayerList({ requests }) {
  const list = groupBy(requests, r => r.for.toLowerCase());

  return (
    <div className="grid grid-cols-1 row-gap-5 mb-5 sm:mb-32 sm:grid-cols-3 sm:col-gap-5 sm:row-gap-5">
      {Object.keys(list).map((key, idx) => (
        <div
          key={idx}
          className="bg-secondary shadow-xl p-6 rounded-lg mb-5 w-64"
        >
          <img
            className="h-16 w-16 rounded-full object-cover object-center inline"
            src={`/assets/dp/${key}.jpg`}
          />
          <div className="text-base text-center capitalize mb-1">{key}</div>
          <ul class="list-inside list-disc">
            {list[`${key}`].map(l => (
              <li className="text-xs text-left">{l.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
