import React ,{ Component } from "react";
import D from "./D";
import './App.css'

class App extends Component{
  constructor(props){
  super(props)
  this.state = {
        Hours:'00',
        Minutes:'00',
        Sec:'00',
        ampm:null
  }
}
 componentDidMount(){
  this.loadInterval = setInterval(() => this.getTime(),1000)
}

 
 getTime(){
  let ampm =new Date().getHours() >=12 ?"PM":"AM"
  let setHour = n => n>12 ?n-12:n;
  const setZero = n =>n<10?"0"+n:n;

    this.setState({
    Hours:setZero(setHour(new Date().getHours())),
    Minutes:setZero(new Date().getMinutes()),
    Sec:setZero(new Date().getSeconds()),
     ampm:ampm
  }

  )


}
render(){
  return(
     <div className="main">
      <div className="head">
        <h1>Digital Clock</h1>
        
        <div className="clock">
          <D/>
          <div className="outer">
            <div className="container">
              <h2 className="hour">{this.state.Hours}</h2>
              <h2 className="dot">:</h2>
              <h2 className="min">{this.state.Minutes}</h2>
              <h2 className="dot">:</h2>
              <h2 className="sec">{this.state.Sec}</h2>
              <h2 className="ampm">{this.state.ampm}</h2>
              </div>

          </div>

        </div>

      </div>


     </div>

  )



}

};


export default App;