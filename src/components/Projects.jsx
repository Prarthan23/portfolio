/* eslint-disable react/no-unescaped-entities */
import skill1 from '../assets/react.svg';
import skill2 from '../assets/icons8-nodejs.svg'
import skill3 from '../assets/icons8-express-js.svg'
import skill4 from '../assets/mongodb-ar21.svg'
import androidlogo from '../assets/android-tile.svg'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-8 bg-slate-900'>
        <h1 className='text-4xl text-cyan-200 font-semibold mb-4'>Projects</h1>
        <div className='flex flex-col gap-14 px-10 md:gap-28 md:justify-center md:items-center md:px-16'>
            <div className='flex flex-col justify-center items-center gap-10 md:flex-col md:justify-center md:items-center md:gap-12'>
                <h1 className='text-2xl text-blue-200 md:text-5xl'><span className='font-bold'>Docverse</span>-Stationary Management System</h1>
                <div className='hidden md:flex gap-20 justify-between px-12 items-center'>
                    <img src={skill4} alt='MongoDb'className='h-24'></img>
                    <img src={skill3} alt='Exress'className='h-24'></img>
                    <img src={skill1} alt='React'className='h-24'></img>
                    <img src={skill2} alt='Node'className='h-24'></img>
                </div>
                <p className='text-justify text-blue-300'>DocVerse is a comprehensive stationary management system developed using the MERN stack. Designed primarily for educational institutions, it simplifies student access to materials through features like material requests, document uploads, and lab manual templates. Students can request specific materials, upload documents for printing, and access standardized lab manual formats. On the admin side, there's a streamlined material request management system and a print queue where uploaded documents are previewed and ordered for printing. DocVerse aims to centralize stationary needs, streamline document handling, and enhance administrative efficiency within educational settings.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-10 md:flex-col md:justify-center md:items-center md:gap-12'>
                <h1 className='text-2xl text-blue-200 md:text-5xl'>Online Bidding Application for Artists</h1>
                <div className='hidden md:flex  px-12 items-center'>
                    <img src={androidlogo} alt='android'className='h-24'></img>
                </div>
                <p className='text-justify text-blue-300'>Designed for artists, the Online Bidding Application provides a platform where users can either sell or buy artwork. Sellers upload product images, details, pricing, and contact information, which are then showcased to potential buyers. Buyers can view listed products, place bids, and the highest bidder is connected with the seller. Conversely, buyers can explore available artworks, place bids, and purchase items directly by paying the specified price. This Android-based platform aims to facilitate efficient transactions, connecting artists with interested buyers seamlessly through an intuitive bidding process.</p>
            </div>
        </div>
        </div>
       
  )
}

export default Projects