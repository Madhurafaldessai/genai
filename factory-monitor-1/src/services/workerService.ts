// src/services/workerService.ts

import { Worker } from '../models/Worker';
import { HealthMetrics } from '../models/HealthMetrics';

// Mock data for demonstration purposes
const workers: Worker[] = [
    { id: 1, name: 'Alice', wellBeingMetrics: { stressLevel: 3, fatigueLevel: 2 } },
    { id: 2, name: 'Bob', wellBeingMetrics: { stressLevel: 4, fatigueLevel: 3 } },
    { id: 3, name: 'Charlie', wellBeingMetrics: { stressLevel: 2, fatigueLevel: 1 } },
];

// Function to get all workers
export const getAllWorkers = (): Worker[] => {
    return workers;
};

// Function to calculate overall worker health metrics
export const calculateOverallHealth = (): HealthMetrics => {
    const totalWorkers = workers.length;
    const totalStress = workers.reduce((sum, worker) => sum + worker.wellBeingMetrics.stressLevel, 0);
    const totalFatigue = workers.reduce((sum, worker) => sum + worker.wellBeingMetrics.fatigueLevel, 0);

    return {
        averageStress: totalStress / totalWorkers,
        averageFatigue: totalFatigue / totalWorkers,
    };
};

// Function to get a specific worker by ID
export const getWorkerById = (id: number): Worker | undefined => {
    return workers.find(worker => worker.id === id);
};