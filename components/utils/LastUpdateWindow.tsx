import React, { useEffect, useState } from 'react';
import './FloatingWindow.css';

export default function LastUpdateWindow() {
    const [lastUpdated, setLastUpdated] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setLastUpdated(new Date());
        }, 1000); // Update every 1 second

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="floating-window">
            Last Updated: {lastUpdated.toLocaleTimeString()}
        </div>
    );
};