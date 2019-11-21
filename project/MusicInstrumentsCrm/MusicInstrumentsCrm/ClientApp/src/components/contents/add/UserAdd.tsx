import React from 'react';

export default class UserAdd extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="UserAdd">
                <form className="form-add">
                    <label>
                        <span>Логин</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Пароль</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}