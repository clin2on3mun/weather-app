

export default function WeatherDescription({description}:{description:string}) {
  return (
    <p className="text-6xl col-span-2 font-inter font-medium border">{description}</p>
  )
}
