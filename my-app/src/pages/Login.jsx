import React, { Component } from "react";
import Loading from '../components/Loading';
import { addUser } from "../services/localStorage";
import kazuhaHead from '../assets/images/kazuha1.png';
import kazuhaForm from '../assets/images/kazuha2.png';

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
        const minLength = 3
        const maxLength = 7
        if ( name.length > minLength && name.length <= maxLength) {
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
            <div>

            {loading 
            ? null
            : <img draggable="false" src={ kazuhaHead } alt="kazuha" className="header__image"/>}
            <section className="box">
            {loading 
            ? <Loading /> 
            : (
            <form className="login__form">
            <img draggable="false" src={ kazuhaForm } alt="kazuha2" className="forms__image" />
            <h1>Nome</h1>
            <input
            type="text" 
            name="name"
            autoComplete="off"
            value={ name }
            onChange={ this.onInputChange }
            />
            <button
            className={ isDisabled ? "invalid__button" : "button"}
            type="button"
            onClick={ this.onClick }
            disabled={ isDisabled }
            >
            Entrar
            </button>
            </form> )
            }
            </section>
            </div>
    )
    }
}

export default Login;