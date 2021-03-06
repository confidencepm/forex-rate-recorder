import React, {Component} from 'react';
import Navbar from "./Navbar";
import ExchangeRatesMonitor from "./ExchangeRatesMonitor";

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l9">
                            <ExchangeRatesMonitor/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}