import React, { Component } from "react";

class NotFound extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/')
    }
  render () {
    return (
        <section>
            <h1>Página não encontrada...</h1>
            <button type="button" onClick={ this.buttonClick }>Voltar</button>
        </section>
    );
  }
}
export default NotFound;
