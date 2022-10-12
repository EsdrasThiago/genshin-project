import React, { Component } from "react";

class Forms extends Component {
    state = {
        destiny: '',
        gems: '',
    }
    buttonValidation = () => {
        const { destiny, gems } = this.state;
        if ( destiny && gems > 0) {
            this.setState({
                isDisabled: false,
            })
        } else {
            this.setState({
                isDisabled: true,
            })
        }
    }

    onInputChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
          [name]: value,
        }, () => this.buttonValidation());
      };

  render () {
      const { destiny, gems } = this.state;
    return (
        <section>
            <input 
            type="number" 
            name="destiny"
            value={ destiny }
            onChange={ this.onInputChange }/>
            <input 
            type="number" 
            name="gems"
            value={ gems }
            onChange={ this.onInputChange }/>
            <button type="button">Enviar</button>
        </section>
    );
  }
}
export default Forms;