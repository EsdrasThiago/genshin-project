import React, { Component } from "react";

class NotLogged extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/')
    }
  render () {
    return (
        <section>
            <h1>Faça o login para prosseguir</h1>
            <button type="button" onClick={ this.buttonClick }>Logar</button>
        </section>
    );
  }
}
export default NotLogged;
