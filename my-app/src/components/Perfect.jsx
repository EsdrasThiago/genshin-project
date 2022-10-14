import React, { Component } from "react";
import xingling2 from '../assets/images/xingling2.png'

class Perfect extends Component {
    buttonClick = () => {
        const { history } = this.props;
        history.push('/calculador')
    }
  render () {
    const { user } = this.props;
    return (
        <section className="results">
          <img draggable="false" src={ xingling2 } alt="xingling" className="image__button" />
            <h1>{`NÃO SOBRA NEM FALTA NADA ${user.toUpperCase()}!`}</h1>
            <button type="button" onClick={ this.buttonClick } className="button">Voltar</button>
        </section>
    );
  }
}
export default Perfect;
