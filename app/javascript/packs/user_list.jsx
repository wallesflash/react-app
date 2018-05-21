import React from 'react';
import axios from 'axios';

export default class User_list extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        console.log("xxx");
        axios.get('/user/list').then(res => {
            console.log(res);
            this.setState({ users: res.data });
        });
    };

    render() {
        return (
            <ul>
                { this.state.users.map(user =>
                    <li key={user.id}>
                         { user.name + " " + user.surname}
                    </li>
                )}
            </ul>
        );
    };
}



