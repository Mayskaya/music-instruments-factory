import React from 'react';

export default class UserView extends React.Component<{}, {}> {
    public render() {
        return (
            <table>
                <tr>
                    <td>ID</td>
                    <td>Логин</td>
                    <td>Пароль</td>
                    <td>Дата создания</td>
                    <td>Дата последнего входа в систему</td>
                    <td>Активен</td>
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