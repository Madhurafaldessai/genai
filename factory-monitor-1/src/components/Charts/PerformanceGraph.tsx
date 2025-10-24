import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchPerformanceData } from '../../services/api';

const PerformanceGraph = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Machine Performance',
                data: [],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
            {
                label: 'Worker Well-Being',
                data: [],
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                fill: true,
            },
        ],
    });

    useEffect(() => {
        const getData = async () => {
            const performanceData = await fetchPerformanceData();
            setData({
                labels: performanceData.labels,
                datasets: [
                    {
                        ...data.datasets[0],
                        data: performanceData.machinePerformance,
                    },
                    {
                        ...data.datasets[1],
                        data: performanceData.workerWellBeing,
                    },
                ],
            });
        };

        getData();
    }, []);

    return (
        <div>
            <h2>Performance Metrics Over Time</h2>
            <Line data={data} />
        </div>
    );
};

export default PerformanceGraph;