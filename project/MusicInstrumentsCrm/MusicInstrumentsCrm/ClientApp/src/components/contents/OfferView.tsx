import React from 'react';

export default class OfferView extends React.Component<{}, {}> {
    public render() {
        return (
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
            </table>
        );
    }
}