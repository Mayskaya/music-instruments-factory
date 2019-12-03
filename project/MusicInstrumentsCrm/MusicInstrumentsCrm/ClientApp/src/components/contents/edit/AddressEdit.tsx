import React from 'react';
import HttpMethod from "../../../util/http/HttpMethods";

interface AddressEditProps {
    match: { params: { id: any; }; };
}

interface AddressEditState {
    id: number;
    // factoryList: Array<Factory>;
}

export default class AddressEdit extends React.Component<AddressEditProps, AddressEditState> {

    constructor(props: AddressEditProps) {
        super(props, {});
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="AddressAdd">
                <form className="form-add">
                    <label>
                        <span>Полный адрес</span>
                        <span>{}</span>
                    </label>
                </form>
            </div>
        );
    }
}