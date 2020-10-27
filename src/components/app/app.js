import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import Atom from "../atom/atom";
import Uns from "../atom/uns/uns";
import Neuigkeit from "../atom/uns/neuigkeit/neuigkeit";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <Atom/>
                <Uns/>
<Neuigkeit/>
            </div>
        );
    }
}

export default App;