import React from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <a>
        <img
          src="https://storage.googleapis.com/cdn.checkd.media/logos/cm-dark.svg"
          alt="Checkd Media"
        />
      </a>
    </Link>
  );
}

export default Logo;
