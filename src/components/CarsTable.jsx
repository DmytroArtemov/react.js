import React from 'react';
import './CarsTable.scss'
  
const CarsTable = ({ cars }) => {
    return (
        <table className='cars'>
            <tbody>
            {cars.map((car) => (
                <React.Fragment key={car.id}>
                <tr className='cars__brand'>
                    <td colSpan="2">{car.brand}</td>
                </tr>
                {car.models.map((model) => (
                    model.collection.map((version, index) => (
                    <React.Fragment key={version.id}>
                        <tr>
                        { index ? null : <td rowSpan="2" className="cars__model">{model.name}</td> }
                        <td>
                            <ul>
                            <li>Version: {version.version}</li>
                            <li>Year: {version.year}</li>
                            <li>Horsepower: {version.horsepower}</li>
                            <li>Engine: {version.engine}</li>
                            </ul>
                        </td>
                        </tr>
                    </React.Fragment>
                    ))
                ))}
                </React.Fragment>
            ))}
            </tbody>
        </table>
    );
}

export default CarsTable;