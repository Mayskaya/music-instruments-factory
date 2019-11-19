import React from 'react';

export default class StoreView extends React.Component<{}, {}> {
    public render() {
        return (
            <table className="table-content">
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Адрес</th>
                    <th>Год открытия</th>
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