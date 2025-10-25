import Header from "../components/Header";
import Location from "../components/Location";
import TemperatureControl from "../components/TemperatureControl";
import WeatherDescription from "../components/WeatherDescription";

export default function Home() {
  return (
    <>
        <Header>
            <section className="px-4">
                <section className="flex flex-col gap-8 border justify-center lg:min-h-[350px]">
                <Location location="New York"/>
                 <div className="grid grid-cols-2 gap-10">
                  <TemperatureControl temperature={18} min={20} max={24}/>
                   <p>Stay ahead of the weather with our app — get real-time forecasts, temperature updates, and alerts tailored to your location. Simple, accurate, and designed to keep you prepared every day.</p>
                  <WeatherDescription description="Partly cloudy"/>
                  </div>
                </section>
            </section>
            <section className="px-4">
              <h2 className="text-xl font-medium font-inter">
                Your Recent Searches
              </h2>
              <div>
                 
              </div>
            </section>
            
        </Header>

    </>
  )
}
