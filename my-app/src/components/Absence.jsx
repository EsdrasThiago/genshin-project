import React, { Component } from "react";

class Absence extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/calculador')
    }
  render () {
    const { value, user } = this.props;
    return (
        <section className="results">
            <h1>{`Faltam ${value} gemas ${user}!`}</h1>
            <button type="button" onClick={ this.buttonClick } className="button">Voltar</button>
        </section>
    );
  }
}
export default Absence;
