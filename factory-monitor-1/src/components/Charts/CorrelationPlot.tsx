import React from 'react';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchMachineData, fetchWorkerData } from '../../services/api';

const CorrelationPlot = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const machineData = await fetchMachineData();
            const workerData = await fetchWorkerData();
            const correlationData = analyzeCorrelation(machineData, workerData);
            setData(correlationData);
        };

        getData();
    }, []);

    const analyzeCorrelation = (machineData, workerData) => {
        // Logic to analyze correlation between machine output and worker health
        // This is a placeholder for actual correlation analysis
        return {
            labels: machineData.map(item => item.timestamp),
            datasets: [
                {
                    label: 'Machine Output',
                    data: machineData.map(item => item.output),
                    borderColor: 'blue',
                    fill: false,
                },
                {
                    label: 'Worker Health',
                    data: workerData.map(item => item.health),
                    borderColor: 'orange',
                    fill: false,
                },
            ],
        };
    };

    return (
        <div>
            <h2>Correlation between Machine Output and Worker Health</h2>
            <Line data={data} />
        </div>
    );
};

export default CorrelationPlot;