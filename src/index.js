import React from "react";
import ReactDOM from "react-dom";
import Router from "./Routes";
import "./styles.css";
import "./fonts/dsc-font.woff2";
// import * as serviceWorker from "./serviceWorker";
import AOS from "aos";
import "aos/dist/aos.css";
class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      isDark: false,
      bitbox: false
    }    
  }
  componentDidMount() {
    AOS.init({
      duration: 500
    });
    let isDark = localStorage.getItem('isDark');
    if(isDark===null){
      localStorage.setItem('isDark', "false");
    } else if(isDark==="true"){
      this.setState({isDark: true});
    }
  };
  
  routeFunction = () => {
    var pageURL = window.location.href;
      var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
      if(lastURLSegment === 'bitbox') {
      console.log("bitbox")
      }
      else {
        console.log('window.location')
      }
  }

  render() {
    const htmlDOM = document.getElementsByTagName('html')[0];
    if(this.state.isDark){
      htmlDOM.style.backgroundColor="#111";
      htmlDOM.style.color="#eee";
    }
    else{
      htmlDOM.style.backgroundColor="#fff";
      htmlDOM.style.color="#111";
    }
    return (
      <div className={this.state.isDark?"darkmode":"lightmode"}>
        <Router turnDark={isDark=> this.setState({isDark})} bitbox={this.state.bitbox} isDark={this.state.isDark}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// serviceWorker.register();
