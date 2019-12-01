import React from 'react';
import { Link } from 'react-router-dom';
import Car from "../../domain/Car";
import HttpMethod from "../../util/http/HttpMethods";

export interface CarViewState {
    carList: Array<Car>;
}

export default class CarView extends React.Component<{}, CarViewState> {

    constructor() {
        super({}, {});
        this.state = {
            carList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Car');
        xhr.onload = (evt)=>{
            let res: Array<Car> = JSON.parse(xhr.responseText);
            this.setState({carList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/CarAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Номер</th>
                        <th>Регион</th>
                        <th>Марка, модель</th>
                    </tr>
                    {
                        this.state.carList.map((el: Car) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.serial}</td>
                                <td>{el.region}</td>
                                <td>{`${el.model.mark.name} ${el.model.modelName}`}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}