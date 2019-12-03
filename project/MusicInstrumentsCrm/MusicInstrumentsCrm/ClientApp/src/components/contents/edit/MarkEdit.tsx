import React from 'react';

interface MarkEditProps {
    match: { params: { id: any; }; };
}

interface MarkEditState {
    id: number;
}

export default class MarkEdit extends React.Component<MarkEditProps, MarkEditState> {

    constructor(props: MarkEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }
    public render() {
        return (
            <div className="MarkEdit">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Страна</span>
                        <span></span>
                    </label>
                </form>
            </div>
        );
    }
}