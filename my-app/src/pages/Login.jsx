import React, { Component } from "react";
import Loading from '../components/Loading';
import { addUser } from "../services/localStorage";

class Login extends Component {
    state = {
        name: '',
        isDisabled: true,
        loading: false,
    }

    onClick = async () => {
        const { history } = this.props;
        const { name } = this.state;
        this.setState({
            loading: true,
        })
        await addUser(name);
        this.setState({
            loading: false,
        })
        history.push('/calculador')
    }

    buttonValidation = () => {
        const { name } = this.state;
        const maxLength = 3
        if ( name.length > maxLength) {
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
        const { name, isDisabled, loading } = this.state;
        return(
            <section className="box">
            {loading 
            ? <Loading /> 
            : (
            <form className="login__form">
            <h1>Nome</h1>
            <input
            type="text" 
            name="name"
            autoComplete="off"
            value={ name }
            onChange={ this.onInputChange }
            />
            <button
            type="button"
            onClick={ this.onClick }
            disabled={ isDisabled }
            >
            Entrar
            </button>
            </form> )
            }
            </section>
    )
    }
}

export default Login;