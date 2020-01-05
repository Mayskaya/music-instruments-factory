import React from 'react';
import { RouteComponentProps } from 'react-router';
import GoodType from '../../../domain/GoodType';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface GoodTypeAddProps extends RouteComponentProps{
}

interface GoodTypeAddState {
    goodtype: GoodType;
}

export default class GoodTypeAdd extends React.Component<GoodTypeAddProps, GoodTypeAddState> {
    
    constructor(props: GoodTypeAddProps) {
        super(props);
        this.state = { 
            goodtype: new GoodType(0,'')
        };
    }
    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/GoodType');
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
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/GoodType');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/GoodType');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.goodtype));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            goodtype: value,
        });
    }
    public render() {
        return (
            <div className="GoodTypeAdd">
                <form className="form-add">
                    <label>
                        <span>Название типа</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChange(evt)}}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/GoodType"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}