import React from 'react';
import AnimationComponent from './components/AnimationComponent';
import './App.css'; // if you have custom styles
import { useMediaQuery } from 'react-responsive'; 


function MyComponent() {
    const isMobileDevice = useMediaQuery({
        query: "(max-device-width: 480px)",
    });

    return (
        <div className="App" style={{backgroundColor: 'white', minHeight: '100vh'}}>
            {isMobileDevice ? (
                <img 
                src="animation6.gif"
                alt="animation"
                style={{ width: '100%', height: 'auto' }}  // This maintains aspect ratio
            />  
            ) : (
                <img src="animation5.gif"  alt="animation" /> 
            )}
        </div>
    );
}

export default MyComponent;
