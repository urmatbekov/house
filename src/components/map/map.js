import React, {Component} from 'react';
import './map.css';

class Map extends Component {
    render() {
        return (
            <div className='map-container'>
                <div className='contact'>
                    <h2>Контакты</h2>
                    <h4>0 (555) 555-555</h4>
                    <p>Головной офис - г.Бишкек, ул. Абдрахманова / ул. Токтогула, 170/ 1, бизнес-центр «ОРДО»,
                        7-этаж.</p>
                    <a target='_blank' href='https://www.facebook.com/elitehousekg/'>
                        <img
                            src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-256.png"
                            alt=""/>
                    </a>
                    <a target='_blank' href='https://www.instagram.com/elite_house_kg/'>
                    <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png" alt=""/>
                    </a>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97055.11567120106!2d72.7379563068642!3d40.52010190615417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac017f5a2e85%3A0xe0a3c61dc6f47b95!2z0J7RiA!5e0!3m2!1sky!2skg!4v1603807191354!5m2!1sky!2skg"
                    width="100%" height="" frameBorder="0" style={{
                    border: 0,
                    width: '100%',
                    height: '80vh',
                    top: '0px',
                    left: '0px',
                }} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"/>
            </div>
        );
    }
}

export default Map;