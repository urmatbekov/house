import React, {Component} from 'react';
import './uns.css'

class Uns extends Component {
    render() {
        return (
            <div className="">
                <br/><br/><br/><br/><br/><br/><br/>
                <div className="uns">
         <h2 className="h2">
             О нас
         </h2>
         <p className="p">
             <br/><br/>
             Компания Elite House основана в 2013 году <br/>
             и является одним из лидеров строительной <br/>
             отрасли страны. Сегодня Elite House реализует <br/>
             проекты жилой и коммерческой недвижимости,<br/>
             отличающихся высоким качеством, стильной <br/>
             архитектурой, современными инновациями.
             
         </p>
                <img className="img" src="https://static.tildacdn.com/tild6265-6630-4638-a434-343938353661/1.jpg" alt="hier ist foto"/>
            </div>
            </div>
        );
    }
}

export default Uns;