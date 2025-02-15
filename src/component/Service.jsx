import React from 'react';
import { Star } from 'lucide-react';
import Group3 from '../assets/Group3.png';

const Service = () => {
  return (
    <div className="min-h-screen flex items-center" style={{ backgroundColor: 'rgba(3, 152, 214, 0.25)' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter&display=swap');
      `}</style>
      
      <div className="flex flex-col md:flex-row max-w-10xl w-full gap-11">
        <div className="md:w-1/2 lg:w-2/4">
          <img 
            src={Group3}
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="md:w-1/2 lg:w-2/5 flex flex-col justify-center p-8 lg:p-12">
          <h2 
            className="text-[#2B353E] mb-4"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              fontSize: '64px',
              fontWeight: 500,
              lineHeight: '85px',
              letterSpacing: '-0.04em'
            }}
          >
            Perfect Solution for Small Businesses
          </h2>
          <p 
            className="text-black text-opacity-70 mb-6"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '23px',
              fontWeight: 400,
              lineHeight: '32px',
              letterSpacing: '0.01em'
            }}
          >
            Price plans that fit a glove.
          </p>
          <div className="flex gap-4 mb-6">
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
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#FFC107" color="#FFC107" size={20} />
              ))}
            </div>
            <p 
              className="text-black text-opacity-70"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              3.6 million completed with a 96.8% 5 star rating
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
