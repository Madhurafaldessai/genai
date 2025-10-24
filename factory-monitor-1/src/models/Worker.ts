class Worker {
    id: number;
    name: string;
    wellBeingMetrics: {
        stressLevel: number;
        fatigueLevel: number;
        satisfactionLevel: number;
    };

    constructor(id: number, name: string, wellBeingMetrics: { stressLevel: number; fatigueLevel: number; satisfactionLevel: number; }) {
        this.id = id;
        this.name = name;
        this.wellBeingMetrics = wellBeingMetrics;
    }
}

export default Worker;