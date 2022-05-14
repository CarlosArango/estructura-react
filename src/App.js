import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/organisms/Header';

import Reports from './pages/reports/presenter/reports';
import Users from './pages/users/presenter/users';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </div>
    );
};

export default App;
