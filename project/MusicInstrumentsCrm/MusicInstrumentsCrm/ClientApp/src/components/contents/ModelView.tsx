import React from 'react';

export default class ModelView extends React.Component<{}, {}> {
    public render() {
        return (
            <table>
                <tr>
                    <td>ID</td>
                    <td>Название модели</td>
                    <td>Марка</td>
                    <td>Год</td>
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