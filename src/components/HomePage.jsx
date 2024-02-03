import React, { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";

const ConfettiComponent = () => {
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    // Set confettiActive to true after some time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setConfettiActive(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const confettiConfig = {
    angle: 360, // Set the angle to 180 for vertical falling confetti
    spread: 360,
    startVelocity: 40,
    elementCount: 10000,
    dragFriction: 0.1,
    duration: 6000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div>
      <Confetti active={confettiActive} config={confettiConfig} />
      <div className="flex flex-col justify-center items-end m-20 text-center">
        <h1>You Have Logged In</h1>
        <h1 className="text-4xl font-bold">Welcome</h1>
      </div>
    </div>
  );
};

export default ConfettiComponent;
