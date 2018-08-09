import * as React from 'react';

class PredictionDraw extends React.Component {
    public render() {
        return (
                <button type="button" id="${matchId}-draw-btn" className={ this.getPredictionColor() } data-id="${matchId}">
                    <h3>打和</h3>
                </button>
        );
    }

    public getPredictionColor(){
        const classes = "btn btn-secondary prediction-btn draw-btn";
        return classes;
    }
}

export default PredictionDraw;