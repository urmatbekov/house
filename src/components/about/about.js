import React, {Component} from 'react';
import "./about.css";

class About extends Component {
    render() {
        return (
            <div className="my-container d-flex justify-content-between">
                <div className="">
                    <strong className='th-elem'>О нас</strong>
                    <div className="th-atom">
                        Компания Elite House основана в 2013 году
                        отрасли страны. Сегодня Elite House
                        реализует проекты жилой и коммерческой
                        недвижимости, отличающихся высоким
                        качеством, стильной архитектурой,
                        современными инновациями.
                    </div>
                </div>
                <img className='th-atom-img1'
                     src="https://static.tildacdn.com/tild6265-6630-4638-a434-343938353661/1.jpg"/>
            </div>
        );
    }
}

export default About;