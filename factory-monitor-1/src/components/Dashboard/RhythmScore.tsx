import React from 'react';

const RhythmScore: React.FC<{ score: number }> = ({ score }) => {
    return (
        <div className="rhythm-score">
            <h2>Rhythm Score</h2>
            <div className="score-display">
                <h3>{score}</h3>
            </div>
            <p>This score represents the overall health and efficiency of the factory based on machine performance and worker well-being.</p>
        </div>
    );
};

export default RhythmScore;