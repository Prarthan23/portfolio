import reactlogo from '../assets/react.svg'
import flutterlogo from '../assets/flutterio-icon.svg'

const InternShips = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-8 bg-slate-900'>
        <h1 className='text-4xl text-cyan-200 font-semibold mb-4'>Internships</h1>
        <div className='flex flex-col gap-10 px-10 justify-center items-center md:grid md:grid-cols-2 md:gap-20'>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={reactlogo} alt='react' className='h-32'></img>
            <p className='text-blue-200 font-semibold'>Duration: 16th January 2024 - 6th April 2024</p>
            <p className='text-justify text-blue-300'>I completed my 3 months internship from Thats End Pvt. Ltd, bakrol, anand in which i learned about web development using the react js  framework , i shown my passin towards coding by solving all the task thats is given to me and i learned how things actually wokrs at production level. so it was a nice experience.</p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={flutterlogo} alt='flutter' className='h-32'></img>
            <p className='text-blue-200 font-semibold'>Duration: 27th July 2023 - 17th August 2023</p>
            <p className='text-justify text-blue-300'>I completed my 2-weeks of internship from Thats End Pvt. Ltd. in the domain of application development through flutter, in which i learned about flutter and dart fundamentals the project structure , and how to create user interface. and i completed all the task given by my trainer. and i outshined all other interns their, so it was amazing experience.</p>
        </div>
        </div>
       
    </div>
  )
}

export default InternShips