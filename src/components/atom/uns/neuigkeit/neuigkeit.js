import React, {Component} from 'react';
import './neuigkeit.css'

class Neuigkeit extends Component {
    render() {
        return (
            <div className="container ht">
                <div className="card col-3">
                    <img src="https://mmabreakdown.com/wp-content/uploads/2019/09/cropped-9915926h.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                            </p>
                        </div>
                </div>


                <div className="card col-3 ">
                    <img src="http://tofight.ru/wp-content/uploads/2017/03/mma_ufc_fx7_12.jpg" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                    </div>
                </div>

                <div className="card col-3">
                    <img src="https://avatars.mds.yandex.net/get-zen_doc/1925930/pub_5e25dc44fe289100b14809f8_5e25e6b4bd639600afd9cb74/scale_1200" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                    </div>
                </div>

                <div className="card col-3 w-100">
                    <img src="https://cdni.rt.com/files/2020.03/original/5e7e2d6a85f540477d1d08df.jpg" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                    </div>
                </div>


            </div>
        );
    }
}

export default Neuigkeit;