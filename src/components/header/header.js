import React, {Component} from 'react';
import "./header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <div className="container">
                        <ul className="nav-items">
                            <li>
                                <a href="#">О нас</a>
                                <span className="line"/>
                            </li>
                            <li>
                                <a href="#">Объекты</a>
                                <span className="line"/>
                            </li>
                            <li>
                                <a href="#">Коммерция</a>
                                <span className="line"/>
                            </li>
                            <li>
                                <a href="#">Новости</a>
                                <span className="line"/>
                            </li>
                            <li>
                                <a href="#">Клиентам</a>
                                <span className="line"/>
                            </li>
                            <li><a href="#">Оплата</a>
                                <span className="line"/>
                            </li>
                            <li><a href="#">Контакты</a>
                                <span className="line"/>
                            </li>
                        </ul>
                        <ul className="nav-settings">
                            <li><a href="#">0 (555) 555-555</a></li>
                        </ul>
                        <div className="logo">
                            <a>
                                <img alt="Logo Elite House"
                                     src="https://static.tildacdn.com/tild3638-3239-4339-a436-636666313131/elite-house-logo-whi.png"/>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;