import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from '../Video/Video';
import { Menu } from '../Menu/Menu';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

//My web need a player to play four video, so i need a .js for control, a .js hold on video, a .js choose video.The step1 is create the App.js/Video.js/Menu.js
//Step2, create the class on App.js, Video.js, Menu.js, then import react and export the Video class and Menu class. And put in the data on App.js, const VIDEOS.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this); //Step7, because i pass the chooseVideo method into render method, i create .bind to give it a this.Then select Menu.js.
    this.state = { src: VIDEOS.fast }; //Step4, create a state, set the key src equal VIDEOS.fast, default video to fast, and give the <Video /> an attribute. Then select the Video.js.
  }
  chooseVideo(newVideo) {
  this.setState({
    src: VIDEOS[newVideo]
  }); //Step6, now App needs to pass the ability to change the src down to <Menu />, set a method coding setState to change. Then give the <Menu /> this attribute.
}
 
//Step3, on the render method coding the web fram, a title, a choose video bar, a videoplayer.  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

export default App.js;
