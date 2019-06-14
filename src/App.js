import React, { Component } from "react";
import Movie from "./components/Movie";
import "./App.css";
import data from "./data/MovieData";

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

class App extends Component {
  render() {
    return (
      <div className="App">
        {data.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>
    );
  }
}
export default App;
