import React from 'react';
import GoodType from '../../../domain/GoodType';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface GoodTypeEditProps {
    match: { params: { id: any; }; };
}

interface GoodTypeEditState {
    id: number;
    goodtype: GoodType;
}

export default class GoodTypeEdit extends React.Component<GoodTypeEditProps, GoodTypeEditState> {

    constructor(props: GoodTypeEditProps) {
        super(props);
        this.state = { id: props.match.params.id, goodtype: new GoodType(0,'')};
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/GoodType/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: GoodType = JSON.parse(xhr.responseText);
            this.setState({ goodtype: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: GoodTypeEdit = this;
        return (
            <div className="GoodTypeEdit">
                <form className="form-add">
                    <label>
                        <span>Название типа</span>
                        <input type="text" value={ that.state.goodtype != null ? that.state.goodtype.typeName: '' }></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <button className="btn-content">Delete</button>
                <Link to="/index/GoodType"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}