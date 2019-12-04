import React from 'react';

interface UserEditProps {
    match: { params: { id: any; }; };
}

interface UserEditState {
    id: number;
}

export default class UserEdit extends React.Component<UserEditProps, UserEditState> {

constructor(props: UserEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="UserEdit">
                <form className="form-add">
                    <label>
                        <span>Логин</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Пароль</span>
                        <div></div>
                    </label>
                </form>
            </div>
        );
    }
}