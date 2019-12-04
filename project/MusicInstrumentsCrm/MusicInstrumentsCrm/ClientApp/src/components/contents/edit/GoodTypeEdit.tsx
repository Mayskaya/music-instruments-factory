import React from 'react';

interface GoodTypeEditProps {
    match: { params: { id: any; }; };
}

interface GoodTypeEditState {
    id: number;
}

export default class GoodTypeEdit extends React.Component<GoodTypeEditProps, GoodTypeEditState> {

    constructor(props: GoodTypeEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="GoodTypeEdit">
                <form className="form-add">
                    <label>
                        <span>Название типа</span>
                        <span></span>
                    </label>
                </form>
            </div>
        );
    }
}