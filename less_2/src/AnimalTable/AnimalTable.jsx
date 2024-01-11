import React, { useState, useEffect } from 'react';

const animals = [
    { type: 'turtle', icon: '🐢' },
    { type: 'octopus', icon: '🐙' },
    { type: 'fish', icon: '🐠' },
    { type: 'flamingo', icon: '🦩' },
    { type: 'penguin', icon: '🐧' }
];

const AnimalTable = () => {
    
    const [activeAnimals, setActiveAnimals] = useState(new Array(animals.length).fill(false));

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * animals.length);
            setActiveAnimals(prev => prev.map((active, index) => index === randomIndex ? true : active));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const activeCount = activeAnimals.filter(active => active).length;
    const tableStyle = {
        border: activeCount === animals.length ? '20px solid' : activeCount >= animals.length / 2 ? '10px solid' : 'none'
    };

    return (
        <table style={tableStyle}>
            <tbody>
                {animals.map((animal, index) => (
                    <tr key={animal.type} style={{ color: activeAnimals[index] ? 'green' : 'black', fontWeight: activeAnimals[index] ? 'bold' : 'normal' }}>
                        <td>{animal.icon}</td>
                        <td>{animal.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AnimalTable;