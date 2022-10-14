import React, { Component } from "react";

class Perfect extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/calculador')
    }
  render () {
    const { user } = this.props;
    return (
        <section className="results">
            <h1>{`NÃO SOBRA NEM FALTA NADA ${user.toUpperCase()}!`}</h1>
            <button type="button" onClick={ this.buttonClick } className="button">Voltar</button>
        </section>
    );
  }
}
export default Perfect;
