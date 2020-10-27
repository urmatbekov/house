import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";

import Atom from "../atom/atom";
import About from "../about";
import News from "../news";



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