import React, { Component } from "react";
import childebutton from '../assets/images/childe1.png'
import childeform from '../assets/images/childe2.png'

class NotFound extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/')
    }
  render () {
    return (
      <div>
      <img draggable="false" src={ childeform } alt="childe1" className="header__image" />
      <div className="box">
        <section className="results">
            <h1>Página não encontrada...</h1>
            <img draggable="false" src={ childebutton } alt="childe2" className="image__button" />
            <button type="button" onClick={ this.buttonClick } className="button">Voltar</button>
        </section>
      </div>
      </div>
    );
  }
}
export default NotFound;
