import Image from 'next/image';
import lineImage from '../../../public/images/Line4.png';

export default function OurValues() {
  return (
    <div className="flex mx-2 my-5 justify-center ">
      <div className="flex  flex-wrap justify-between items-center md:flex-wrap">
        <h4 className="font-bold font-poppins inline-block mx-10 my-10 text-2xl" style={{ color: '#000040' }}>Confidencialidad</h4>
        <Image className="max-h-2" src={lineImage} alt="Línea decorativa" />

        <h4 className="font-bold font-poppins inline-block mx-10 my-10 text-2xl" style={{ color: '#000040' }}>Ética</h4>
        <Image className="max-h-2" src={lineImage} alt="Línea decorativa" />

        <h4 className="font-bold font-poppins inline-block mx-10 my-10 text-2xl" style={{ color: '#000040' }}>Innovación</h4>
        <Image className="max-h-2" src={lineImage} alt="Línea decorativa" />

        <h4 className="font-bold font-poppins inline-block mx-10 my-10 text-2xl" style={{ color: '#000040' }}>Calidad</h4>
      </div>
    </div>
  )
}