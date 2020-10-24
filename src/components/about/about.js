import React, {Component} from 'react';
import './index'
import './about.css'

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className="about__descripton">
                    <p>Компания Elite House основана в 2013 году и является одним из лидеров строительной отрасли
                        страны.
                        Сегодня Elite House реализует проекты жилой и коммерческой недвижимости, отличающихся высоким
                        качеством, стильной архитектурой, современными инновациями.
                    </p>
                </div>
                <div className="about__img">
                    <img className="tn-atom__img"
                         src="https://static.tildacdn.com/tild6265-6630-4638-a434-343938353661/1.jpg"
                         imgfield="tn_img_1591860028622"/>
                </div>
            </div>
        );
    }
}

export default About;