import React, { Component } from "react";
import genshinOst from '../assets/musics/genshin-ost.mp3'
import sound from '../assets/images/sound.png';
import eula from '../assets/images/eula1.png';

class Music extends Component {
  state = {
    play: false,
    volume: 0.05,
  };

  onPlay = () => {
    const { play } = this.state;
    this.setState({
      play: !play,
    })
  };

  autoDecrement = (event) => {
    const { volume } = this.state;
    event.target.volume = volume.toFixed(2)
  };

  decrement = () => {
    const { volume } = this.state;
    if ( volume > 0) {
      this.setState({
        volume: volume - 0.05,
      }, () => this.autoDecrement)
    }
  }

  crement = () => {
    const { volume } = this.state;
    this.setState({
      volume: volume + 0.05,
    })
  }

  render() {
    const { play } = this.state;
    return (
      <section className="music__button">
        <div onClick={this.onPlay} id="play">
          <img draggable="false" src={ sound } alt="sound" id="sound-image" />
          <img draggable="false" src={ eula } alt="eula" id="eula-image"/>
          <h1>Musica {play ? "on" : "off"}</h1>
        </div>
        {/* <p id="decrement" onClick={ this.crement }>+</p>
        <p id="crement" onClick={ this.decrement }>-</p> */}
        {play && <audio loop src={genshinOst} autoPlay onPlay={this.autoDecrement} />}
      </section>
    );
  }
}
export default Music;
