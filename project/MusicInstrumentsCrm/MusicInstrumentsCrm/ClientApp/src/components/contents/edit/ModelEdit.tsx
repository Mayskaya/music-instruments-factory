import React from 'react';

interface ModelEditProps {
    match: { params: { id: any; }; };
}

interface ModelEditState {
    id: number;
}

export default class ModelEdit extends React.Component<ModelEditProps, ModelEditState> {

    constructor(props: ModelEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="ModelEdit">
                <form className="form-add">
                    <label>
                        <span>Название модели</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Марка</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Год</span>
                        <div></div>
                    </label>
                </form>
            </div>
        );
    }
}