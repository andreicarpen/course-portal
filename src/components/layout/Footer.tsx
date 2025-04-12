import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Course Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 