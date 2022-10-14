import React, { Component } from "react";
import mona1 from '../assets/images/mona1.png'
import mona2 from '../assets/images/mona2.png'

class Loading extends Component {
  render () {
    return (
        <section>
            <img draggable="false" src={ mona1 } alt="mona" className="image__loading" />
            <img draggable="false" src={ mona2 } alt="mona" className="header__image__box" />
            <h1 id="loading">Carregando...</h1>
        </section>
    );
  }
}
export default Loading;
