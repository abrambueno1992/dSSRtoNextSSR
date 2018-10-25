import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log("my auth status", auth);
    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        // <Link href="/api/auth/google" >
        <a href="/api/auth/google">Login</a>
        // </Link>
            
        )
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React SSR</Link>
                <ul className="right">
                    <li>
                        <Link href="/users">
                            <a>Users</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admins">
                            <a>Admins</a>
                        </Link>
                    </li>
                    <li>

                        {authButton}
                    </li>
                </ul>
            </div>

        </nav>
    )
};

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Header)