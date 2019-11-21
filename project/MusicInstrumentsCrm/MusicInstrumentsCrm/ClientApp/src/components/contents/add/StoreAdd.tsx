import React from 'react';

export default class StoreAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="StoreAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Год открытия</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}