import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Factory Dashboard</h2>
            <ul>
                <li>
                    <Link to="/overview">Overview</Link>
                </li>
                <li>
                    <Link to="/machine-metrics">Machine Metrics</Link>
                </li>
                <li>
                    <Link to="/worker-metrics">Worker Metrics</Link>
                </li>
                <li>
                    <Link to="/rhythm-score">Rhythm Score</Link>
                </li>
                <li>
                    <Link to="/correlation-plot">Correlation Plot</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;