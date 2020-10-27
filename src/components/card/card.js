import React, {Component} from 'react';
import './card.css'

class Card extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <img src="http://tofight.ru/wp-content/uploads/2017/03/mma_ufc_fx7_12.jpg" className="card-img-top" alt="foto"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
            </div>
            </div>
        );
    }
}

export default Card;