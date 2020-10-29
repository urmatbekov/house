import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";

import Atom from "../atom/atom";

import About from "../about";
import News from "../news";
import Map from "../map";
import Footer from "../footer";



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
                <Footer/>
            </div>
        );
    }
}

export default App;