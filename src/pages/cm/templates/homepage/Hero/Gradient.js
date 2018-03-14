import React from 'react';

import styles from './styles.less';

function svg() {
  return `
    <svg viewBox="0 0 852 696" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient x1="5.20683326%" y1="19.6836548%" x2="112.120514%" y2="80.7312376%" id="linearGradient-1">
                <stop stop-color="#50CC7F" offset="0%"></stop>
                <stop stop-color="#F5D100" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-588.000000, 0.000000)" fill="url(#linearGradient-1)">
                <g transform="translate(121.000000, -245.000000)">
                    <path d="M467.134409,221.502749 L467.134409,330.007357 C465.467742,350.670952 479.301075,371.502749 508.634409,392.502749 C537.967742,413.502749 807.801075,596.169416 1318.13441,940.502749 L1318.13441,213 L467.134409,221.502749 Z"></path>
                </g>
            </g>
        </g>
    </svg>
  `;
}

function Gradient() {
  return (
    <div
      className={styles.gradient}
      dangerouslySetInnerHTML={{ __html: svg() }}
    />
  );
}

export default Gradient;
