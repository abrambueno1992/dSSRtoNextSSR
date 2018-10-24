import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction } from '../actions';
import Head from 'next/head'
import { bindActionCreators } from 'redux';

class UsersList extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps({ store, query, pathname }) {
            await store.dispatch(fetchUsersAction())
        
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
        if (this.props.users.length !== 0) {
            return (
                <div>
                    {this.head()}
                    <ul>
                        {/* {this.props.users.map(user => {
                            return (
                                <li key={user.id}>{user.name}</li>
                            )
                        }) */}
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
        
    }
}

const maptDispatchToProps = dispatch => {
    return {
        fetchUsersAction: bindActionCreators(fetchUsersAction, dispatch)
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
export default connect(mapStateToProps, maptDispatchToProps)(UsersList);