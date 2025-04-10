import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ScrollPrompt = () => {
    const timerDelay = 5000;
    const [showBounce, setShowBounce] = useState(false);
    const timerRef = useRef(null);

    const resetIndicatorTimer = () => {
        clearTimeout(timerRef.current);
        setShowBounce(false);
        timerRef.current = setTimeout(() => {
            setShowBounce(true);
        }, timerDelay);
    };

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setShowBounce(true);
        }, timerDelay);

        window.addEventListener('scroll', resetIndicatorTimer, { passive:true });

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('scroll', resetIndicatorTimer);
        }

    }, []);

    return (
        <div className={`scroll-prompt ${showBounce ? 'bounce' : ''}`}>
            <i className="bi bi-arrow-bar-down"></i>
        </div>
    );
};

export default ScrollPrompt;
