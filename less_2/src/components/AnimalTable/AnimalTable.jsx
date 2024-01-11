import React, { useState, useEffect } from 'react';
import './AnimalTable.css';

const animals = [
    { type: 'turtle', icon: '🐢' },
    { type: 'octopus', icon: '🐙' },
    { type: 'fish', icon: '🐠' },
    { type: 'flamingo', icon: '🦩' },
    { type: 'penguin', icon: '🐧' }
];

const AnimalTable = () => {
    const [activeAnimals, setActiveAnimals] = useState(new Array(animals.length).fill(false));
    const [intervalId, setIntervalId] = useState(null);
    const [borderStyle, setBorderStyle] = useState('');

    useEffect(() => {
        const id = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * animals.length);
            setActiveAnimals(prev => prev.map((active, index) => index === randomIndex ? true : active));
        }, 2000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const allActive = activeAnimals.every(active => active);
        if (allActive && intervalId) {
            clearInterval(intervalId);
        }
    }, [activeAnimals, intervalId]);

    useEffect(() => {
        const activeCount = activeAnimals.filter(active => active).length;
        if (activeCount === animals.length) {
            setBorderStyle('tableWithThickBorder');
        } else if (activeCount >= animals.length / 2) {
            setBorderStyle('tableWithBorder');
        } else {
            setBorderStyle('');
        }
    }, [activeAnimals]);

    return (
        <table className={borderStyle}>
            <tbody>
                {animals.map((animal, index) => (
                    <tr key={animal.type} className={activeAnimals[index] ? 'activeAnimal' : ''}>
                        <td>{animal.icon}</td>
                        <td>{animal.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AnimalTable;