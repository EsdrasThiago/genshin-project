import React, { Component } from "react";
import { connect } from "react-redux";
import Absence from "../components/Absence";
import Loading from "../components/Loading";
import Over from "../components/Over";
import Perfect from "../components/Perfect";
import { getUser } from "../services/localStorage";
import xingling from '../assets/images/xingling1.png'
import barbara2 from '../assets/images/barbara2.png'

class Calculator extends Component {
  state = {
    perfect: false,
    over: false,
    absence: false,
    loading: false,
    value: 0,
    user: '',
  }
  async componentDidMount() {
    const { gems, destiny, history } = this.props;
    this.setState({
      loading: true,
    })
    const user = await getUser()
    if (user === null) {
      history.push('/nao-logado')
    }
    if (gems < destiny) {
      this.setState({
        absence: true,
        over: false,
        perfect: false,
        value: destiny - Number(gems),
        loading: false,
        user,
      })
    } else if ( gems > destiny ) {
      this.setState({
        over: true,
        absence: false,
        perfect: false,
        value: Number(gems) - destiny,
        loading: false,
        user,
      })
    } else {
      this.setState({
        perfect: true,
        over: false,
        absence: false,
        loading: false,
        user,
      })
    }
  }

  render () {
    const { absence, over, perfect, value, user, loading } = this.state;
    const { history } = this.props;
    return (
      <div>
        {perfect && <img draggable="false" src={ xingling } alt="xingling" className="header__image" />}
        {absence && <img draggable="false" src={ barbara2 } alt="barbara" className="header__image__barbara" />}
        {over && <img draggable="false" src={ barbara2 } alt="barbara" className="header__image__barbara" />}
        <section className="box">
            {loading && <Loading />}
            {absence && <Absence value={ value } user={ user } history={ history }/>}
            {over && <Over value={ value } user={ user } history={ history }/>}
            {perfect && <Perfect value={ value } user={ user } history={ history }/>}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state.values;
}

export default connect(mapStateToProps)(Calculator);
