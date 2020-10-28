import React, {Component} from 'react';
import './news.css';
import NewsItem from './news-item';
import NewsItem2 from './news-item-2';
import NewsItem3 from './news-item-3';




class News extends Component {
    render() {
        return (
            <div className='th-news'>
                <h2 className="news">Новости</h2>
                <div className="blog">
                    <NewsItem/>
                    <NewsItem2/>
                    <NewsItem3/>
                </div>
            </div>
        );
    }
}

export default News;