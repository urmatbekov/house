import React, {Component} from 'react';
import "./news.css"
import NewsItem from "./news-item";

class News extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="news">Новости</h2>
                <div className="blog">
                    <NewsItem/>
                    <NewsItem/>
                    <NewsItem/>
                </div>
            </div>
        );
    }
}

export default News;