import React from 'react';

export default class BuyerAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="BuyerAdd">
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
                        <span>Эл. почта</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Телефон</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}