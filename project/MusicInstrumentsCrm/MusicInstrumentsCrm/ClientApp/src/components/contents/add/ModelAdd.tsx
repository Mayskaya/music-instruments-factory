import React from 'react';

export default class ModelAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="ModelAdd">
                <form className="form-add">
                    <label>
                        <span>Название модели</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Марка</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Год</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}