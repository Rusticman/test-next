import React from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <img
            src="https://storage.googleapis.com/cdn.checkd.media/logos/cm-light.svg"
            alt="Checkd Media"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
