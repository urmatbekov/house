import React, {Component} from 'react';
import './white.css'

class Whitet extends Component {
    render() {
        return (
            <div>
                <div className="white">
                    <div className="obst ">
                        <img className="margin-left"
                             src="https://static.tildacdn.com/tild6134-3436-4561-b238-663537343431/Frame_2.svg"
                             alt="foto"/>
                        <div className="number ml-3">1700</div>
                        <p className="p">И БОЛЕЕ ДОЛЬЩИКОВ</p>
                    </div>

                    <div className="obst">
                        <img className="margin-left"
                             src="https://static.tildacdn.com/tild3234-3061-4935-b939-333264343438/Frame_4.svg"
                             alt="foto2"/>
                        <div className="number ml-3">№1</div>
                        <p className="p"> ВЫБОР ГОДА 2019</p>
                    </div>

                    <div className="obst">
                        <img className="margin-left"
                             src="https://static.tildacdn.com/tild3661-6166-4133-b632-353033343638/Frame_3.svg"
                             alt="foto3"/>
                        <div className="number ml-3">7</div>
                        <p className="p">ЛЕТ НовостиА РЫНКЕ</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Whitet;