import React from 'react';

interface StaffEditProps {
    match: { params: { id: any; }; };
}

interface StaffEditState {
    id: number;
}

export default class StaffEdit extends React.Component<StaffEditProps, StaffEditState> {

    constructor(props: StaffEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="StaffEdit">
                <form className="form-add">
                    <label>
                        <span>Имя</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Серия паспорта</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Номер паспорта</span>
                        <div></div>
                    </label>
                    <label>
                        <span>ИНН</span>
                        <div></div>
                    </label>
                    <label>
                        <span>СНИЛС</span>
                        <div></div>
                    </label>
                </form>
            </div>
        );
    }
}