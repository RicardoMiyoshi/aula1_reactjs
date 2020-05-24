import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Button from "./Button"
// import ComponentA from "./ComponentA"
// import ComponentB from "./ComponentB"
import "./styles.css";

// function sum(a, b) {
//   return a + b;
// }

// function primeiroJSX() {
//   return (
//     <div className="teste">
//       Ricardo Miyoshi - Introdução ao ReactJS
//       <h1>Soma: {sum(10, 20)}</h1>
//     </div>
//   )
// }

// const App = () => {

//   return (
//     <div className="App">
//       {primeiroJSX()}
//     </div>
//   );
// };

// const element = 'Digital Innovation One'
// const element2 = <h1>Olá Turma =D</h1>

// function soma(a, b) {
//   alert(a + b)
// }

// function App() {
//   return (
//     <div className="App">
//       Hello World
//       <Button onClick={() => soma(10, 20)} name="Ricardo Miyoshi" />
//       <ComponentA>
//         <ComponentB>
//           <Button onClick={() => soma(40, 20)} name="Aline Miyoshi" />
//         </ComponentB>
//       </ComponentA>
//     </div>
//   )
// };

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }



  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);