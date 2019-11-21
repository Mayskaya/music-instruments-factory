import React from 'react';

export default class SupplyInStoreAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="SupplyInStoreAdd">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Магазин</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Дата поставки</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}