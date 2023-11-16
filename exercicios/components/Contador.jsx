import { Component } from "react";

export default class Contador extends Component {

  state = {
    numero: this.props.valorInicial ?? 0
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + 1
    })
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  }

  render() {
    return (
      <div>
        <h1>Contador (usando classe)</h1>
        <h2>{this.state.numero}</h2>
        <div>          
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
      </div>
    )
  }
}