import React from "react";
import { useState, useTransition } from "react";
import { useEffect } from "react";

export default function Welcome(props) {
  //   const [showMessage, setShowMessage] = useState(true);
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShowMessage(false);
  //     }, 5000); // Message will disappear after 5 seconds

  //     return () => clearTimeout(timer);
  //   }, []);
  const welcomeStyle = {
    textAlign: "center",
    fontSize: "24px",
    color: "blue", // Set color to blue
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <div style={welcomeStyle}>
        {props.alert && (
          <div>
            {/* <div className={`message-container ${showMessage ? "show" : "hide"}`}> */}
            <h2>props.welcomeMsgContent.message</h2>
            <p>This is the landing page created and menained by Md.Rahman</p>
          </div>
        )}
      </div>
    </>
  );
}
