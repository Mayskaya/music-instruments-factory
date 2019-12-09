import React from 'react';
import User from '../../../domain/User';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface UserEditProps {
    match: { params: { id: any; }; };
}

interface UserEditState {
    id: number;
    user: User;
}

export default class UserEdit extends React.Component<UserEditProps, UserEditState> {

    constructor(props: UserEditProps) {
        super(props);
        this.state = { id: props.match.params.id, user: new User(0, '', '', new Date(), new Date(), true) };
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

    public render() {
        let that: UserEdit = this;
        return (
            <div className="UserEdit">
                <form className="form-add">
                    <label>
                        <span>Логин</span>
                        <input type="text" value={that.state.user != null ? that.state.user.login : ''}></input>
                    </label>
                    <label>
                        <span>Пароль</span>
                        <input type="text" value={that.state.user != null ? that.state.user.password : ''}></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <button className="btn-content">Delete</button>
                <Link to="/index/User"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}