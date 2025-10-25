import CountUp from './ui/CountUp';

export default function TemperatureControl({temperature,min, max}:{temperature:number, min:number, max:number}) {
  return (
       <div className=" flex flex-col md:flex-row md:items-center  border gap-6">
        <p className="text-6xl font-poppins">
          <CountUp from={0} to={temperature} duration={1} />°
        </p>
        <div className="grid gap-1">
          <p className="w-24 border grid grid-cols-2 rounded-3xl"><span className="flex text-lg font-medium border-r justify-center">H</span><span className=" font-medium flex text-lg  justify-center">{max}°</span></p>
          <p className="w-24 border grid grid-cols-2 rounded-3xl"><span className="flex text-lg font-medium border-r justify-center">L</span><span className="font-medium flex text-lg  justify-center">{min}°</span></p>
        </div>
      </div>
        
  )
}
