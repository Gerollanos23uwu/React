import React, { Component } from 'react';
import './DrawClass.css';
import CLASS_UML from '../Component/ClassData';


class DrawClass extends Component {
  render() {
    // Desestructura los datos de la clase pasados como prop
    const { name, attributes, methods, borderColor, headColor, textColor } = CLASS_UML;

    // Calcula la altura del rectángulo de clase en función del número de atributos y métodos
    const classHeight = 60 + (attributes.length + methods.length) * 20;

    return (
      <div className="svg-container">
        <svg width="300" height={classHeight}>
          {/* Contorno de la clase */}
          <rect className='Caja-uml' width="250" height={classHeight} fill="none" stroke={borderColor} strokeWidth="2" />

          {/* Título de la clase (Header) */}
          <rect x="0" y="0" width="250" height="30" fill={headColor} />
          <text className='Title' x="10" y="20" fill={textColor} fontSize="14">{name}</text>

          {/* Atributos */}
          {attributes.map((attribute, index) => (
            <text key={index} x="10" y={40 + index * 20} fill={textColor} fontSize="12">{attribute}</text>
          ))}

          {/* Línea divisoria */}
          <line x1="0" y1={attributes.length * 20 + 30} x2="250" y2={attributes.length * 20 + 30} stroke={borderColor} strokeWidth="2" />

          {/* Métodos */}
          {methods.map((method, index) => (
            <text key={index} x="10" y={attributes.length * 20 + 50 + index * 20} fill={textColor} fontSize="12">{method}</text>
          ))}
        </svg>
      </div>
    );
  }
}

export default DrawClass