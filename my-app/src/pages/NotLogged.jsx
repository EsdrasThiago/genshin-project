import React, { Component } from "react";
import ganyu1 from '../assets/images/ganyu1.png'
import ganyu2 from '../assets/images/ganyu2.png'

class NotLogged extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/')
    }
  render () {
    return (
      <div>
      <img draggable="false" src={ ganyu2 } alt="ganyu2" className="header__image" />
      <div className="box">
        <section className="results">
            <img draggable="false" src={ ganyu1 } alt="ganyu1" className="image__button" />
            <h1 >Faça o login para prosseguir</h1>
            <button type="button" onClick={ this.buttonClick } className="button">Logar</button>
        </section>
      </div>
      </div>
    );
  }
}
export default NotLogged;
