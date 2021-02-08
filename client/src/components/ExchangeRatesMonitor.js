import Axios from 'axios';
import React, {Component} from 'react';

const _BASE_VALUE = 1;
const _URL = "https://globalcurrencies.xignite.com/xGlobalCurrencies.json/GetBars";
        const params = new URLSearchParams();
        params.append("Symbol", "EURUSD");
        params.append("AsOfDate", "2/3/2021");
        params.append("StartTime", "09:00");
        params.append("EndTime", "09:02");
        params.append("PriceType", "Mid");
        params.append("TickPrecision", "Minute");
        params.append("TickPeriods", "1");
        params.append("_token", "F28236C40C064112BC00BCEAC3EB4B4B");

export default class ExchangeRatesMonitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rates: []
        }
    }
    async componentDidMount() {
        const response = await fetch(_URL + "?" + params);
        const data = await response.json();
        this.setState({rates: data, loading: false});
    }
    render() {

        const addRates = () => {
            Axios.post("http://localhost:3001/store", {
                date: this.state.rates.EndDate,
                time: this.state.rates.EndTime,
                high: this.state.rates.High,
                low: this.state.rates.Low,
                average: this.state.rates.Average,
              }).then(() => {
                  console.log("success");
              })
        }
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
                                <button onClick={addRates} className="waves-effect light-blue darken-4 btn-small"><i className="material-icons right">save</i>Store Exchange Rates</button>
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