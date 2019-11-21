import React from 'react';

export default class GoodTypeAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="GoodTypeAdd">
                <form className="form-add">
                    <label>
                        <span>Название типа</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}