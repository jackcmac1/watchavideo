/* global createjs, AdobeAn */
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import AnimationComponent from './components/AnimationComponent';
import './App.css'; // if you have custom styles

class App extends React.Component {
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
        return (
            <div className="App" style={{backgroundColor: 'white', minHeight: '100vh'}}>
                {/* <h1>Watch a Video</h1> */}
                {/* <AnimationComponent /> */}
                <img src="animation4.gif"  alt="animation" /> 
                {/* <button onClick={() => window.open(this.state.videoLink, '_blank')}>
                    Click to Watch a Video */}
                {/* </button> */}
            </div>
        );
    }
}

export default App;
