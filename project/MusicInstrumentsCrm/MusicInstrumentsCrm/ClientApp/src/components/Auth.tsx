import React from 'react';

export default class Auth extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="Auth">
                <form action="" method="post" className='auth-form'>
                    <label className="login-field">
                        <span>Логин: </span>
                        <input type="text" name="login" />
                    </label>
                    <label className="login-field">
                        <span>Пароль: </span>
                        <input type="password" name="password" />
                    </label>
                    <button className="login-btn">Войти</button>
                </form>
            </div>);
    }
}
