import React from 'react';
import './WorkerCard.module.css';

interface WorkerCardProps {
    name: string;
    healthScore: number;
    productivity: number;
    stressLevel: number;
}

const WorkerCard: React.FC<WorkerCardProps> = ({ name, healthScore, productivity, stressLevel }) => {
    return (
        <div className="worker-card">
            <h3>{name}</h3>
            <div className="health-bar">
                <label>Health Score:</label>
                <div className="bar" style={{ width: `${healthScore}%`, backgroundColor: healthScore > 70 ? 'green' : 'red' }} />
            </div>
            <div className="productivity">
                <label>Productivity:</label>
                <span>{productivity}</span>
            </div>
            <div className="stress-level">
                <label>Stress Level:</label>
                <span>{stressLevel}</span>
            </div>
        </div>
    );
};

export default WorkerCard;