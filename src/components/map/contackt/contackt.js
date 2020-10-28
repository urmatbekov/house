import React, {Component} from 'react';
import "./contact.css"

class Contackt extends Component {
    render() {
        return (
            <div>
                <div className='container contact'>
                    <h2 className='text-contact'>Контакты</h2>
                    <p><strong>0 (555) 555-555</strong></p>
                    <p>Головной офис - г.Бишкек, ул. Абдрахманова / ул. Токтогула, 170/ 1, бизнес-центр «ОРДО»,
                        7-этаж.</p>
                    <span>
                        <a href='https://www.facebook.com/elitehousekg/'>
                        <img className='inst-logo'
                             src='https://cdn.iconscout.com/icon/free/png-256/facebook-social-media-fb-logo-square-44659.png'/>
                        </a>
                    </span>
                    <span>
                        <a href='https://www.instagram.com/elite_house_kg/'>
                        <img className="inst-logo"
                             src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/480px-Instagram-Icon.png'/>
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Contackt;