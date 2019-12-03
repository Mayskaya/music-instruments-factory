import React from 'react';

interface SupplyInStoreEditProps {
    match: { params: { id: any; }; };
}

interface SupplyInStoreEditState {
    id: number;
}

export default class SupplyInStoreEdit extends React.Component<SupplyInStoreEditProps, SupplyInStoreEditState> {

constructor(props: SupplyInStoreEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }
    public render() {
        return (
            <div className="SupplyInStoreEdit">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Магазин</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Дата поставки</span>
                        <div></div>
                    </label>
                </form>
            </div>
        );
    }
}