import React from 'react';

export default class GoodAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="GoodAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Описание</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Тип</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Производитель</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Цена</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}