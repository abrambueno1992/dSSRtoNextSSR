import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction } from '../actions';
import Head from 'next/head'

class UsersList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUsersAction();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    head() {
        return (
            <Head>
                <title>{`${this.props.users.length} Users Loaded`} </title>
                <meta property="og:title" content="Users App" />
            </Head>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                <ul>
                    {this.props.users.map(user => {
                        return (
                            <li key={user.id}>{user.name}</li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const loadData = (store) => {
    return store.dispatch(fetchUsersAction());
}
// export default {
//     loadData,
//     component: connect(mapStateToProps, { fetchUsersAction })(UsersList)
// };
export default connect(mapStateToProps, { fetchUsersAction })(UsersList);