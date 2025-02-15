import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-[50px] flex justify-between">
        {/* Logo and Slogan */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: '#0398D6' }}>
              Chatapp
            </h1>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>
            Chat you will ever need.
          </p>
        </div>

        {/* Help Section */}
        <div className="flex-1">
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '18px', color: '#2B353E' }}>
            Help
          </h3>
          <ul className="space-y-2">
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>Support</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>Knowledge-base</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>Tutorial</li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="flex-1">
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '18px', color: '#2B353E' }}>
            Features
          </h3>
          <ul className="space-y-2">
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>Screen Sharing</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>iOS & Android App</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>File Sharing</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="flex-1">
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '18px', color: '#2B353E' }}>
            Company
          </h3>
          <ul className="space-y-2">
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>About Us</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>Careers</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>Contact Us</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>User Management</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-0.7">
          <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: '18px', color: '#2B353E' }}>
            Contact
          </h3>
          <ul className="space-y-2">
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>info@chatapp.com</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>5-900-455-6</li>
            <li style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(0, 0, 0, 0.70)' }}>
              3500 Palo Alto
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-[50px] mt-8">
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(0, 0, 0, 0.75)' }}>
          © Copyright Chatapp Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;