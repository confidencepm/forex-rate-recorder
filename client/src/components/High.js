import React, {Component} from 'react';

export default class High extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rates: []
        }
    }
    async componentDidMount() {
        const _URL = "https://globalcurrencies.xignite.com/xGlobalCurrencies.json/GetBars";
        const params = new URLSearchParams();
        params.append("Symbol", "EURUSD");
        params.append("AsOfDate", "2/5/2021");
        params.append("StartTime", "09:00");
        params.append("EndTime", "09:02");
        params.append("PriceType", "Mid");
        params.append("TickPrecision", "Minute");
        params.append("TickPeriods", "1");
        params.append("_token", "BF6BCD97131144FE84FA65A70DFC2B56");

        const response = await fetch(_URL + "?" + params);
        const data = await response.json();
        this.setState({rates: data, loading: false});
        console.log(this.state.rates);
    }
    render() {
        const _BASE_VALUE = 1;
        return (
            <div>
                {this.state.loading || !this.state.rates ? (
                    <div>
                        <div className="card blue lighten-5">
                            <div className="card-content">
                                <h5 className="mt-bottom">
                                    <strong>EURUSD</strong>
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
                                    <strong>EURUSD</strong>
                                </h5>
                            </div>
                            <div className="card-action">
                                <div>
                                    <div>
                                        <table className='striped'>
                                            <thead>
                                            <tr className='tableHeaders'>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>High</th>
                                                <th>Low</th>
                                                <th>Average</th>
                                            </tr>
                                            </thead>
                                            {this.state.rates.map(rates => (
                                                <tbody key={rates.EndTime}>
                                                    <tr>
                                                        <td>{rates.EndDate}</td>
                                                        <td>{rates.EndTime}</td>
                                                        <td>{_BASE_VALUE} : {rates.High}</td>
                                                        <td>{_BASE_VALUE} : {rates.Low}</td>
                                                        <td>{_BASE_VALUE} : {rates.Average}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}