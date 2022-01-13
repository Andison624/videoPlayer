import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>//Step5, on the render method coding a video html, and give it a src={this.props.src} , make src equal to the passed-in video file. Select App.js.
        <video controls autostart autoPlay muted src={this.props.src}/>
      </div>
    );
  }
}
