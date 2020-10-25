import React, {Component} from 'react';
import "./about.css";

class About extends Component {
    render() {
        return (
            <section className="container my-container">
                <h2 className="th-elem ">О нас </h2>
                <div className="th-atom float-left">
                    Компания Elite House основана в 2013 году<br/>
                    и является одним из лидеров строительной <br/>
                    отрасли страны. Сегодня Elite House<br/>
                    реализует проекты жилой и коммерческой <br/>
                    недвижимости, отличающихся высоким <br/>
                    качеством, стильной архитектурой,<br/>
                    современными инновациями.
                </div>
                <div>
                    <img className="th-atom-img1 float-right" src="https://static.tildacdn.com/tild6265-6630-4638-a434-343938353661/1.jpg"/>
                </div>
            </section>
        );
    }
}

export default About;