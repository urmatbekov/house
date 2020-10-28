import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import About from '../about/about';
import News from "../news/news";
import Atom from "../atom/atom";
import Map from "../map/map";
import FooterPage from "../footer/footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
                <div className='container'>
                    <Atom/>
                    <About/>
                    <News/>
                </div>
                <Map/>
                <FooterPage/>
            </div>
        );
    }
}

export default App;