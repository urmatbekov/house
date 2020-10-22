import React, {Component} from 'react';
import "./header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <ul className="nav-items">
                        <li>О нас</li>
                        <li>Объекты</li>
                        <li>Коммерция</li>
                        <li>Новости</li>
                        <li>Клиентам</li>
                        <li>Оплата</li>
                        <li>Контакты</li>
                    </ul>
                    <ul className="nav-settings">
                        <li>0 (555) 555-555</li>
                    </ul>
                    <div className="logo">
                        <img alt="Logo Elite House"
                             src="https://static.tildacdn.com/tild3638-3239-4339-a436-636666313131/elite-house-logo-whi.png"/>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;