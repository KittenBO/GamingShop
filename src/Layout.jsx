import React from 'react';
import Header from './Elements/Global/Header';
import Footer from './Elements/Global/Footer';

export default function Layout( { children } ) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

