

// const Footer = () => {
//   return (
//     <div>
//         <div className='flex justify-between items-center'>
//             <p>+91-8155849212</p>
//             <p></p>
//         </div>
//     </div>
//   )
// }

// export default Footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <footer className='w-full bg-slate-800 text-blue-200 py-4'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-5'>
          <div className='flex flex-col gap-3 items-center mb-4 md:mb-0 md:items-start'>
            <h2 className='text-xl font-bold'>Prarthan Parmar</h2>
            <p className='text-sm'>Web Developer</p>
          </div>
          <div className=' mb-4 md:mb-0 '>
            <nav className='hidden md:flex gap-4'>
              <a href='#home' className='hover:text-teal-400'>Home</a>
              <a href='#skills' className='hover:text-teal-400'>Skills</a>
              <a href='#internships' className='hover:text-teal-400'>Internships</a>
              <a href='#projects' className='hover:text-teal-400'>Projects</a>
              <a href='#connect' className='hover:text-teal-400'>Connect</a>
            </nav>
          </div>
          <div className='flex flex-col items-center md:items-end md:gap-2'>
            <p className='hover:text-teal-400 flex items-center'>
            <FontAwesomeIcon icon={faPhone} /><span> +91-8155849212</span></p>
            <p className='hover:text-teal-400 flex items-center' >
                prarthan1121@gmail.com
            </p>
          </div>
        </div>
        <div className='container mx-auto text-center py-2 text-sm'>
          &copy; 2024 Prarthan Parmar. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  