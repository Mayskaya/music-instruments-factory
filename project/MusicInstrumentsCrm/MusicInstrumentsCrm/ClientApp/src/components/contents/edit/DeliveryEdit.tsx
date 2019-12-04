import React from 'react';

interface DeliveryEditProps {
    match: { params: { id: any; }; };
}

interface DeliveryEditState {
    id: number;
}
export default class DeliveryEdit extends React.Component<DeliveryEditProps, DeliveryEditState> {

    constructor(props: DeliveryEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="DeliveryAdd">
                <form className="form-add">
                    <label>
                        <span>Машина</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Курьер</span>
                        <span></span>
                    </label>
                </form>
            </div>
        );
    }
}