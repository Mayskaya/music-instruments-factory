import React from 'react';
import { Link } from 'react-router-dom';

export default class UserView extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/UserAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Логин</th>
                        <th>Пароль</th>
                        <th>Дата создания</th>
                        <th>Дата последнего входа в систему</th>
                        <th>Активен</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table></div>
        );
    }
}