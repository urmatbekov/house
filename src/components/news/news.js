import React, {Component} from 'react';
import "./news.css"

class News extends Component {
     render() {
        return (
            <div className='container d-inline-flexB B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B B                                          M BCCCC justify-content-between news-container row'>
                <h2>Новости</h2>
                <div className="card col">
                    <img className="card-img-top" src="https://static.tildacdn.com/tild6661-3137-4630-a635-383063663464/7.jpg"/>
                        <div className="card-body">
                            <p className="card-text">Тимур Файзиев готов инвестировать в бизнес-идею.</p>
                            <p className="card-text">до 100 000 долларов и стать наставником!</p>
                            <p className='card-text'>Строительная компания Elite House представляет социальный проект «Бизнес Өкүл Ата», который направлен на развитие предпринимательства и поддержку новых бизнес-проектов в Кыргызской Республике.</p>
                        </div>
                </div>
                <div className="card col">
                    <img className="card-img-top" src="https://static.tildacdn.com/tild3464-6237-4964-b064-323366613461/new.png"/>
                        <div className="card-body">
                            <p className="card-text">Elite House разыгрывает квартиру!</p>
                            <p className="card-text">Строительная компания Elite House запускает грандиозную акцию! Приобретая любую недвижимость, вы получаете один лотерейный билет, который будет участвовать в розыгрыше 1-комнатной квартиры в жилом комплексе "Эл Классик Плюс". И это еще не всё! Новый iPhone-11 ждет каждого покупателя в период акции!</p>
                        </div>
                </div>
                <div className="card col">
                    <img className="card-img-top" src="https://static.tildacdn.com/tild3966-6562-4631-a632-336530656666/51.jpg"/>
                        <div className="card-body">
                            <p className="card-text">
                                <strong>Жилой квартал New York City: американская мечта в Бишкеке!</strong>
                            </p>
                            <p className="card-text">Компания Elite House рада представить вашему вниманию новый жилой квартал бизнес-класса New York City, расположенный в южной части Бишкека, в районе улиц Сухэ-Батора и Аалы Токомбаева.</p>
                        </div>
                </div>
            </div>
        );
    }
}

export default News;