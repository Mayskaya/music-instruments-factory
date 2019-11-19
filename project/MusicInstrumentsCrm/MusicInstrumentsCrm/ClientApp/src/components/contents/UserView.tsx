import React from 'react';

export default class UserView extends React.Component<{}, {}> {
    public render() {
        return (
            <table className="table-content">
                <tr>
                    <th>ID</th>
                    <th>Логин</th>
                    <th>Пароль</th>
                    <th>Дата создания</th>
                    <th>Дата последнего входа в систему</th>
                    <th>Активен</th>
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