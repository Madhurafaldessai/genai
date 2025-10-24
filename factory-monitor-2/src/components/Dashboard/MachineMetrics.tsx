import React from 'react';
import { HealthBar } from '../Charts/HealthBar';
import { PerformanceGraph } from '../Charts/PerformanceGraph';
import { useMachineMetrics } from '../../services/machineService';

const MachineMetrics: React.FC = () => {
    const { metrics, loading, error } = useMachineMetrics();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading machine metrics.</div>;

    return (
        <div className="machine-metrics">
            <h2>Machine Metrics</h2>
            {metrics.map((machine) => (
                <div key={machine.id} className="machine">
                    <h3>{machine.name}</h3>
                    <HealthBar value={machine.health} />
                    <PerformanceGraph data={machine.performanceData} />
                </div>
            ))}
        </div>
    );
};

export default MachineMetrics;