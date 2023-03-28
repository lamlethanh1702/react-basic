import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DetailUser extends React.Component {
    state = {
        user: {},
    };
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({ user: res && res.data && res.data.data ? res.data.data : {} });
            console.log('Check res ', res);
        }
    }
    handleOnButton = () => {
        this.props.history.push('/user');
    };
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        // Để có thể bik có những attribute nào thì vô devtools console coi
        return (
            <>
                <div>hello world from detail user with id: {this.props.match.params.id}</div>;
                {isEmptyObj === false && (
                    <>
                        <div>
                            User's name: {user.first_name} - {user.last_name}
                        </div>
                        <div>User's email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleOnButton()}>
                                Back
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

export default withRouter(DetailUser);
