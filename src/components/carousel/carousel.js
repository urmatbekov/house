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

                        src="https://kartinkinaden.ru/uploads/posts/2020-07/1593700172_9-p-foni-s-domami-14.jpg"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img1.badfon.ru/original/3264x1942/4/a9/kanada-dom-fairfield-victoria-5290.jpg"
                        alt="Second slide"
                    />


                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://million-wallpapers.ru/wallpapers/2/0/466093634629779/roskoshnyj-dom.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"

                        src="https://i.ytimg.com/vi/e-Lp7kQWaNg/maxresdefault.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"

                        src="https://i.ytimg.com/vi/pcqeAQEzBYA/maxresdefault.jpg"
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