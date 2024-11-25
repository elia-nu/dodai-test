import React from 'react';

// Fix for default marker icon

const Map = () => {

  return (
    <>
      {/* Map component content goes here */}
   <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3940.911741026373!2d38.75167027589868!3d8.980268891079152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDodai%20ShowroomGofa%20Gabriel%2C%20150M%20FROM%20ROUNDABOUT%20TO%20MEBRATHAIL%2C%20IKA%20BLDG!5e0!3m2!1sen!2set!4v1728493418927!5m2!1sen!2set" style={{margin: "40px auto", boxShadow: "0 20px 30px 0 rgba(0, 0, 0, 0.2)", zIndex: "10", width: "100%", height: "500px", borderBottomLeftRadius: "20%", borderBottomRightRadius: "20%"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </>
  );
};

export default Map;
