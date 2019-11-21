import React from 'react';

export default class MarkAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="MarkAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Страна</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}