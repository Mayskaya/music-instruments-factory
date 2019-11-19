import React from 'react';

export default class MarkView extends React.Component<{}, {}> {
    public render() {
        return (
            <table className="table-content">
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Страна</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        );
    }
}