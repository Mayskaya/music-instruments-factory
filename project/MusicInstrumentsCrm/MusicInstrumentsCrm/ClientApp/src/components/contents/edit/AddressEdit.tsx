import React from 'react';
import HttpMethod from "../../../util/http/HttpMethods";
import Address from '../../../domain/Address';
import { Link } from 'react-router-dom';

interface AddressEditProps {
    match: { params: { id: any; }; };
}

interface AddressEditState {
    id: number;
    address: Address;
}

export default class AddressEdit extends React.Component<AddressEditProps, AddressEditState> {

    constructor(props: AddressEditProps) {
        super(props, {});
        this.state = { id: props.match.params.id, address: new Address(0, "") };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Address/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Address = JSON.parse(xhr.responseText);
            this.setState({ address: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: AddressEdit = this;
        return (
            <div className="AddressAdd">
                <form className="form-add">
                    <label>
                        <span>Полный адрес</span>
                        <input type="text" value={ that.state.address != null ? that.state.address.fullName: '' }></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Address"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}