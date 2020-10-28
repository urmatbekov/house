import React, {Component} from 'react';

class NewsItem2 extends Component {
    render() {
        return (
            <div className="news-container">
                <a><img className='img-news'
                        src='https://static.tildacdn.com/tild3464-6237-4964-b064-323366613461/new.png'/></a>
                <p className="th-item">
                    <strong>Elite House разыгрывает квартиру!</strong>
                </p>
                <div className="t778_des">Строительная компания Elite House запускает грандиозную акцию! Приобретая
                    любую недвижимость, вы получаете один лотерейный билет, который будет участвовать в розыгрыше
                    1-комнатной квартиры в жилом комплексе "Эл Классик Плюс". И это еще не всё! Новый iPhone-11 ждет
                    каждого покупателя в период акции!
                </div>
            </div>
        );
    }
}

export default NewsItem2;