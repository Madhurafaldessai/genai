class Machine {
    id: number;
    status: string;
    performanceMetrics: {
        efficiency: number;
        output: number;
        downtime: number;
    };

    constructor(id: number, status: string, performanceMetrics: { efficiency: number; output: number; downtime: number; }) {
        this.id = id;
        this.status = status;
        this.performanceMetrics = performanceMetrics;
    }
}