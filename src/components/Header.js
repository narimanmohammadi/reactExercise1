import React, { Component } from 'react'

class Header extends Component {



  render() {
    const{boxHandler} = this.props;
    return (
      <>
        <div id='headerContent' className='header-content' onClick={boxHandler}>
          <p>Digital products</p>
          <i id='chevron' className="fa-solid fa-chevron-down"></i>
        </div>
      </>

    )
  }
}

export default Header;