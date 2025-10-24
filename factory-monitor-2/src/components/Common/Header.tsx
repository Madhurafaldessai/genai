import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Tire Factory Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#machine-metrics">Machine Metrics</a></li>
                    <li><a href="#worker-metrics">Worker Metrics</a></li>
                    <li><a href="#rhythm-score">Rhythm Score</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;