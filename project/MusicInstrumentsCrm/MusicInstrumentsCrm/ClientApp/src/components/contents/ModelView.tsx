import React from 'react';
import { Link } from 'react-router-dom';
import Model from "../../domain/Model";
import HttpMethod from "../../util/http/HttpMethods";


export interface ModelViewState {
    modelList: Array<Model>;
}

export default class ModelView extends React.Component<{}, ModelViewState> {

    constructor() {
        super({}, {});
        this.state = {
            modelList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Model');
        xhr.onload = (evt)=>{
            let res: Array<Model> = JSON.parse(xhr.responseText);
            this.setState({modelList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/ModelAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название модели</th>
                        <th>Марка</th>
                        <th>Год</th>
                    </tr>
                    {
                        this.state.modelList.map((el: Model) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.modelName}</td>
                                <td>{el.mark.name}</td>
                                <td>{el.year}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}