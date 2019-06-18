import React from "react";
import PropTypes from "prop-types";
import Poster from "./Poster";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 0
      // number: 0
    };
  }
  static propTypes = {
    Title: PropTypes.string.isRequired,
    Plot: PropTypes.string,
    Year: PropTypes.number,
    Director: PropTypes.arrayOf(PropTypes.string),
    Posters: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    Posters: [
      "https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"
    ]
  };

  componentDidMount() {}
  onButtonClick = () => {
    this.setState({
      nombre: this.state.nombre + 1
    });
  };
  render() {
    const { Title, Plot, Director, Posters, Year } = this.props;
    const { nombre } = this.state;
    return (
      <div className="movie-box">
        <h2>
          {Title} <small>({Year})</small>
        </h2>
        <p>{Plot}</p>
        <ul>
          {Director.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>
        <Poster imageList={Posters} fullscreen />
        {/* Version without Poster class 
        <div className="image">
          <button onClick={this.onArrowClick}>
            <i className="arrow right" />
          </button>
          <img style={{ width: 300 }} src={Posters[number]} alt="Poster" />
          <button onClick={this.onArrowclick}>
            <i className="arrow left" />
          </button>
        </div> */}
        <button onClick={this.onButtonClick}>Plus d'info ({nombre})</button>
      </div>
    );
  }
  // Version without Poster class
  // onArrowClick = () => {
  //   console.log(this.props.Posters.length);
  //   this.setState({
  //     number: this.state.number + 1
  //   });
  //   console.log(this.state.number);
  //   if ((this.state.number + 1) % this.props.Posters.length == 0) {
  //     this.setState({
  //       number: 0
  //     });
  //     console.log(this.state.number);
  //   }
  // };
}

export default Movie;
