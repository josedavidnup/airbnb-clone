import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <nav>
        <menu>
          <Link href='/' legacyBehavior>
            Home
          </Link>
          <Link href='/about' legacyBehavior>
            About
          </Link>
        </menu>
      </nav>
    </div>
  );
};

export default NavBar;
