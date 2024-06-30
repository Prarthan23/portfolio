import LinkedIn from '../assets/linkedin-tile.svg'
import UpWork from '../assets/upwork-tile.svg'
import instagram from '../assets/instagram-icon.svg'
import github from '../assets/github-tile.svg'

const ConnectMe = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-8 bg-slate-900'>
        <h1 className='text-4xl text-cyan-200 font-semibold mb-4'>Connect With Me</h1>
        <div className='flex gap-10'>
          <a href='https://www.linkedin.com/in/prarthan-parmar-145618295/?trk=opento_sprofile_details' target='_blank'><img src={LinkedIn} alt="LinkedIn" className='h-10'></img></a>
          <a href='https://www.upwork.com/freelancers/~01430c780c8ced13d4' target='_blank'><img src={UpWork} alt="UpWork" className='h-10'></img></a>
          <a href='https://www.instagram.com/_prarthan_23?igsh=MXUxdm04YzB4empjdA==' target='_blank'><img src={instagram} alt="Instagram" className='h-10'></img></a>
          <a href='https://github.com/Prarthan23' target='_blank'><img src={github} alt="GitHub" className='h-10'></img></a>
        </div>
    </div>
  )
}

export default ConnectMe