import React from 'react';
import { Link } from 'react-router-dom';
import Mark from "../../domain/Mark";
import HttpMethod from "../../util/http/HttpMethods";


export interface MarkViewState {
    markList: Array<Mark>;
}

export default class MarkView extends React.Component<{}, MarkViewState> {

    constructor() {
        super({}, {});
        this.state = {
            markList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Mark');
        xhr.onload = (evt)=>{
            let res: Array<Mark> = JSON.parse(xhr.responseText);
            this.setState({markList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/MarkAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Страна</th>
                    </tr>
                    {
                        this.state.markList.map((el: Mark) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.country.name}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}