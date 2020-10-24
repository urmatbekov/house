import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import White from "../white/white";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <White/>
            </div>
        );
    }
}

export default App;