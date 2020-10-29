import React, {Component} from 'react';

class NewsItem3 extends Component {
    render() {
        return (
            <div className="news-container">
                <a><img className='img-news img-news3'
                        src='https://static.tildacdn.com/tild3966-6562-4631-a632-336530656666/51.jpg'/></a>
                <p className="th-item th-item3">
                    <strong>Жилой квартал New York City: американская мечта в Бишкеке!</strong>
                </p>
                <div className="t778_des">Компания Elite House рада представить вашему вниманию новый жилой квартал
                    бизнес-класса New York City, расположенный в южной части Бишкека, в районе улиц Сухэ-Батора и Аалы
                    Токомбаева.
                </div>
            </div>
        );
    }
}

export default NewsItem3;