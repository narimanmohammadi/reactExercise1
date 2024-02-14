import React, { Component } from 'react'
import Product from './Product';
import Pic1 from "../images/deals-02-369x294.jpg";
import Pic2 from "../images/deals-03-369x294.jpg";
import Pic3 from "../images/gallery-cobbles-2-390x300.jpg";
import Pic4 from "../images/gallery-cobbles-3-390x300.jpg";

class Mainfoodbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classHeart: "fa-regular fa-heart",
            flage: true
        }
    }

    heartHandler = (event) => {
        var { flage } = this.state;
        this.setState({ flage: !flage });

        if (flage) {
            event.target.className = "fa-solid fa-heart";
            event.target.style.color = "red";
        }else{
            event.target.className = "fa-regular fa-heart";
            event.target.style.color = "black";
        }
        flage = !flage;

    }
    render() {
        return (
            <div id='main_food_box' className='main_food_box'>
                <Product img={Pic1}  title="Product_1" price="230$" hearHandler={this.heartHandler} classHeart={this.state.classHeart}>Esse fugiat nihil corporis vel eum et rerum non et.</Product>
                <Product img={Pic2}  title="Product_2" price="410$" hearHandler={this.heartHandler} classHeart={this.state.classHeart}>Esse et reprehenderit aut.</Product>
                <Product img={Pic3}  title="Product_3" price="32$" hearHandler={this.heartHandler} classHeart={this.state.classHeart}>Modi non atque sit.</Product>
                <Product img={Pic4}  title="Product_4" price="75$" hearHandler={this.heartHandler} classHeart={this.state.classHeart}>Recusandae iusto pariatur recusandae.</Product>
            </div>
        )
    }
}

export default Mainfoodbox;