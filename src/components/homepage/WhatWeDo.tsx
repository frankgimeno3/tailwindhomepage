import React from "react";
import Image from "next/image";

export const WhatWeDo = () => {
  return (
    <div className="flex flex-col m-20 ">
      <div className="flex flex-col my-5">
        <div className="flex flex-col">
          <h4 className="text-xl font-bold text-blue-900">SERVICIOS</h4>
        </div>
        <div class="flex flex-row flex-wrap">
          <div class="w-full sm:w-1/2">
            <h2 class="text-4xl sm:text-5xl text-left ">¿Qué hacemos?</h2>
          </div>
          <div class="w-full sm:w-1/2 flex flex-col justify-start mt-4 sm:mt-0">
            <p class="text-left">
              Nos especializamos en proporcionar soluciones personalizadas para
              sus clientes y ofrecer servicios de M&A, reestructuración y 
              asesoramiento al Consejo de Administración y accionistas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="h-3px w-auto my-2  ">
            <Image
              src="/images/icons/ma.png"
              alt="ma"
            />
          </div>
          <h4 className="text-xl font-bold text-blue-900  ">M&A</h4>
          <p className="text-lg mt-2 ">
            Identificamos el valor real de la empresa para tomar decisiones
            estratégicas y optimizar la estructura de capital
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="h-3px w-auto my-2  ">
            <Image
              src="/images/icons/reestructuraciones.png"
              alt="reestructuraciones"
            />
          </div>
          <h4 className="text-xl font-bold text-blue-900  ">
            Reestructuraciones y Refinanciaciones
          </h4>
          <p className="text-lg mt-2">
            Optimizamos y renegociamos deudas para mejorar la situación
            financiera y aumentar la capacidad de inversión
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="h-3px w-auto my-3  ">
            <Image src="/images/icons/consejo.png" alt="consejo" />
          </div>
          <h4 className="text-xl font-bold text-blue-900  ">
            Servicios al Consejo de Administración y accionistas
          </h4>
          <p className="text-lg mt-2">
            Brindamos servicios financieros de alto valor para la toma de
            decisiones estratégico-financeiras
          </p>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="h-3px w-auto my-2  ">
          <Image
            src="/images/icons/soluciones.png"
            alt="soluciones"
          />
          </div>
          <h4 className="text-xl font-bold text-blue-900 ">
            Soluciones personalizadas
          </h4>
        
          <p className="text-lg mt-2">
            Nuestras soluciones personalizadas permiten posicionarse con la
            competencia y controlar de manera efectiva el negocio para optimizar
            su rendimiento financiero.
          </p>
        </div>
      </div>
    </div>
  );
};

