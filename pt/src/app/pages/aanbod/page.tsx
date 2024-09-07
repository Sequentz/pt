import Link from "next/link";
import AppointmentButton from "../../components/BookButton";



const page = () => {
  return (
    <div>
             <section id="services" className="py-16 bg-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Aanbod</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8 px-4">
            <div className="bg-customGray p-8 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">Personal Training</h3>
              <p className="text-gray-300">One-on-one training, spiergroep naar keuze.</p>
              <Link href="./pages/booking">Maak afspraak</Link>
              
            </div>
            <div className="bg-customGray p-8 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">Training schema's</h3>
              <p className="text-gray-300">Gepersonaliseerd training schema op basis van uw doelen.</p>
              <Link href="/pages/workout">Get one</Link>
            </div>
            <div className="bg-customGray p-8 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-100">Voeding schema's</h3>
              <p className="text-gray-300">Gepersonaliseerd voeding schema op basis van uw doelen.</p>
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-6 py-1 mt-8 rounded-lg">Get one</button>
            </div>
          </div>
        </section>
    </div>
  )
}
export default page