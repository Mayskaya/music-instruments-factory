import React from 'react';
import { Link } from 'react-router-dom';

export default class CarView extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/CarAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Номер</th>
                        <th>Регион</th>
                        <th>Марка модель</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table></div>
        );
    }
}