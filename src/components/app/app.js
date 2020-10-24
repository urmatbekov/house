import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import Status from "../status/status";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <Status/>
            </div>
        );
    }
}

export default App;