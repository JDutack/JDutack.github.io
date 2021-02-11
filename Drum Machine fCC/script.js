const data = [
    { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
    { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
    { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
    { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
    { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
    { id: 'tom 2', letter: 'D', src: 'https://res.cloudinary.com/dgfn49hld/video/upload/v1566825530/drum-machine/tom2_xbnx9d.wav' },
    { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
    { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
    { id: 'hi hat', letter: 'C', src: 'https://res.cloudinary.com/dgfn49hld/video/upload/v1566825532/drum-machine/closed_hh_cei55s.wav'  },
  ]
  
  
  class DrumPad extends React.Component {
    
    componentDidMount() { 
      document.addEventListener('keydown', this.handleKeyDown)
      window.focus()
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.HandleKeyDown)
    }
    
    handleKeyDown = e => {
      if(e.keyCode == this.props.letter.charCodeAt()){
        this.audio.play();
        this.audio.currentTime=0;
        this.props.handleDisplay(this.props.id);
      }
    }
    
    handleClick = () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
    
    render() {
      return(
      <div 
        className="drum-buttons" 
        id={this.props.id} 
        onClick={this.handleClick}
        >
          <p>{this.props.letter}</p>
          <audio 
            ref={ref => this.audio = ref} 
            className="clip" 
            src={this.props.src} 
            id={this.props.letter}
            ></audio>
          
          </div>
      )
    }
  }
  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        display: "with mouse or keys"
      }
    }
    
  handleDisplay = display => this.setState({ display })
    
  render(){
    return(
     <div className="container">
      <div id="drum-machine">
        <div id="display">beat: {this.state.display}</div>
         <div id="pads">
        {data.map(d => (
            <DrumPad
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay = {this.handleDisplay}
            />   
           ))}
         </div> 
        </div>
     </div>
      )
    }
  }
  
  ReactDOM.render(<App />,document.getElementById("root"))