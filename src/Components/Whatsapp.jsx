import React from "react";

const WhatsAppSticky = () => {
  const handleClick = () => {
    window.open("https://wa.me/919611866449", "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 1000,
        cursor: "pointer",
        height: "50px",
      }}
      onClick={handleClick}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{  width: "60px", 
            height: "60px", 
            borderRadius: "50%",
            transition: "transform 0.3s ease, box-shadow 0.3s ease", }}
      />
    </div>
  );
};

export default WhatsAppSticky;