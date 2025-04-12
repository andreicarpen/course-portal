import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Course Portal</Link>
        <nav className="flex gap-4">
          {/* Courses link removed */}
          {/* Add other links like Login/Signup later */}
        </nav>
      </div>
    </header>
  );
};

export default Header; 