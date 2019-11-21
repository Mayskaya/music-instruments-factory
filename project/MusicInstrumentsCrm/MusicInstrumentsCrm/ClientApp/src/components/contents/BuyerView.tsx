import React from 'react';
import { Link } from 'react-router-dom';

export default class BuyerView extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/BuyerAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>

                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>Эл. почта</th>
                        <th>Телефон</th>
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