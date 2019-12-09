import React from 'react';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface CountryEditProps {
    match: { params: { id: any; }; };
}

interface CountryEditState {
    id: number;
    country: Country;
}

export default class CountryEdit extends React.Component<CountryEditProps, CountryEditState> {

    constructor(props: CountryEditProps) {
        super(props);
        this.state = { id: props.match.params.id, country: new Country(0, "") };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Country/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Country = JSON.parse(xhr.responseText);
            this.setState({ country: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: CountryEdit = this;
        return (
            <div className="CountryAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" value={ that.state.country != null ? that.state.country.name: '' }></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <button className="btn-content">Delete</button>
                <Link to="/index/Country"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}