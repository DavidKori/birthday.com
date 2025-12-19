import React from 'react';
import './mainBackground.css';

const MainBackground = ({flow,src,type, elements}) => {
  return (
    <div className='fullPage' style={{flexDirection:{flow}}}>
        <video 
        className='background'
        autoPlay
         muted 
         loop 
         playsInline 
         >
            <source src={src} type={type} />
            Your browser doesn't support these type of videos
        </video>
        <div className="overLay"></div>
    <section>
        {elements}
    </section>
      
    </div>
  )
}

export default MainBackground
