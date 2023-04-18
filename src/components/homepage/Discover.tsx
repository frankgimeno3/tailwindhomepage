import React from "react";
import Image from "next/image";

export const Discover = () => {
  return (
    <div className="flex flex-wrap justify-between m-8">
    <div className="w-full sm:w-1/3">
      <div className="flex flex-col w-5/6">
        <div className="h-3px w-auto my-3">
          <Image src="/images/discover1.png" alt="discover1" />
        </div>
        <div> <p className="text-gray-600 mt-2">17 de Octubre, 2022</p> </div>
        <div>
          <h3 className="font-bold mt-2"> 5 consejos para lograr el éxito financiero: cómo mejorar </h3>
        </div>
        <div>
          <h4 className="text-gray-600 mt-2">
            Lograr el éxito financiero es una meta que muchas personas
            aspiran a alcanzar en su vida. Para lograrlo, es fundamental
            adoptar...
          </h4>
        </div>
        <div className="flex flex-row items-center">
          <h4 className="font-bold">Leer más</h4>
          <div className="h-3px w-auto my-4 mt-5 ml-2">
            <Image src="/images/icons/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-full sm:w-1/3">
      <div className="flex flex-col w-5/6">
        <div className="h-3px w-auto my-3">
          <Image src="/images/discover2.png" alt="discover2" />
        </div>
        <div>
          <p className="text-gray-600 mt-2">17 de Octubre, 2022</p>
        </div>
        <div>
          <h3 className="font-bold mt-2">
            5 consejos para lograr el éxito financiero: cómo mejorar
          </h3>
        </div>
        <div>
          <h4 className="text-gray-600 mt-2">
            Lograr el éxito financiero es una meta que muchas personas
            aspiran a alcanzar en su vida. Para lograrlo, es fundamental
            adoptar...
          </h4>
        </div>
        <div className="flex flex-row items-center">
          <h4 className="font-bold">Leer más</h4>
          <div className="h-3px w-auto my-4 mt-5 ml-2">
            <Image src="/images/icons/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-full sm:w-1/3">
      <div className="flex flex-col w-5/6 ">
        <div className="h-3px w-auto my-3">
          <Image src="/images/discover3.png" alt="discover3" />
        </div>
        <div>
          <p className="text-gray-600 mt-2">17 de Octubre, 2022</p>
        </div>
        <div>
          <h3 className="font-bold mt-2">
                5 consejos para lograr el éxito financiero: cómo mejorar
              </h3>
            </div>
            <div>
              <h4 className="text-gray-600 mt-2">
                Lograr el éxito financiero es una meta que muchas personas
                aspiran a alcanzar en su vida. Para lograrlo, es fundamental
                adoptar...
              </h4>
            </div>
            <div className="flex flex-row items-center">
              <h4 className="font-bold">Leer más</h4>
              <div className="h-3px w-auto my-4 mt-5 ml-2 ">
                <Image src="/images/icons/arrow.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
