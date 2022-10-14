import React, { Component } from "react";

class NotFound extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/')
    }
  render () {
    return (
      <div className="box">
        <section className="results">
            <h1>Página não encontrada...</h1>
            <button type="button" onClick={ this.buttonClick } className="button">Voltar</button>
        </section>
      </div>
    );
  }
}
export default NotFound;
