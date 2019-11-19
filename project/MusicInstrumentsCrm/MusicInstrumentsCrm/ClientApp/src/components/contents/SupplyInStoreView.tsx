import React from 'react';

export default class SupplyInStoreView extends React.Component<{}, {}> {
    public render() {
        return (
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
            </table>
        );
    }
}