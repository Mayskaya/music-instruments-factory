import React from 'react';

interface OfferEditProps {
    match: { params: { id: any; }; };
}

interface OfferEditState {
    id: number;
}

export default class OfferEdit extends React.Component<OfferEditProps, OfferEditState> {

    constructor(props: OfferEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="OfferEdit">
                <form className="form-add">
                    <label>
                        <span>Код заказа</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Покупатель</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Продавец</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Доставка</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Сумма заказа</span>
                        <div></div>
                    </label>
                </form>
            </div>
        );
    }
}