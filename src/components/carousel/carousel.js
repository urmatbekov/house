import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import './carousel.css'

class CarouselSelf extends Component {

    state = {
        index: 0
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
                        src="https://static.tildacdn.com/tild3839-3239-4135-b762-613666323935/_13_2.jpg"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Александрия</h3>
                        <p>Дом для счастливых семей</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.tildacdn.com/tild3662-3435-4165-b465-633131343762/17.jpg"
                        alt="Second slide"
                    />


                    <Carousel.Caption>
                        <h3>Асанбай Ордо</h3>
                        <p>Там где воздух чище</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.tildacdn.com/tild3264-3064-4536-b432-366362663666/___9.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Эл Классик</h3>
                        <p>Полезные метре без переплат</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.tildacdn.com/tild6230-6263-4234-b866-616535353966/photo.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Италиянский квартал</h3>
                        <p>Будь в центре жизни</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.tildacdn.com/tild6566-3333-4631-b833-633663386263/8.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>New York City</h3>
                        <p>
                            Город твоих возможностей.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselSelf;