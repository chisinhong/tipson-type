import * as React from 'react';
import Team from '../premier-league-teams';
import PredictionDraw from './prediction-draw';
import PredictionSubmit from './prediction-submit';
import PredictionTeam from './prediction-team';

class Prediction extends React.Component{
    public render(){
        return(
        <div className="btn-group d-flex justify-content-center">
            <PredictionTeam id={Team[4].id} badge={Team[4].badge} zhName={Team[4].zhName} />
            <PredictionDraw />
            <PredictionTeam id={Team[17].id} badge={Team[17].badge} zhName={Team[17].zhName} />
            <PredictionSubmit />
        </div>
        );
    }
}

export default Prediction;