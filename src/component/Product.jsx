import React from "react";
import Group2 from '../assets/Group2.png';

const Product = () => {
  return (
    <section className="container mx-auto px-[40px] py-20">
      {/* Heading */}
      <div className="text-center">
      <h2
          className="mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",  // Set font to Poppins
            fontWeight: 500,  // Medium weight
            fontSize: '42px',  // Font size 42px
            lineHeight: '110px',  // Line height 110px
            letterSpacing: '-0.04em',  // Letter spacing -4%
            color: '#2B353E'  // Text color
          }}
        >Instant Conference Calls</h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",  // Set font to Inter
            fontWeight: 400,  // Regular weight
            fontSize: '23px',  // Font size 23px
            lineHeight: '32px',  // Line height 32px
            letterSpacing: '0.01em',  // Letter spacing 1%
            color: 'rgba(0, 0, 0, 0.70)',  // Color with 75% opacity
            maxWidth: '640px',  // Optional: limit the width
            margin: '0 auto'  // Center the paragraph
          }}
        >
          Lorem ipsum odor amet, consectetur adipiscing elit. Mattis dictum torquent fermentum dictum 
          himenaeos. Magnis cras tincidunt dictum lorem ullamcorper litora facilisi aliquam malesuada.
        </p>
      </div>

      {/* Image */}
      <div className="mt-16 flex justify-center">
        <img 
          src={Group2} 
          alt="Product screenshot" 
          className="rounded-lg"
          style={{ maxWidth: '100%', height: 'auto' }} // Ensures image is responsive
        />
      </div>
    </section>
  )
}

export default Product;
