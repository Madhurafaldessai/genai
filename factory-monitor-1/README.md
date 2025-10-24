# Factory Monitor

## Overview
The Factory Monitor is a web application designed for tire factories to monitor the overall health of their operations. It provides insights into worker well-being and machine performance through a user-friendly dashboard.

## Features
- **Overview Panel**: Displays the overall health of the factory based on collected data.
- **Health Bars**: Visual representations of worker well-being and machine performance.
- **Dashboard**: Contains metrics and parameters for both workers and machines.
- **AI Implementation**: Analyzes correlations between machine output and worker health.
- **Rhythm Score**: The main feature of the dashboard that aggregates various health metrics.

## Components
- **Dashboard Components**:
  - `Overview`: Displays overall health.
  - `MachineMetrics`: Shows health bars and performance metrics for machines.
  - `WorkerMetrics`: Displays health bars and well-being metrics for workers.
  - `RhythmScore`: Calculates and displays the Rhythm Score.

- **Chart Components**:
  - `HealthBar`: Visually represents health status.
  - `PerformanceGraph`: Plots performance metrics over time.
  - `CorrelationPlot`: Visualizes correlations between machine output and worker health.

- **Common Components**:
  - `Header`: Contains title and navigation.
  - `Sidebar`: Provides navigation links.
  - `AlertBox`: Displays alerts and notifications.

## Services
- **API Service**: Functions for making API calls to fetch data.
- **Machine Service**: Handles machine-related data and metrics.
- **Worker Service**: Handles worker-related data and metrics.

## Models
- **Machine**: Defines properties such as `id`, `status`, and `performanceMetrics`.
- **Worker**: Defines properties such as `id`, `name`, and `wellBeingMetrics`.
- **HealthMetrics**: Aggregates health data for both workers and machines.

## Utilities
- **Correlation Analysis**: Functions for analyzing correlations.
- **Data Processing**: Functions for processing and transforming raw data.

## Styles
- **Theme**: Defines theme settings including colors and typography.
- **Global CSS**: Contains global styles for the application.

## Installation
To install the project, clone the repository and run the following commands:

```bash
npm install
```

## Usage
To start the application, run:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.