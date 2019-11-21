import React from 'react';
import { Link } from 'react-router-dom';

export default class SupplyInStoreView extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/SupplyInStoreAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Товар</th>
                        <th>Магазин</th>
                        <th>Дата поставки</th>
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