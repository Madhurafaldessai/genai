import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header';
import Sidebar from './components/Common/Sidebar';
import Overview from './components/Dashboard/Overview';
import MachineMetrics from './components/Dashboard/MachineMetrics';
import WorkerMetrics from './components/Dashboard/WorkerMetrics';
import RhythmScore from './components/Dashboard/RhythmScore';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" exact component={Overview} />
            <Route path="/machine-metrics" component={MachineMetrics} />
            <Route path="/worker-metrics" component={WorkerMetrics} />
            <Route path="/rhythm-score" component={RhythmScore} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;