import React from 'react';

export default class OfferAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="OfferAdd">
                <form className="form-add">
                    <label>
                        <span>Код заказа</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Покупатель</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Продавец</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Доставка</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Сумма заказа</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}