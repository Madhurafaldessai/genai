import React from 'react';
import WorkerCard from './WorkerCard';
import './WorkerSlide.module.css';

const WorkerSlide = ({ workersData }) => {
    return (
        <div className="worker-slide">
            <h2>Worker Metrics</h2>
            <div className="worker-cards">
                {workersData.map((worker, index) => (
                    <WorkerCard key={index} worker={worker} />
                ))}
            </div>
        </div>
    );
};

export default WorkerSlide;