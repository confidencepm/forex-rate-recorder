import React, {Component} from 'react';
import Navbar from "./Navbar";
import High from "./High";
import Low from "./Low";
import Average from "./Average";

export default class Home extends Component {
    render() {
        return (
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l9">
                            <High/>
                            <Low/>
                            <Average/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}