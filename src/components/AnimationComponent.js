/* global createjs, AdobeAn */

import React, { useEffect } from 'react';

const AnimationComponent = () => {
  // This useEffect will run once when the component is mounted, similar to componentDidMount
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://code.createjs.com/1.0.0/createjs.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "animation.js"; // Make sure this path is correct
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      // Your existing init function
      const init = () => {
        const canvas = document.getElementById("canvas");
        // ... rest of your init function code
      };

      // Your existing handleComplete function
      const handleComplete = (evt, comp) => {
        // ... rest of your handleComplete function code
      };

      // Call the init function once scripts are loaded
      init();
    };

    // Cleanup function, equivalent to componentWillUnmount
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  return (
    <div id="animation_container" style={{backgroundColor: 'rgba(255, 255, 255, 1.00)', width: '1500px', height: '1500px'}}>
      <canvas id="canvas" width="1500" height="1500" style={{position: 'absolute', display: 'block', backgroundColor: 'rgba(255, 255, 255, 1.00)'}}>

      </canvas>
      <div id="dom_overlay_container" style={{pointerEvents: 'none', overflow: 'hidden', width: '1500px', height: '1500px', position: 'absolute', left: '0px', top: '0px', display: 'block'}}>
        
      </div>
    </div>
  );
}

export default AnimationComponent;
