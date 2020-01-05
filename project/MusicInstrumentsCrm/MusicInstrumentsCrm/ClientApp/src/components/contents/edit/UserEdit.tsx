import React from 'react';
import User from '../../../domain/User';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface MatchProps {
    id: string;
}

interface UserEditProps extends RouteComponentProps<MatchProps> {
}

interface UserEditState {
    id: number;
    user: User;
}

export default class UserEdit extends React.Component<UserEditProps, UserEditState> {

    constructor(props: UserEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            user: new User(0, '', '', new Date(), new Date(), true)
        };
    }
    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/User/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: User = JSON.parse(xhr.responseText);
            this.setState({ user: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/User');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/User');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.user));
    }

    handleDeleteButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/User/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/User');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
    }

    handleInputChangeLogin(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldUser: User = this.state.user;
        oldUser.login = value;
        this.setState({
            user: oldUser,
        });
    }

    handleInputChangePassword(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldUser: User = this.state.user;
        oldUser.password = value;
        this.setState({
            user: oldUser,
        });
    }

    public render() {
        let that: UserEdit = this;
        return (
            <div className="UserEdit">
                <form className="form-add">
                    <label>
                        <span>Логин</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeLogin(evt)}} defaultValue={that.state.user != null ? that.state.user.login : ''}></input>
                    </label>
                    <label>
                        <span>Пароль</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangePassword(evt)}} defaultValue={that.state.user != null ? that.state.user.password : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/User"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}