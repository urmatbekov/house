import React, {Component} from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer ">
                    <div className="container">
                        <div className="alle">
                   <div className="uns ">
                       <ul>
                       <h3>
                           О нас
                       </h3>
                   <li>
                       управляющая компания
                   </li>

                    <li>
                        Новости
                    </li>

                <li>
                    Забота о клиентах
                </li>

                    <li>
                        Способы оплаты
                    </li>

              <li>
                  Агентская программа
              </li>

                <li>
                    Инвесторам
                </li>

                   <li>
                       Итальянский квартал
                   </li>

                     <li>
                         Континенталь
                     </li>

                       </ul>
                   </div>
                            <div className="ml">
                            </div>
                    <div className="object">
                        <ul>


                        <h3>
                            Объекты
                        </h3>
                      <li>
                          Александрия
                      </li>

                       <li>
                           Асанбай
                       </li>

               <li>
                   Ордо
               </li>

                   <li>
                       Эл Классик
                   </li>

                      <li>
                          Эл Классик плюс
                      </li>

                    </ul>
                    </div>
                            <div className="ml">

                            </div>
                    <div className="kontakt">
                        <ul>
                        <h3>
                            Контакты
                        </h3>
                            <li>
                                Головной офис:
                            </li>
                      <li>
                          г.Бишкек, ул. Абдрахманова, 170/1
                      </li>
                     <li>
                         бизнес-центр «Ордо», 7 этаж
                     </li>
                        <li>
                            info@elitehouse.kgОтдел продаж:
                        </li>

                        <li>
                            0 (555) 555-555Коммерческая недвижимость
                        </li>

                        </ul>
                    </div>
                    <img className="img2" src="https://static.tildacdn.com/tild3438-3031-4134-b363-383966353561/elite-house-logo-whi.png" alt=""/>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;