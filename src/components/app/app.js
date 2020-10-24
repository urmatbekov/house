import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import About from "../about/about";
import Atom from "../atom/atom";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <Atom/>
                <About/>
            </div>
        );
    }
}

export default App;