import React, { Component } from "react";
import { saveValues } from "../redux/actions";
import { connect } from 'react-redux';
import { getUser } from "../services/localStorage";
import Loading from "../components/Loading";

class Forms extends Component {
    state = {
        destiny: '',
        gems: '',
        isDisabled: true,
        loading: false,
    }

    async componentDidMount() {
        const { history } = this.props;
        this.setState({
            loading: true,
        })
        const user = await getUser()
        if (user === null) {
            history.push('/nao-logado')
        }
        this.setState({
            loading: false,
        })
    }
    
    buttonValidation = () => {
        const { destiny } = this.state;
        if ( destiny > 0 ) {
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

    onClick = () => {
        const { destiny, gems } = this.state;
        const { dispatch, history } = this.props;
        const destinyConvert = destiny * 160
        if ( gems === '') {
            const obj = {destinyConvert, gems: 0}
            return obj;
        }
        const obj = {destinyConvert, gems}
        dispatch(saveValues(obj))
        history.push('/resultado')
    }

  render () {
      const { destiny, gems, isDisabled, loading } = this.state;
    return (
        <section className="box">
            {loading 
            ? <Loading /> 
            : ( <section className="calculator__form">

            <p>Quantos desejos você quer?</p>
            <input 
            type="number" 
            name="destiny"
            value={ destiny }
            onChange={ this.onInputChange }/>
            <p>Quantas gemas você tem?</p>
            <input 
            type="number" 
            name="gems"
            value={ gems }
            onChange={ this.onInputChange }/>
            <button 
            type="button"
            className={ isDisabled ? "invalid__button" : "button"}
            disabled={ isDisabled }
            onClick={ this.onClick }
            >
                Enviar
            </button>
    </section>
    )}
        </section>
        );
    }
}
export default connect()(Forms);