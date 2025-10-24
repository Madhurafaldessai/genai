import React from 'react';
import MachineMetrics from './MachineMetrics';
import WorkerMetrics from './WorkerMetrics';
import RhythmScore from './RhythmScore';

const Overview: React.FC = () => {
    return (
        <div className="overview-container">
            <h2>Factory Overview</h2>
            <div className="metrics-section">
                <MachineMetrics />
                <WorkerMetrics />
            </div>
            <RhythmScore />
        </div>
    );
};

export default Overview;