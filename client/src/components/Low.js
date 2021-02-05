import React, {Component} from 'react';

export default class Low extends Component {
    render() {
        return (
            <div>
                <div className="card blue lighten-5">
                    <div className="card-content">
                        <h5 className="mt-bottom">
                            <strong>Latest Low Price</strong>
                        </h5>
                    </div>
                    <div className="card-action">
                        <table className='striped'>
                            <thead>
                            <tr>
                                <th>Time</th>
                                <th>EUR</th>
                                <th>USD</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>05-02-2021 12:34</td>
                                <td>1</td>
                                <td>1.1924</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}