import React from 'react';
import { Link } from 'react-router-dom';

export default class OfferView extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/OfferAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Код заказа</th>
                        <th>Покупатель</th>
                        <th>Продавец</th>
                        <th>Доставка</th>
                        <th>Сумма заказа</th>
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