import React from 'react';

export default class StaffView extends React.Component<{}, {}> {
    public render() {
        return (
            <table>
                <tr>
                    <td>id</td>
                    <td>first_name</td>
                    <td>last_name</td>
                    <td>patronymic</td>
                    <td>passport_serial</td>
                    <td>passport_number</td>
                    <td>inn</td>
                    <td>snils</td>
                    <td>crm_user</td>
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