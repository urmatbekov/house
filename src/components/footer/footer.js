import React, {Component} from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <ul className='footer-about'>
                    <li>О нас</li>
                    <li>Новости</li>
                    <li>забота о клиентах</li>
                    <li>Управляющая компания</li>
                    <li>Способы оплаты</li>
                    <li>Агентская программа</li>
                    <li>Инвесторам</li>
                    <li>Barter.kg</li>
                    <li>Ваканси</li>
                </ul>
                <ul className='footer-object'>
                    <li>Обьекты</li>
                    <li>Александрия</li>
                    <li>Асанбай Ордо</li>
                    <li>Итальянский квартал</li>
                    <li>Континенталь</li>
                    <li>Эл классик</li>
                    <li>Эл классик плюс</li>
                    <li>Коммерческая недвижимость</li>
                    <li>New York City</li>
                </ul>
                <ul className='footer-contact'>
                    <li>Контакты</li>
                    <li>Головной офис</li>
                    <li>Г.Бишкек,ул.Абдрахманова,170/1</li>
                    <li>бизнес-центр "Ордо", 7 этаж</li>
                    <li>info@elitehouse.kg</li>
                    <li className='padding'>Отдел продаж</li>
                    <li>0(555) 555-555</li>
                </ul>
                <div className="img-elite">
                    <img className="tn-atom__img"
                         src="https://static.tildacdn.com/tild3438-3031-4134-b363-383966353561/elite-house-logo-whi.png"
                         imgfield="tn_img_1589353767624"/>
                </div>
                <div className="phone-call">
                    <img src="https://cdn1.iconfinder.com/data/icons/jetflat-devices-vol-5/90/0094_003_call_volume_phone_mobile_connect_ring_ringtone_ringing-256.png" alt=""/>
                </div>
            </div>
        );
    }
}

export default Footer;