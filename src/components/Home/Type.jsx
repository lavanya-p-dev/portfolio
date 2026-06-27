import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Fronend Developer",
              "Technology Enthusiast",
              "Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed:70,
          }}
        />
      )
}

export default Type