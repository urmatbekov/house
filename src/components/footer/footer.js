import React from "react";
import './footer.css'

const FooterPage = () => {
    return (
        <footer className='footer'>
            <div className='container d-flex justify-content-between'>
                <div className='th-footer footer-about'>
                    <h2>О нас</h2>
                    <ul>
                        <li>Новости</li>
                        <li>Забота о клиента</li>
                        <li>Управлающая компания</li>
                        <li>Способы оплаты</li>
                        <li>Агентская программа</li>
                        <li>Инвесторам</li>
                        <li>Baster.kg</li>
                        <li>Вакансии</li>
                    </ul>
                </div>
                <div className='th-footer footer-objects'>
                    <h2>Обьекты</h2>
                    <ul>
                        <li>Александрия</li>
                        <li>Асанбай Ордо</li>
                        <li>Италиянский квартал</li>
                        <li>Континенталь</li>
                        <li>Эл Классик</li>
                        <li>Эл Классик плюс</li>
                        <li>Коммерческая недвижимость</li>
                        <li>New York City</li>
                    </ul>
                </div>
                <div className='th-footer'>
                    <h2>Контакты</h2>
                    <p>
                        <a href="#">
                            Головной офис:<br/>
                            г.Бишкек, ул. Абдрахманова, 170/1<br/>
                            бизнес-центр<br/>
                            «Ордо», 7 этаж<br/>
                            info@elitehouse.kg<br/>
                        </a>
                    </p>
                    <p>
                        <a href="#">
                            Отдел продаж:<br/>
                            0 (555) 555-555
                        </a>
                    </p>
                    <div className='th-atom-img'>
                        <img
                            src='https://static.tildacdn.com/tild3438-3031-4134-b363-383966353561/elite-house-logo-whi.png'/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterPage;