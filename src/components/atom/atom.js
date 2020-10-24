import React, {Component} from 'react';
import "./atom.css";

class Atom extends Component {

    state = {
        number1: {start: 1000, end: 1700},
        number2: {start: 7, end: 1},
        number3: {start: 1, end: 7},
        second: 2000
    }


    render() {
        return (
            <div>
                <div className='my-atom d-flex justify-content-around'>
                    <div className='th-atom'>
                        <img
                            className='th-atom-img'
                            src='https://static.tildacdn.com/tild6134-3436-4561-b238-663537343431/Frame_2.svg'/>
                        <p className="th-text d-inline">{this.state.number1.start}</p>
                        <p className="th-text1 d-inline">И БОЛЕЕ ДОЛЬЩИКОВ</p>

                    </div>
                    <div className='th-atom'>
                        <img
                            className='th-atom-img'
                            src='https://static.tildacdn.com/tild3234-3061-4935-b939-333264343438/Frame_4.svg'/>
                        <p className="th-text d-inline">{this.state.number2.start}</p>
                        <p className="th-text1 d-inline">ВЫБОР ГОДА 2019</p>
                    </div>
                    <div className='th-atom'>
                        <img
                            className='th-atom-img'
                            src='https://static.tildacdn.com/tild3661-6166-4133-b632-353033343638/Frame_3.svg'/>
                        <p className="th-text d-inline">{this.state.number3.start}</p>
                        <p className="th-text1 d-inline">ЛЕТ НА РЫНКЕ</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Atom;
