import React, { Component } from "react";

class NotLogged extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/')
    }
  render () {
    return (
      <div className="box">
        <section className="results">
            <h1 >Faça o login para prosseguir</h1>
            <button type="button" onClick={ this.buttonClick } className="button">Logar</button>
        </section>
      </div>
    );
  }
}
export default NotLogged;
