const Navbar = () => {
  return (
    <header>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-center">
            <div className="w-3/12 uppercase text-2xl font-semibold font-logo text-yellow-50">
              Ticktick.IO
            </div>
            <div className="w-9/12 flex justify-end">
              <button className="w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-700 text-base font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-cyan-900 sm:ml-3 sm:text-sm">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
