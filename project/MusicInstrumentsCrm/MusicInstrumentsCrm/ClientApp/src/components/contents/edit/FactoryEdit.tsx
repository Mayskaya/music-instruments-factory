import React from 'react';
import Factory from '../../../domain/Factory';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';
import Address from '../../../domain/Address';

interface FactoryEditProps {
    match: { params: { id: any; }; };
}

interface FactoryEditState {
    id: number;
    factory: Factory;
}

export default class FactoryEdit extends React.Component<FactoryEditProps, FactoryEditState> {

    constructor(props: FactoryEditProps) {
        super(props);
        this.state = { id: props.match.params.id, factory: new Factory(0, "", new Address(0,""), new Date())};
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Factory/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Factory = JSON.parse(xhr.responseText);
            this.setState({ factory: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: FactoryEdit = this;
        return (
            <div className="FactoryEdit">
                <form className="form-add">
                    <label>
                        <span>Адрес</span>
                        <input type="text" value={ that.state.factory != null ? that.state.factory.address.fullName: '' }></input>
                    </label>
                    <label>
                        <span>Название</span>
                        <input type="text" value={ that.state.factory != null ? that.state.factory.name: '' }></input>
                    </label>
                    <label>
                        <span>Год основания</span>
                        <input type="text" value={ that.state.factory != null ? that.state.factory.foundationDate.toString(): '' }></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Factory"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}