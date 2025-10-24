// src/services/machineService.ts

import { Machine } from '../models/Machine';
import { HealthMetrics } from '../models/HealthMetrics';

// Mock data for demonstration purposes
const machines: Machine[] = [
    { id: 1, status: 'Operational', performanceMetrics: { efficiency: 85, downtime: 5 } },
    { id: 2, status: 'Maintenance', performanceMetrics: { efficiency: 60, downtime: 15 } },
];

// Function to get all machines
export const getAllMachines = (): Machine[] => {
    return machines;
};

// Function to get machine by ID
export const getMachineById = (id: number): Machine | undefined => {
    return machines.find(machine => machine.id === id);
};

// Function to calculate overall machine health metrics
export const calculateMachineHealth = (): HealthMetrics => {
    const totalMachines = machines.length;
    const operationalMachines = machines.filter(machine => machine.status === 'Operational').length;
    const averageEfficiency = machines.reduce((sum, machine) => sum + machine.performanceMetrics.efficiency, 0) / totalMachines;

    return {
        total: totalMachines,
        operational: operationalMachines,
        averageEfficiency: averageEfficiency,
    };
};