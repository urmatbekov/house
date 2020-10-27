import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import About from '../about/about';
import News from "../news/news";
import Atom from "../atom/atom";
import Map from "../map/map";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <Atom/>
                <About/>
                <News/>
                <Map/>
            </div>
        );
    }
}

export default App;