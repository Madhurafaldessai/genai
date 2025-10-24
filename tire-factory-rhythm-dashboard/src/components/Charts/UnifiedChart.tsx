import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchMachineData, fetchWorkerData } from '../../services/api';
import { calculateRhythmScore } from '../../utils/metrics';

const UnifiedChart = () => {
    const [machineData, setMachineData] = useState([]);
    const [workerData, setWorkerData] = useState([]);
    const [rhythmScore, setRhythmScore] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const machines = await fetchMachineData();
            const workers = await fetchWorkerData();
            setMachineData(machines);
            setWorkerData(workers);
            setRhythmScore(calculateRhythmScore(machines, workers));
        };

        getData();
    }, []);

    const data = {
        labels: machineData.map(data => data.timestamp),
        datasets: [
            {
                label: 'Machine Performance',
                data: machineData.map(data => data.performance),
                borderColor: 'rgba(255, 165, 0, 1)',
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                fill: true,
            },
            {
                label: 'Worker Well-Being',
                data: workerData.map(data => data.wellBeing),
                borderColor: 'rgba(0, 123, 255, 1)',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#000', color: '#fff' }}>
            <h2>Unified Performance Chart</h2>
            <Line data={data} />
            <h3>Rhythm Score: {rhythmScore}</h3>
        </div>
    );
};

export default UnifiedChart;