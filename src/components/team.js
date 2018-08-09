import React from 'react'

const Team = ({ id, zhName, badge }) => {
    return (
        <button className='btn btn-secondary prediction-btn team-btn'>
            <img src={badge} alt="teamBadge" className="badgeContainer" />
            <div>
                <p>{zhName}</p>
            </div>
        </button>
    )
}

export default Team;