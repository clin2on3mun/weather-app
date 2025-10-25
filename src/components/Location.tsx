import { FaLocationDot } from "react-icons/fa6";

export default function Location({location}:{location:string}) {
  const date =    new Date(Date.now()).toLocaleDateString('en-US', {
    weekday:'long',
    month:'long',
    day:'numeric',
  })
  return (
    <h2 className="flex gap-1 items-center text-base border font-inter">
      <FaLocationDot className="fill-gray-700 text-xl" /><span className="font-medium ml-1">{location}</span><span className="">({date})</span>
    </h2>
  )
}
