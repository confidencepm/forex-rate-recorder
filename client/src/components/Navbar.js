import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo">
                                Forex Rate Recorder
                            </Link>
                            <Link to="/" data-target="side-nav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </Link>
                            <ul className=" right hide-on-med-and-down">
                                <li>
                                    <Link to="/">
                                        <i className="fas fa-home"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/latest-high-price">
                                        <i className="fas fa-arrow-circle-up"></i> High
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/latest-low-price">
                                        <i className="fas fa-arrow-circle-down"></i> Low
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/average-closing-price">
                                        <i className="fas fa-pause-circle"></i> Average
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav" id="side-nav">
                    <li>
                        <Link to="/">
                            <i className="fas fa-home"></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/latest-high-price">
                            <i className="fas fa-arrow-circle-up"></i> High
                        </Link>
                    </li>
                    <li>
                        <Link to="/latest-low-price">
                            <i className="fas fa-arrow-circle-down"></i> Low
                        </Link>
                    </li>
                    <li>
                        <Link to="/average-closing-price">
                            <i className="fas fa-pause-circle"></i> Average
                        </Link>
                    </li>
                </ul>
            </>
        );
    }
}