import React, { useEffect } from 'react';
import './PixieDust.css';

const PixieDust = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            createDust(event.clientX, event.clientY);
        };

        const createDust = (x, y) => {
            const dust = document.createElement('div');
            dust.className = 'dust';
            dust.style.left = `${x}px`;
            dust.style.top = `${y}px`;

            document.body.appendChild(dust);

            setTimeout(() => {
                dust.remove();
            }, 1000); // Removes the dust particle after 1 second
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return null;
};

export default PixieDust;
