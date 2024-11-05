import TilesScreen from './components/TilesScreen'

const App = () => (
  <>
    <div className="fixed inset-0 flex items-center justify-center text-white">
      <div className="transition-colors duration-500">
        <span className="text-5xl">Hello, I am</span>
        <h1 className="hover:text-[#71d9ce] transition-colors text-8xl font-bold -mt-3">
          gigigimay.
        </h1>
      </div>
    </div>
    <TilesScreen />
  </>
)

export default App
