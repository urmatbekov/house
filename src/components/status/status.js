import React, {Component} from 'react';
import './status.css'

class Status extends Component {
    render() {
        return (
            <div>
                <div className='status'>
                    <div>
                        <div className='object'>
                            <img className="tn-atom__img"
                                 src="https://static.tildacdn.com/tild6134-3436-4561-b238-663537343431/Frame_2.svg"
                                 imgfield="tn_img_1589867199902"/>
                            <h2>1700</h2>
                            <p>И БОЛЕЕ ДОЛЬЩИКОВ</p>
                        </div>
                    </div>

                    <div>
                        <div className='object'>
                            <img className="tn-atom__img"
                                 src="https://static.tildacdn.com/tild3234-3061-4935-b939-333264343438/Frame_4.svg"
                                 imgfield="tn_img_1589867403884"/>
                            <h2>№1</h2>
                            <p>Выбор года 2019</p>
                        </div>
                    </div>

                    <div>
                        <div className='object'>
                            <img className="tn-atom__img"
                                 src="https://static.tildacdn.com/tild3661-6166-4133-b632-353033343638/Frame_3.svg"
                                 imgfield="tn_img_1589867343545"/>
                            <h2>7</h2>
                            <p>ЛЕТ НА РЫНКЕ</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Status;