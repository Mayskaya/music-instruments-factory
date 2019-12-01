import React from 'react';
import { Link } from 'react-router-dom';
import Country from "../../domain/Country";
import HttpMethod from "../../util/http/HttpMethods";


export interface CountryViewState {
    countryList: Array<Country>;
}

export default class CountryView extends React.Component<{}, CountryViewState> {

    constructor() {
        super({}, {});
        this.state = {
            countryList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Country');
        xhr.onload = (evt)=>{
            let res: Array<Country> = JSON.parse(xhr.responseText);
            this.setState({countryList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/CountryAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                    </tr>
                    {
                        this.state.countryList.map((el: Country) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}