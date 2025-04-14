import React, { useState ,useEffect } from 'react';
import "../component/Style/Myimage.css";

const MyImage = ({ image = [{ url: "" }] }) => {

  const [mainImage, setMainImage] = useState(image[0]);

  
  useEffect(() => {
    if (image.length > 0) {
      setMainImage(image[0]); 
    }
  }, [image]); 
  const handleImageClick = (curElem) => {
    setMainImage(curElem); // Set clicked image as the main image
  };

  return (
    <div className='image-section'>
    <div className='images'>
      <div className='grid grid-four-column'> 
        {
          image.map((curElem, index) => {
            return (
              <figure key={index}> 
                <img 
                  src={curElem.url} 
                  alt={curElem.filename} 
                  className='box-image--style' 
                  onClick={() =>  handleImageClick(curElem)} 
                />
              </figure>
            );
          })
        } 
      </div> 

      <div className='main-screen'> 
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>

    </div>
    </div>
  )
}

export default MyImage;


