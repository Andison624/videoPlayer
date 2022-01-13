import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); //Step9, the handleClick pass into the render method,so i creat .bind give it a this. Now the videoplayer is run!
  }
  handleClick(e) {
  var text = e.target.value;
  this.props.chooseVideo(text);
}; //Step8,create an event listener, then pass this method into the form
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
