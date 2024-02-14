import React, { Component } from 'react'


class Product extends Component {

    render() {
        const { img , title , price , children , hearHandler , classHeart} = this.props;
        return (
            <div className='product-content'>
                <img className='img_food' src={img} alt=''></img>
                <p id='title'>{title}</p>
                <p id='price'>{price}</p>
                <p id='description'>{children}</p>
                <i id='heart' className={classHeart} onClick={hearHandler}></i>
            </div>
        )
    }
}

export default Product;
