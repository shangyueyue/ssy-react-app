import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    // console.dir(this.textInput);
  }

  componentDidUpdate() {
    // console.dir(this.textInput);
  }

  onHandleClick=() => {
    // console.dir(this.textInput.value);
  }

  render() {
    return (
      <div>
        <div onClick={this.onHandleClick}>shanfggng</div>
        <input type="text" ref={(ref) => { this.textInput = ref; }} />
      </div>
    );
  }
}

export default Home;
