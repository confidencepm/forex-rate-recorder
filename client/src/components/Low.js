import React, {Component} from 'react';

export default class Low extends Component {
    state = {
        loading: true,
        rate: null
    }
    async componentDidMount() {
        const _URL = "https://globalcurrencies.xignite.com/xGlobalCurrencies.json/GetRealTimeRate";
        const params = new URLSearchParams();
        params.append("Symbol", "EURUSD");
        params.append("_token", "BF6BCD97131144FE84FA65A70DFC2B56");

        const response = await fetch(_URL + "?" + params);
        const data = await response.json();
        this.setState({rate: data, loading: false})
        console.log(data);

    }
    render() {
        const _BASE_VALUE = 1;
        return (
            <div>
                {this.state.loading || !this.state.rate ? (
                    <div>
                        <div className="card blue lighten-5">
                            <div className="card-content">
                                <h5 className="mt-bottom">
                                    <strong>Latest Low Price</strong>
                                </h5>
                            </div>
                            <div className="card-action">
                                <div>loading...</div>
                            </div>
                        </div>
                    </div>
                ) : (
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
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>EUR</th>
                                        <th>USD</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{this.state.rate.Date}</td>
                                        <td>{this.state.rate.Time}</td>
                                        <td>{_BASE_VALUE}</td>
                                        <td>{this.state.rate.Bid}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}