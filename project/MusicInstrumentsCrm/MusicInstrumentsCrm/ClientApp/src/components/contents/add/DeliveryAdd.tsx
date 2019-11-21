import React from 'react';

export default class DeliveryAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="DeliveryAdd">
                <form className="form-add">
                    <label>
                        <span>Машина</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Курьер</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}