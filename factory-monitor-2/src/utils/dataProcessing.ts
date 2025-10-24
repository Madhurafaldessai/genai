// dataProcessing.ts

interface RawData {
    timestamp: string;
    machineOutput: number;
    workerHealth: number;
}

interface ProcessedData {
    time: Date;
    output: number;
    health: number;
}

export function processRawData(rawData: RawData[]): ProcessedData[] {
    return rawData.map(data => ({
        time: new Date(data.timestamp),
        output: data.machineOutput,
        health: data.workerHealth,
    }));
}

export function calculateAverageHealth(processedData: ProcessedData[]): number {
    const totalHealth = processedData.reduce((sum, data) => sum + data.health, 0);
    return totalHealth / processedData.length;
}

export function calculateAverageOutput(processedData: ProcessedData[]): number {
    const totalOutput = processedData.reduce((sum, data) => sum + data.output, 0);
    return totalOutput / processedData.length;
}