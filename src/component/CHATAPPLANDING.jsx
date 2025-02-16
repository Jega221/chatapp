import React from 'react';
import { MessageCircle } from 'lucide-react';
import GROUP1 from '../assets/Group1.png';

///Users/apple/Desktop/chatapp/src/assets/Group1.png

const ChatAppLanding = () => {
  return (
    <div className="min-h-screen text-white font-sans" style={{ backgroundColor: '#0398D6' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
      `}</style>

      <header className="container mx-auto px-[50px] py-6 flex items-center">
        <div className="flex items-center space-x-2">
          <MessageCircle size={24} />
          <h1 className="text-2xl font-bold">Chatapp</h1>
        </div>

        {/* Navigation + Button */}
        <div className="flex ml-auto items-center space-x-8">
          <nav>
          <ul className="flex space-x-8"> {/* Increased space between nav items */}
              <li className="text-white font-Inter text-[16px]">Product</li>
              <li className="text-white font-Inter text-[16px]">Services</li>
              <li className="text-white font-Inter text-[16px]">Contact</li>
              <li className="text-white font-Inter text-[16px]">Log In</li>
            </ul>
          </nav>
          <button
            className="text-white rounded-full font-Inter text-[16px]"
            style={{
              height: '44px', // Set height to 44px
              width: '160px',  // Set width to 160px
              backgroundColor: 'rgba(45, 208, 151, 0.39)',  // Apply background color with 39% opacity
              padding: '0 20px',  // Center the text
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Try it Free
          </button>
        </div>
      </header>
      
      <main className="container mx-auto px-[50px] py-20 flex justify-between items-center">
        <div className="max-w-xl">
        <div 
            style={{ 
              width: '61px', 
              height: '2px', 
              backgroundColor: '#fff',  // Line color
              marginBottom: '40px'  // Spacing between line and heading
            }}>

            </div>

          <h2 
            className="mb-6" 
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: '96px',
              lineHeight: '110px',
              letterSpacing: '-0.04em'
            }}
          >
            Have your best call
          </h2>
          <p className="text-[23px] font-Inter" style={{ opacity: 0.8 }}>
            Fast, easy & unlimited conference call services.
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="text-white rounded-full font-Inter text-[16px]"
              style={{
                height: '60px',  // Set height to 60px
                width: '168px',  // Set width to 168px
                backgroundColor: '#2DD097',  // Apply background color
                padding: '0 20px',  // Center the text
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Try it Free
            </button>
            <button className="border rounded-full font-Inter text-[16px]"
              style={{
                height: '60px',  // Set height to 60px
                width: '168px',  // Set width to 168px
                backgroundColor: 'transparent',  // Transparent background
                color: 'white', // Text color white
                borderColor: '#2DD097', // Set border color to #2DD097
                borderWidth: '2px',  // Border width
                padding: '0 20px',  // Center the text
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >

              Get a Demo
            </button>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={GROUP1}
            alt="headerimage"
            className="z-10 relative"
            style={{ maxWidth: '590px', height: 'auto' }}  //
          />
        </div>
      </main>
    </div>
  );
};

export default ChatAppLanding;