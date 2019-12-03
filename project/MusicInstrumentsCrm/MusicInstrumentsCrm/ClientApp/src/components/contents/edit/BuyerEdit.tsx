import React from 'react';

interface BuyerEditProps {
    match: { params: { id: any; }; };
}

interface BuyerEditState {
    id: number;
}
export default class BuyerEdit extends React.Component<BuyerEditProps, BuyerEditState> {
    
    constructor(props: BuyerEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="BuyerAdd">
                <form className="form-add">
                    <label>
                        <span>Имя</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Эл. почта</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Телефон</span>
                        <span></span>
                    </label>
                </form>
            </div>
        );
    }
}