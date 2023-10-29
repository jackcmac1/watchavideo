/* global createjs, AdobeAn */

import React, { Component } from 'react';
import AnimationComponent from './components/AnimationComponent';
import './App.css'; // if you have custom styles
import { useMediaQuery } from 'react-responsive'; 
import MyComponent from './MyComponent';

class App extends Component {
    constructor(props) {
        super(props);
        // Assuming you have a method to fetch or generate a random YouTube link
        this.state = { videoLink: '' };
    }

    componentDidMount() {
        // Here, you could call your backend API to get a random YouTube link
        // then update the state with the link.
        this.fetchRandomVideo();
    }

    fetchRandomVideo = async () => {
        try {
            // Replace with your actual API endpoint
            const response = await fetch('https://your-backend-api/random-video');
            const data = await response.json();
            this.setState({ videoLink: data.link });
        } catch (error) {
            console.error("An error occurred while fetching video link:", error);
        }
    }
    
    
    render() {
        

            return <MyComponent />;
        }
    }


export default App;
