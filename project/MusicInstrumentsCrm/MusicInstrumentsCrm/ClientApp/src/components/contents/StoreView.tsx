import React from 'react';

export default class StoreView extends React.Component<{}, {}> {
    public render() {
        return (
            <table>
                <tr>
                    <td>ID</td>
                    <td>Название</td>
                    <td>Адрес</td>
                    <td>Год открытия</td>
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