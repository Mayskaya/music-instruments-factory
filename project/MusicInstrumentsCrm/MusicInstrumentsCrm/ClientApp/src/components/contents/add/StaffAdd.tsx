import React from 'react';

export default class StaffAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="StaffAdd">
                <form className="form-add">
                    <label>
                        <span>Имя</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Серия паспорта</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Номер паспорта</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>ИНН</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>СНИЛС</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}