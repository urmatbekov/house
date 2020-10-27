import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import About from '../about/about';
import News from "../news/news";
import Atom from "../atom/atom";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <Atom/>
                <About/>
                <News/>
            </div>
        );
    }
}

export default App;