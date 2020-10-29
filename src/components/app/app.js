import React, {Component} from 'react';
import Header from "../header";
import CarouselSelf from "../carousel";
import About from '../about/about';
import News from "../news/news";
import Atom from "../atom/atom";
<<<<<<< HEAD
import About from "../about";
import News from "../news";
import Map from "../map.js/map";

=======
import Map from "../map/map";
import FooterPage from "../footer/footer";
>>>>>>> 66562f8371a49d8c13bb50326c9006636a1d4cb0

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CarouselSelf/>
<<<<<<< HEAD
                <Atom/>
                <About/>
                <News/>
                <Map/>

=======
                <div className='container'>
                    <Atom/>
                    <About/>
                    <News/>
                </div>
                <Map/>
                <FooterPage/>
>>>>>>> 66562f8371a49d8c13bb50326c9006636a1d4cb0
            </div>
        );
    }
}

export default App;