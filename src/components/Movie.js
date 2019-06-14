import React from "react";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 0
    };
  }

  componentDidMount() {}
  onButtonClick = () => {
    this.setState({
      nombre: this.state.nombre + 1
    });
  };
  render() {
    const { Title, Plot, Director, Poster, Year } = this.props;
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
        <img style={{ width: 300 }} src={Poster} alt="Poster" />
        <button onClick={this.onButtonClick}>Plus d'info ({nombre})</button>
      </div>
    );
  }
}

export default Movie;
