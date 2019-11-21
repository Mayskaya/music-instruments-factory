import React from 'react';
import MainPage from './MainPage';
import { Link } from 'react-router-dom';

export default class Auth extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="Auth">
                <form className='auth-form'>
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

                {/* <Link to='/index' component={MainPage}>Main</Link> */}
            </div>);
    }
}
