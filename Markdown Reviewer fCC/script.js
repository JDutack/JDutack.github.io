

class App extends React.Component {
    state = {
      text: placeholder
    }
    
    handleChange = (e) => {
      this.setState({
        text: e.target.value
      })
    }
    
    render () {
      const { text } = this.state;
      
      const markdown = marked(text, { breaks: true});
      
      return(
      <div>
        <h1 className="title text-center m-4">fCC Markdown Previewer</h1>
          <div className="row">
            <div className="col-6">
              <h5 className="sub-titles text-center">Write your Markdown here:</h5>
              <textarea id="editor" className="form-control p-2" value={text} onChange={this.handleChange} />
            </div>
            <div className="col-6">
              <h5 className="sub-titles text-center">Your result here:</h5>
              <div className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview" />
            </div>
          </div> 
  
          
      </div>
      );
    }
  }
  
  const placeholder= `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  * And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `
  
  ReactDOM.render(<App />, document.getElementById("app"));