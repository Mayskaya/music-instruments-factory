import React from 'react';

export default class AddressAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="AddressAdd">
                <form className="form-add">
                    <label>
                        <span>Полный адрес</span>
                        <input type="text"></input>
                    </label>
                </form>
            </div>
        );
    }
}