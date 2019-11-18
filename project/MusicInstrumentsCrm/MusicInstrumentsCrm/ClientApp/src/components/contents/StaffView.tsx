import React from 'react';

export default class StaffView extends React.Component<{}, {}> {
    public render() {
        return (
            <table>
                <tr>
                    <td>ID</td>
                    <td>Имя</td>
                    <td>Фамилия</td>
                    <td>Отчество</td>
                    <td>Серия паспорта</td>
                    <td>Номер паспорта</td>
                    <td>ИНН</td>
                    <td>СНИЛС</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
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