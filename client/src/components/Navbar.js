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
                                Exchange Rate Monitor
                            </Link>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}