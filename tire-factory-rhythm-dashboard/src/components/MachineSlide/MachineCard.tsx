import React from 'react';
import './MachineCard.module.css';

interface MachineCardProps {
    machineId: string;
    performance: number; // Performance metric (0-100)
    status: string; // Status of the machine (e.g., "Operational", "Maintenance")
}

const MachineCard: React.FC<MachineCardProps> = ({ machineId, performance, status }) => {
    return (
        <div className="machine-card">
            <h3>Machine ID: {machineId}</h3>
            <div className="performance-bar">
                <div
                    className="performance-fill"
                    style={{ width: `${performance}%`, backgroundColor: performance > 75 ? 'green' : performance > 50 ? 'orange' : 'red' }}
                />
            </div>
            <p>Performance: {performance}%</p>
            <p>Status: {status}</p>
        </div>
    );
};

export default MachineCard;