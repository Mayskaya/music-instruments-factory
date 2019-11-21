import React from 'react';
import { Link } from 'react-router-dom';

export default class CountryView extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/CountryAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table></div>
        );
    }
}