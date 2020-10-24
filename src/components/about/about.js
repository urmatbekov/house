import React, {Component} from 'react';
import './about.css'

class About extends Component {
    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="ml container">
                <div className="uns">
                    О нас
                </div>
                <p className="p d-block">
                    <br/><br/>
                    Компания Elite House основана в 2013 году
                    <br/>и является одним из лидеров строительной отрасли страны.
                    <br/>Сегодня Elite House реализует проекты жилой и
                    <br/>коммерческой недвижимости, отличающихся высоким качеством,
                    <br/>стильной архитектурой, современными инновациями.
                </p>
                <img className="img" src="https://static.tildacdn.com/tild6265-6630-4638-a434-343938353661/1.jpg" alt="foto"/>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default About;