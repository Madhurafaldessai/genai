export interface HealthMetrics {
    workerWellBeing: number; // A value between 0 and 100 representing worker well-being
    machinePerformance: number; // A value between 0 and 100 representing machine performance
    overallHealth: number; // A value between 0 and 100 representing overall health of the factory
    rhythmScore: number; // A calculated score representing the harmony between worker health and machine output
}