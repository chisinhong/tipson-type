import * as React from 'react';

class PredictionSubmit extends React.Component {
    public state = {}
    public render() {
        return (
                <button className="btn btn-success submit-btn" data-id="${matchId}" id="${matchId}-submit-btn" type="button">
                    提交
                </button>
        );
    }
}

export default PredictionSubmit;