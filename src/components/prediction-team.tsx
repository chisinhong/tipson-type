import * as React from 'react';

interface IPredictionTeamProps {
    id: number;
    badge: string;
    zhName: string
};

class PredictionTeam extends React.Component<IPredictionTeamProps> {
    public render() {
        return (
            <button className={this.getPredictionColor()} data-id="${matchId}">
                <img src={this.props.badge} alt="teamBadge" className="badgeContainer" />
                <div>
                    <p>{this.props.zhName}</p>
                </div>
            </button>
        );
    }

    public getPredictionColor() {
        const classes = "btn btn-secondary prediction-btn team-btn";
        return classes;
    }
}

export default PredictionTeam;