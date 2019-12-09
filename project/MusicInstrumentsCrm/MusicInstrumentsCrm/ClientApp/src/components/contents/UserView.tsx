import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import User from "../../domain/User";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface UserViewProps extends RouteComponentProps {

}

export interface UserViewState {
    userList: Array<User>;
}

export default class UserView extends React.Component<UserViewProps, UserViewState> {

    constructor(props: UserViewProps) {
        super(props, {});
        this.state = {
            userList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/User');
        xhr.onload = (evt)=>{
            let res: Array<User> = JSON.parse(xhr.responseText);
            this.setState({userList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }
    handleRowClick(event: React.MouseEvent) {
        let id: string | null = null;
        if (event.currentTarget != null) {
            id = event.currentTarget.getAttribute('data-id');
        }
        if (!Strings.isNullOrEmpty(id)) {
            this.props.history.push(`/index/User/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/UserAdd"><button className="btn-content">Add</button></Link>
                
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Логин</th>
                        <th>Пароль</th>
                        <th>Дата создания</th>
                        <th>Дата последнего входа в систему</th>
                        <th>Активен</th>
                    </tr>
                    {
                        this.state.userList.map((el: User) => {
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
                                <td>{el.id}</td>
                                <td>{el.login}</td>
                                <td>{el.password}</td>
                                <td>{el.creationDate}</td>
                                <td>{el.lastLogin}</td>
                                <td>{el.active}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}