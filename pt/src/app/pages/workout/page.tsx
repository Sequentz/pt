const page = () => {
  return (
    <div>

    <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Workout Plans</h1>


    <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <button className="w-full text-left">
                <h2 className="text-xl font-semibold text-gray-800">4 Day Split</h2>
            </button>
            <div id="fourDayPlan" className="mt-4 hidden">

                <p className="text-gray-600">Details for 4 day split workout plan...</p>
            </div>
        </div>
    </div>


    <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <button  className="w-full text-left">
                <h2 className="text-xl font-semibold text-gray-800">5 Day Split</h2>
            </button>
            <div id="fiveDayPlan" className="mt-4 hidden">

                <p className="text-gray-600">Details for 5 day split workout plan...</p>
            </div>
        </div>
    </div>


    <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <button  className="w-full text-left">
                <h2 className="text-xl font-semibold text-gray-800">6 Day Split</h2>
            </button>
            <div id="sixDayPlan" className="mt-4 hidden">

                <p className="text-gray-600">Details for 6 day split workout plan...</p>
            </div>
        </div>
    </div>
    </div>
  )
}
export default page