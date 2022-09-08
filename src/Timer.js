
import React from 'react';
//import ReactDOM from 'react-dom';
import './style.css'
var interval;

class Timer extends React.Component {

  constructor(){

    super();
    this.state = {
    
      hour:0 ,
      minute:0,
      second:0,
      isStart:false
    }
  }

 startInterval =()=>{
if (this.state.isStart === false){
this.setState({
  isStart: true
})
}

interval = setInterval(()=>{
  this.setState({
     second : this.state.second +1
  })
if (this.state.second === 60){
this.setState({
  second : 0,
  minute : this.state.minute +1
})

}

if (this.state.minute === 60){
this.setState({
  minute :0,
  hour : this.state.hour +1
})


}

} , 1000)
}



 
  
stopInterval = ()=>{
  this.setState({
    isStart: false
  })
  clearInterval(interval);
}
   
resetInterval = ()=>{
  this.stopInterval();
  this.setState({
    hour:0,
    minute:0,
    second:0,
  })
}
      
render(){
  let h = this.state.hour
  let m = this.state.minute
  let s = this.state.second
  return(
    <>
    <div class="react ">

    <div class="man left">
    <div class="ellipse" id="one"></div>
    <div class="ellipse" id="two"></div>
    <div class="ellipse" id="three"></div>
    <div class="ball"></div>
  </div>



      <h2 className="timer">
      {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
        </h2>

        <div class="man right">
    <div class="ellipse" id="one"></div>
    <div class="ellipse" id="two"></div>
    <div class="ellipse" id="three"></div>
    <div class="ball"></div>
  </div>

</div>


        <div class="box">


       <div className="container play" onClick={this.startInterval}>
  

  <div className="loader"><span></span></div>
  <div className="loader"><span></span></div>
  <div className="loader"><div class="i"></div></div>
  <div className="loader"><div class="i"></div></div>
  <i className="fa-solid fa-play"></i>  
  </div>

  <div className="container pause " onClick={this.stopInterval}>

      <div className="loader"><span></span></div>
      <div className="loader"><span></span></div>
      <div className="loader"><div class="i"></div></div>
      <div className="loader"><div class="i"></div></div>
      <i className="fa-solid fa-pause"></i>
      </div>

      <div className="container stop " onClick={this.resetInterval}>

        <div className="loader"><span></span></div>
        <div className="loader"><span></span></div>
        <div className="loader"><div class="i"></div></div>
        <div className="loader"><div class="i"></div></div>
        <i className="fa-solid fa-stop"></i>
        </div>

        <div className="container light " onClick={this.props.handleSetIsLight}>

          <div className="loader"><span></span></div>
          <div className="loader"><span></span></div>
          <div className="loader"><div class="i"></div></div>
          <div className="loader"><div class="i"></div></div>
          <i className="fa-solid fa-sun"></i>
          </div>
          
</div>

       

      </>
    )
  }
}

    export default Timer;