import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'

import offlineImg from './offline.svg'
import documentImg from './document.svg'
import guiImg from './gui.svg'

const features = [
  {
    image: offlineImg,
    title: 'Offline',
    description: 'HyperStage is a Mac app. You don\'t need internet connection to use it. '
  },
  {
    image: documentImg,
    title: 'Document based',
    description: 'Save all the mock responses as a .hypers file. You can then commit the file to your project\'s repository so that your team mates can use it too.'
  },
  {
    image: guiImg,
    title: 'GUI',
    description: 'No need to memorize obscure CLI arguments. Simply click Add and Run Server.'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>HyperStage</h1>
          <h2>Mocking Server for Mac / OSX</h2>
          <ReactPlayer controls={true} width="100%" height="30vh" className="Video" url='https://www.youtube.com/watch?v=VXIv4ZH882U-U' playing={true} loop={true} />
        </div>
        
        <h2>Features</h2>
        <div className="Features">
          {features.map(feat => <div className="Feature" key={feat.title}><img src={feat.image} alt={feat.title} /> <h3>{feat.title}</h3>{feat.description}</div>)}
        </div>
      </div>
    );
  }
}

export default App;
