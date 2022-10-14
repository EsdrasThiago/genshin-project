import React, { Component } from "react";
import barbarasucess from '../assets/images/barbarasucess1.png'

class Over extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/calculador')
    }
  render () {
      const { value, user } = this.props;
    return (
        <section className="results">
            <img draggable="false" src={ barbarasucess } alt="sucess" className="image__button" />
            <h1>{`Sobram ${value} gemas ${user}!`}</h1>
            <button type="button" onClick={ this.buttonClick } className="button">Voltar</button>
        </section>
    );
  }
}
export default Over;
