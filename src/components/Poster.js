import React from "react";

class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  render() {
    const { imageList } = this.props;
    const { number } = this.state;

    return (
      <div className="image">
        <button className="button" onClick={this.onArrowRightClick}>
          <i className="arrow right" />
        </button>
        <img className="imageList" src={imageList[number]} alt="Poster" />
        <button className="button" onClick={this.onArrowLeftClick}>
          <i className="arrow left" />
        </button>
      </div>
    );
  }
  onArrowRightClick = () => {
    this.setState({
      number: (this.state.number + 1) % this.props.imageList.length //thx Anthony
    });

    // console.log(this.state.number);
    // if ((this.state.number + 1) % this.props.imageList.length === 0) {
    //   this.setState({
    //     number: 0
    //   });
    // }
  };
  onArrowLeftClick = () => {
    this.setState({
      number:
        (this.state.number - 1 + this.props.imageList.length) %
        this.props.imageList.length //thx Anthony
    });
    console.log(this.state.number);

    // console.log(this.state.number);
    // if ((this.state.number + 1) % this.props.imageList.length === 0) {
    //   this.setState({
    //     number: 0
    //   });
    // }
  };
}

export default Poster;
