import React from 'react';

interface GoodEditProps {
    match: { params: { id: any; }; };
}

interface GoodEditState {
    id: number;
}

export default class GoodEdit extends React.Component<GoodEditProps, GoodEditState> {

    constructor(props: GoodEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (<div className="GoodEdit">
            <form className="form-add">
                <label>
                    <span>Название</span>
                    <span></span>
                </label>
                <label>
                    <span>Описание</span>
                    <span></span>
                </label>
                <label>
                    <span>Тип</span>
                    <span></span>
                </label>
                <label>
                    <span>Производитель</span>
                    <span></span>
                </label>
                <label>
                    <span>Цена</span>
                    <span></span>
                </label>
            </form>
        </div>
        );
    }
}