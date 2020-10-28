import React from "react";
import './footer.css'

const FooterPage = () => {
    return (
        <footer className='footer'>
            <div className='container d-flex justify-content-between'>
                <div className='th-footer'>
                    <h2>О нас</h2>
                    <p>Новости</p>
                    <p>Забота о клиента</p>
                    <p>Управлающая компания</p>
                    <p>Способы оплаты</p>
                    <p>Агентская программа</p>
                    <p>Инвесторам</p>
                    <p>Baster.kg</p>
                    <p>Вакансии</p>
                </div>
                <div className='th-footer'>
                    <h2>Обьекты</h2>
                    <p>Александрия</p>
                    <p>Асанбай Ордо</p>
                    <p>Италиянский квартал</p>
                    <p>Континенталь</p>
                    <p>Эл Классик</p>
                    <p>Эл Классик плюс</p>
                    <p>Коммерческая недвижимость</p>
                    <p>New York City</p>
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