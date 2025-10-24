import React from 'react';

interface HealthBarProps {
    title: string;
    value: number;
    maxValue: number;
}

const HealthBar: React.FC<HealthBarProps> = ({ title, value, maxValue }) => {
    const percentage = (value / maxValue) * 100;

    return (
        <div style={{ margin: '20px 0' }}>
            <h4>{title}</h4>
            <div style={{ background: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', height: '30px' }}>
                <div
                    style={{
                        height: '100%',
                        width: `${percentage}%`,
                        background: percentage > 75 ? '#4caf50' : percentage > 50 ? '#ff9800' : '#f44336',
                        transition: 'width 0.5s ease-in-out',
                    }}
                />
            </div>
            <span>{value} / {maxValue}</span>
        </div>
    );
};

export default HealthBar;