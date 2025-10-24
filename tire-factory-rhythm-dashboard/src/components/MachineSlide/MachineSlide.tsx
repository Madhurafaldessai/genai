import React from 'react';
import './MachineSlide.module.css';

const MachineSlide = ({ machines }) => {
    return (
        <div className="machine-slide">
            <h2>Machine Metrics</h2>
            <div className="machine-cards">
                {machines.map((machine, index) => (
                    <MachineCard key={index} machine={machine} />
                ))}
            </div>
        </div>
    );
};

const MachineCard = ({ machine }) => {
    return (
        <div className="machine-card">
            <h3>{machine.name}</h3>
            <p>Output: {machine.output}</p>
            <p>Performance: {machine.performance}</p>
            <p>Health: {machine.health}</p>
        </div>
    );
};

export default MachineSlide;