Sure, here's the contents for the file /factory-monitor/factory-monitor/src/services/api.ts:

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchMachineData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/machines`);
        return response.data;
    } catch (error) {
        console.error('Error fetching machine data:', error);
        throw error;
    }
};

export const fetchWorkerData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/workers`);
        return response.data;
    } catch (error) {
        console.error('Error fetching worker data:', error);
        throw error;
    }
};

export const fetchHealthMetrics = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/health-metrics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching health metrics:', error);
        throw error;
    }
};