import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="flex flex-col mx-10">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold text-blue-900">SERVICIOS</h4>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <h2 className="text-xl font-bold">¿Qué hacemos?</h2>
            <p>Nos especializamos en proporcionar soluciones personalizadas para sus clientes y ofrecer servicios de M&A, reestructuración y asesoramiento al Consejo de Administración y accionistas.</p>
          </div>
          
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold text-blue-900">M&A</h4>
          <p className="text-lg">Identificamos el valor real de la empresa para tomar decisiones estratégicas y optimizar la estructura de capital</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold text-blue-900">Reestructuraciones y Refinanciaciones</h4>
          <p className="text-lg">Optimizamos y renegociamos deudas para mejorar la situación financiera y aumentar la capacidad de inversión</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold text-blue-900">Servicios al Consejo de Administración y accionistas</h4>
          <p className="text-lg">Brindamos servicios financieros de alto valor para la toma de decisiones estratégicofinancieras</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-2xl font-bold text-blue-900">Soluciones personalizadas</h4>
          <p className="text-lg">Nuestras soluciones personalizadas permiten posicionarse con la competencia y controlar de manera efectiva el negocio para optimizar su rendimiento financiero.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;