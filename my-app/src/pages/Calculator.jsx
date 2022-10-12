import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../services/localStorage";

class Calculator extends Component {
  state = {
    perfect: false,
    over: false,
    absence: false,
    value: 0,
  }
  async componentDidMount() {
    const { gems, destiny } = this.props;
    await getUser()
    if (gems < destiny) {
      this.setState({
        absence: true,
        value: destiny - Number(gems),
      })
    }
  }

  render () {
    return (
        <section>
            <h1>Carregando...</h1>
        </section>
    );
  }
}

function mapStateToProps(state) {
    return state.values;
}

export default connect(mapStateToProps)(Calculator);
