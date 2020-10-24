import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import Whitet from "../white/white";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <Whitet/>
            </div>
        );
    }
}

export default App;