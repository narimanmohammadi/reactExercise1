import React, { Component } from 'react'
import Header from "./components/Header"
import Mainfoodbox from './components/Mainfoodbox'
import "./styles/style.scss"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flage: false
    }
  }

  boxHandler = () => {
    const { flage } = this.state;
    this.setState({ flage: !flage });

    var chevron = document.getElementById("chevron");
    var headerContent = document.getElementById("headerContent");
    var main_food_box = document.getElementById("main_food_box");
    var img = document.querySelectorAll(".img_food");

    if (flage) {
      chevron.style.rotate = "0deg";
      headerContent.style.backgroundColor = "";
      headerContent.style.color = "";
      headerContent.style.borderRadius = "5px 5px 5px 5px";
      main_food_box.style.height="100px";
      main_food_box.style.visibility="hidden";
      for (let i = 0; i < 4; i++) {
        img[i].style.height="50px"; 
      }
    } else {
      chevron.style.rotate = "180deg";
      headerContent.style.backgroundColor = "rgb(60, 153, 240)";
      headerContent.style.color = "white";
      headerContent.style.borderRadius = "5px 5px 0px 0px";
      main_food_box.style.visibility="visible";
      main_food_box.style.height="400px";
      for (let i = 0; i < 4; i++) {
        img[i].style.height="150px"; 
      }
    }

  }

  render() {
    return (
      <div className='header-box'>
        <Header boxHandler={this.boxHandler} />
        <Mainfoodbox />
      </div>
    )
  }
}

export default App;
