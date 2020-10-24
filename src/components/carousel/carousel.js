import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import './carousel.css'

class CarouselSelf extends Component {

    state = {
        index:0
    }

    handleSelect = (index, e) => {
        this.setState({index});
    };

    render() {
        return (
            <Carousel className="shadow-self" activeIndex={this.state.index} onSelect={this.handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/35/d3/d4/35d3d4a48698437b0bbbeb99f34eced3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://w-dog.ru/wallpapers/2/13/329625907856302/dom-cg-zhivopis.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img2.goodfon.ru/wallpaper/nbig/b/1d/dom-osobnyak-gazon-trava-kusty-7012.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselSelf;