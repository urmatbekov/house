import React, {Component} from 'react';
import './../news.css'

class NewsItem extends Component {
    render() {
        return (
            <div className="news-container">
                <a><img className='img-news'
                        src='https://static.tildacdn.com/tild6661-3137-4630-a635-383063663464/7.jpg'/></a>
                <p className="th-item">
                    <strong>Тимур Файзиев готов инвестировать в бизнес-идею</strong>
                </p>
                <p className="th-item">
                    <strong>до 100 000 долларов и стать наставником!</strong>
                </p>
                <div className="t778_des">Строительная компания Elite House представляет социальный проект
                    «Бизнес
                    Өкүл Ата», который направлен на развитие предпринимательства и поддержку новых
                    бизнес-проектов в
                    Кыргызской Республике.
                </div>

            </div>
        );
    }
}

export default NewsItem;