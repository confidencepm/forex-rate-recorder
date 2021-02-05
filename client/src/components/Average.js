import React, {Component} from 'react';

export default class Average extends Component {
    render() {
        return (
            <div>
                <div className="card blue lighten-5">
                    <div className="card-content">
                        <h5 className="mt-bottom">
                            <strong>Average Closing Price</strong>
                        </h5>
                    </div>
                    <div className="card-action">
                        <table className='striped'>
                            <thead>
                            <tr>
                                <th></th>
                                <th>EUR</th>
                                <th>USD</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
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