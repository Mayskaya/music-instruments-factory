import React from 'react';

interface GoodInOfferEditProps {
    match: { params: { id: any; }; };
}

interface GoodInOfferEditState {
    id: number;
}

export default class GoodInOfferEdit extends React.Component<GoodInOfferEditProps, GoodInOfferEditState> {

    constructor(props: GoodInOfferEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="GoodInOfferEdit">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Заказ</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Количество</span>
                        <span></span>
                    </label>
                </form>
            </div>
        );
    }
}