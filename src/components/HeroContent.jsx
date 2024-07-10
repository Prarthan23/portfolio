/* eslint-disable react/no-unescaped-entities */
import heroimg from '../assets/heroImage.jpg';

const HeroContent = () => {
  return (
    <div className='w-full h-auto flex flex-col gap-4 justify-center items-center px-5 py-8 bg-black md:flex-row md:justify-between md:items-center md:px-36'>
      <div className='order-2 flex flex-col items-center gap-2 md:order-1 md:m-6 md:items-start'>
        <div className='text-justify font-semibold text-teal-300 leading-10  md:leading-normal max-w-md md:text-3xl font-oswald'>
          Hi there! I'm an enthusiastic web developer specializing in the MERN stack. I bring fresh ideas, a passion for coding, and a dedication to delivering high-quality work.
        </div>
        <a href="/Prarthan Parmar Resume.pdf" download>
        <button className='bg-teal-500 text-white  py-3 px-5 mt-8 rounded-md hover:bg-teal-700 font-semibold'>Get Resume</button>
        </a>
       
      </div>
      <div className='order-1 md:order-2 md:m-6'>
        <img src={heroimg} alt='heroimg' className='h-56 w-56 rounded-full border-2 border-teal-400 md:h-96 md:w-96 md:rounded-md' />
      </div>
    </div>
  );
};

export default HeroContent;
