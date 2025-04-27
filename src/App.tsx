import './App.css'
// import { Controls } from './components/controls/controls'
import { ScreenInput } from './components/input-screen/input'

function App() {

  const currYear = new Date().getFullYear()
  return (
    <section className='h-screen bg-[#e9e9e9] border' >
      <nav className='h-[5rem] w-full flex items-center bg-white shadow shadow-[#d1d1d1]'>
        <h1 className='text-3xl mx-5 font-semibold'>Matrix Calculator</h1>
      </nav>
      <div className='my-5 grid place-items-center'>
        <div className='flex lg:flex-row flex-col w-full justify-evenly'>
          <ScreenInput/>
          <ScreenInput/>
        </div>
        {/* <div className='my-5 grid justify-center'>
          <Controls/>
        </div> */}
      </div>
      <footer className='absolute bottom-0 left-0 h-[4rem] w-full grid place-items-center'>
        Jobearry @{currYear}
      </footer>
    </section>
  )
}

export default App
