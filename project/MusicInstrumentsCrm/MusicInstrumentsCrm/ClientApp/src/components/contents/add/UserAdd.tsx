import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import User from '../../../domain/User';
import HttpMethod from '../../../util/http/HttpMethods';

export interface UserAddProps extends RouteComponentProps {

}

export interface UserAddState {
    user: User;
}

export default class UserAdd extends React.Component<UserAddProps, UserAddState> {
    
    constructor(props: UserAddProps) {
        super(props, {});
        this.state = {
            user: new User(0, '', '', new Date(), new Date(), true)
        };
    }
    
    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/User');
        xhr.onload = (evt)=>{
            let res: User = JSON.parse(xhr.responseText);
            this.setState({user: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/User');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/User');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.user));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            user: value,
        });
    }
    
    public render() {
        return (
            <div className="UserAdd">
                <form className="form-add">
                    <label>
                        <span>Логин</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChange(evt)}}></input>
                    </label>
                    <label>
                        <span>Пароль</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChange(evt)}}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/User"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}