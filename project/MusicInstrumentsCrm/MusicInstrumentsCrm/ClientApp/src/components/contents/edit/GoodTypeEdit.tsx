import React from 'react';
import GoodType from '../../../domain/GoodType';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface MatchProps {
    id: string;
}

interface GoodTypeEditProps extends RouteComponentProps<MatchProps> {
}

interface GoodTypeEditState {
    id: number;
    goodtype: GoodType;
}

export default class GoodTypeEdit extends React.Component<GoodTypeEditProps, GoodTypeEditState> {

    constructor(props: GoodTypeEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            goodtype: new GoodType(0, '')
        };
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

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/GoodType');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/GoodType');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.goodtype));
    }

    handleDeleteButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/GoodType/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/GoodType');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
    }

    handleInputChangeType(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGT: GoodType = this.state.goodtype;
        oldGT.typeName = value;
        this.setState({
            goodtype: oldGT,
        });
    }

    public render() {
        let that: GoodTypeEdit = this;
        return (
            <div className="GoodTypeEdit">
                <form className="form-add">
                    <label>
                        <span>Название типа</span>
                        <input type="text" onChange={(evt) => { this.handleInputChangeType(evt) }} defaultValue={that.state.goodtype != null ? that.state.goodtype.typeName : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <button className="btn-content" onClick={(evt) => { this.handleDeleteButton(evt) }}>Delete</button>
                <Link to="/index/GoodType"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}