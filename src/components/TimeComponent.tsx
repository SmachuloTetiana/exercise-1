import React, { useEffect, useState } from "react";
import "./style.css";

const TimeComponent: React.FC = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    let interval: ReturnType<typeof setInterval>;

    useEffect(() => {
        interval = setInterval(() => updateTime(), 1000);

        return () => clearInterval(interval);
    }, []);

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    };

    return (
        <main className="container">
            <h1 className="time">{time}</h1>
        </main>
    );
};

export default TimeComponent;
