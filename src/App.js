import React from 'react';

import './App.css';
import Header from './components/organisms/Header';
import Reports from './pages/reports/presenter/reports';

function App() {
    return (
        <div className="App">
            <Header />
            <Reports />
        </div>
    );
}

export default App;
