import React from 'react';

export default class CarAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="CarAdd">
                <form className="form-add">
                    <label>
                        <span>Номер</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Регион</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Марка, модель</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}