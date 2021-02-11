const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];      
const ops = ["/", "*", "-", "+"];      

class App extends React.Component {
  state = {    
    lastPressed: undefined,
    calc: '0',
    operation: undefined
  }
  
  handleClick = (e) => {
    const { calc, lastPressed } = this.state;
    const { innerText } = e.target;
   
    switch(innerText) {   
      case 'AC': {
        this.setState({
          calc: '0'
        });
        break;      
      }
      case '=': {
        const evaluated = eval(calc);  
        this.setState({
          calc: evaluated
        });
        break;
      }
      case '.': {         
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];
        
        if(!last.includes('.')) {
          this.setState({
            calc: calc + '.'
          });
        }

        break;
      }  
      default: {
        let e = undefined;
        if(ops.includes(innerText)) {
          if(ops.includes(lastPressed) && innerText !== '-') {          
            e = calc.slice(0, -3) + ` ${innerText} `;
          } else {
            e = `${calc} ${innerText} `;
          }
        } else {
          e = (calc === '0') ? innerText : (calc + innerText);                      
        }
        
        this.setState ({
            calc: e
          });
      }    
    }
    
    this.setState({
      lastPressed: innerText
    })

}
  render() {
    const { currentNumber, calc } = this.state;
    
    return (      
     <div className="outer-container"> 
      <div className="calculator">        
        <div className="display" id="display">
        {calc}
        </div>
          <div className="nums-container">
            <button className="extras ac horizontal" onClick={this.handleClick}>AC</button>
            {nums.map(num => (
              <button
                className={`numbers ${num === 0 && 'horizontal'} `} 
                key={num} 
                onClick={this.handleClick}>         
                {num}
              </button>
            ))}
            <button 
              className="extras" 
              onClick={this.handleClick}>
              .
            </button>
          </div>
          <div className="ops-container">
            {ops.map(op => (
              <button 
                className="operators" 
                key={op} 
                onClick={this.handleClick}>     
                {op}
              </button>
            ))}
            <button 
              className="operators" 
              onClick={this.handleClick}>     
              =
            </button>
          </div>
      </div>
    </div>    
     )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));