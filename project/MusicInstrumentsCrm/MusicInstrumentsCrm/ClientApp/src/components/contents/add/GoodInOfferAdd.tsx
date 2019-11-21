import React from 'react';

export default class GoodInOfferAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="GoodInOfferAdd">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Заказ</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Количество</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}