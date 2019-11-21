import React from 'react';
import { Link } from 'react-router-dom';

export default class AddressView extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/AddressAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>

                <table className="table-content">
                    <tr >
                        <th>ID</th>
                        <th>Полный адрес</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        );
    }
}