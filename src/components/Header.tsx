import { Search } from "lucide-react";


export default function Header({children}: {children?: React.ReactNode}) {
  function handleClick(){
    console.log("clicked")
  }
  return (
    <header className="container mx-auto grid grid-rows-[auto_1fr] gap-5 min-h-150 py-5 border">
     <nav className="flex items-center justify-between px-4 mx-auto h-11 w-full">
        <h1 className="font-roboto text-3xl font-semibold">Weather Today</h1>
        <button onClick={handleClick} className="w-8 h-8 cursor-pointer bg-secondary flex justify-center items-center p-1 rounded-full"><Search size={16}  className="text-whiter font-bold"/></button>
     </nav>   
      {children}
    </header>
  )
}
