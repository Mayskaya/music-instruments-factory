import React from 'react';

export default class FactoryAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="FactoryAdd">
                <form className="form-add">
                    <label>
                        <span>Адрес</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Название</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Год основания</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}