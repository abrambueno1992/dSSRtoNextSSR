import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdminsAction } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdminsAction();
    }
    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>
        })
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins.</h3>
                <ul>{this.renderAdmins()}</ul>
            </div>
        )
    }
}

const mapStateToProps = ({ admins }) => {
    return { admins }
};

// export default {
//     component: connect(mapStateToProps, { fetchAdminsAction })(
//         requireAuth(AdminsListPage)),
//     loadData: ({ dispatch }) => dispatch(fetchAdminsAction())
// }
export default connect(mapStateToProps, { fetchAdminsAction })(
    requireAuth(AdminsListPage))