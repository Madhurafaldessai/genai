import React from 'react';
import { useWorkerMetrics } from '../../services/workerService';
import HealthBar from '../Charts/HealthBar';

const WorkerMetrics: React.FC = () => {
    const { workers } = useWorkerMetrics();

    return (
        <div className="worker-metrics">
            <h2>Worker Well-Being Metrics</h2>
            {workers.map(worker => (
                <div key={worker.id} className="worker-metric">
                    <h3>{worker.name}</h3>
                    <HealthBar value={worker.wellBeingMetrics} />
                </div>
            ))}
        </div>
    );
};

export default WorkerMetrics;