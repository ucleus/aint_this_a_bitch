import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapPage from './components/MapPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MapPage />} />
            </Routes>
        </Router>
    );
}
