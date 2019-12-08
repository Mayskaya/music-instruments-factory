import React from 'react';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface MarkEditProps {
    match: { params: { id: any; }; };
}

interface MarkEditState {
    id: number;
    mark: Mark;
}

export default class MarkEdit extends React.Component<MarkEditProps, MarkEditState> {

    constructor(props: MarkEditProps) {
        super(props);
        this.state = { id: props.match.params.id, mark: new Mark(0, '', new Country(0, '')) };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Mark/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Mark = JSON.parse(xhr.responseText);
            this.setState({ mark: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: MarkEdit = this;
        return (
            <div className="MarkEdit">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" value={that.state.mark != null ? that.state.mark.name : ''}></input>
                    </label>
                    <label>
                        <span>Страна</span>
                        <input type="text" value={that.state.mark != null ? that.state.mark.country.name : ''}></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Mark"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}