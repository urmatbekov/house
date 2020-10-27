import React, {Component} from 'react';
import  './map.css'
class Map extends Component {
    render() {
        return (
            <div>
                <div className="position">

                </div>
                <div className="a">

                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97055.11567120106!2d72.7379563068642!3d40.52010190615417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac017f5a2e85%3A0xe0a3c61dc6f47b95!2z0J7RiA!5e0!3m2!1sky!2skg!4v1603807191354!5m2!1sky!2skg"
                    width="100%" height="700px" frameBorder="0" style={{
                    border: 0,
                    width: '100%',
                    height: '80vh',
                    top: '0px',
                    left: '0px',
                    marginTop:'45px'
                }} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"/>
            </div>
        );
    }
}

export default Map;